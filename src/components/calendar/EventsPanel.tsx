
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, FileText, CalendarDays, Brain, Palmtree, Sparkles } from "lucide-react";
import EventGroup from "./EventGroup";
import NoEvents from "./NoEvents";
import { CalendarEvent } from "./types";

interface EventsPanelProps {
  selectedDate: Date | undefined;
  selectedDateEvents: CalendarEvent[];
  groupedEvents: {
    assignment: CalendarEvent[];
    lecture: CalendarEvent[];
    study: CalendarEvent[];
    break: CalendarEvent[];
  };
  onAddStudyBreak: () => void;
}

const EventsPanel = ({ 
  selectedDate, 
  selectedDateEvents, 
  groupedEvents, 
  onAddStudyBreak 
}: EventsPanelProps) => {
  return (
    <div className="col-span-12 lg:col-span-9 p-6 md:p-8 min-h-screen bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold">
            {selectedDate ? selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) : "Sélectionnez une date"}
          </h3>
          <Button 
            variant="outline" 
            onClick={onAddStudyBreak} 
            className="flex items-center gap-1 bg-white hover:bg-gray-50"
          >
            <Plus size={16} />
            <span>Ajouter un événement</span>
          </Button>
        </div>
        
        {selectedDateEvents.length === 0 ? (
          <NoEvents />
        ) : (
          <div className="grid grid-cols-1 gap-6">
            <EventGroup 
              title="Cours" 
              events={groupedEvents.lecture} 
              icon={<CalendarDays size={16} className="text-blue-500" />} 
              colorClass="blue-pastel-light" 
            />
            
            <EventGroup 
              title="Devoirs" 
              events={groupedEvents.assignment} 
              icon={<FileText size={16} className="text-rose-500" />} 
              colorClass="primary" 
            />
            
            <EventGroup 
              title="Révisions" 
              events={groupedEvents.study} 
              icon={<Brain size={16} className="text-purple-500" />} 
              colorClass="purple-light" 
            />
            
            <EventGroup 
              title="Pauses" 
              events={groupedEvents.break} 
              icon={<Palmtree size={16} className="text-green-500" />} 
              colorClass="green-mint" 
            />
            
            {/* AI Study Assistant */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100/50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Sparkles size={20} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Assistant IA de révision</h4>
                  <p className="text-sm text-muted-foreground">Optimisez votre temps d'étude avec l'IA</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Button variant="default" className="w-full bg-blue-500 hover:bg-blue-600">
                  <Brain size={16} className="mr-2" />
                  Créer une fiche de révision
                </Button>
                <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50">
                  <Sparkles size={16} className="mr-2" />
                  Planifier mes révisions
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPanel;
