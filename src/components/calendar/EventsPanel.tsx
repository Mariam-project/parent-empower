
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, FileText, CalendarDays, Brain, Palmtree, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
    <div className="md:col-span-7 lg:col-span-8 p-6 md:p-8 overflow-y-auto max-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium">
          {selectedDate ? selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) : "Sélectionnez une date"}
        </h3>
        <Button variant="outline" size="sm" onClick={onAddStudyBreak} className="flex items-center gap-1">
          <Plus size={14} />
          <span>Ajouter une pause</span>
        </Button>
      </div>
      
      {selectedDateEvents.length === 0 ? (
        <NoEvents />
      ) : (
        <div className="space-y-8">
          <EventGroup 
            title="Devoirs" 
            events={groupedEvents.assignment} 
            icon={<FileText size={16} />} 
            colorClass="primary" 
          />
          
          <EventGroup 
            title="Cours" 
            events={groupedEvents.lecture} 
            icon={<CalendarDays size={16} />} 
            colorClass="blue-pastel-light" 
          />
          
          <EventGroup 
            title="Révisions" 
            events={groupedEvents.study} 
            icon={<Brain size={16} />} 
            colorClass="purple-light" 
          />
          
          <EventGroup 
            title="Pauses bien-être" 
            events={groupedEvents.break} 
            icon={<Palmtree size={16} />} 
            colorClass="green-mint" 
          />
          
          {/* AI Suggestion Panel */}
          <div className="p-5 border border-dashed border-primary/30 rounded-lg mt-8 bg-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-primary" />
              <h4 className="font-medium">Suggestion IA</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              D'après votre emploi du temps, il serait idéal de prévoir une session de révision 
              avant votre échéance de Mathématiques. Voulez-vous l'ajouter ?
            </p>
            <Button size="sm" variant="outline" className="w-full">
              Ajouter à mon planning
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPanel;
