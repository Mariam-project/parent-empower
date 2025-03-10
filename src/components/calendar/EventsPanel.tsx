
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, FileText, CalendarDays, Brain, Palmtree, Sparkles, X, Clock } from "lucide-react";
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
  onAddEvent: (event: CalendarEvent) => void;
  onRemoveEvent: (eventId: number) => void;
}

const EventsPanel = ({ 
  selectedDate, 
  selectedDateEvents, 
  groupedEvents, 
  onAddStudyBreak,
  onAddEvent,
  onRemoveEvent
}: EventsPanelProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<{
    title: string;
    type: "assignment" | "lecture" | "study" | "break";
    time: string;
    description: string;
  }>({
    title: "",
    type: "lecture",
    time: "",
    description: ""
  });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.time) return;
    
    const event: CalendarEvent = {
      id: Date.now(),
      date: selectedDate || new Date(),
      title: newEvent.title,
      type: newEvent.type,
      time: newEvent.time,
      description: newEvent.description
    };
    
    onAddEvent(event);
    setIsDialogOpen(false);
    setNewEvent({
      title: "",
      type: "lecture",
      time: "",
      description: ""
    });
  };

  return (
    <div className="col-span-12 md:col-span-9 p-6 md:p-8 min-h-screen bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold">
            {selectedDate ? selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) : "Sélectionnez une date"}
          </h3>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="flex items-center gap-1 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
              >
                <Plus size={16} />
                <span>Ajouter un événement</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ajouter un événement</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="event-title" className="text-sm font-medium">Titre</label>
                  <Input 
                    id="event-title" 
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    placeholder="Nom de l'événement"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="event-type" className="text-sm font-medium">Type</label>
                  <Select
                    value={newEvent.type}
                    onValueChange={(value: any) => setNewEvent({...newEvent, type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Type d'événement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lecture">Cours</SelectItem>
                      <SelectItem value="assignment">Devoir</SelectItem>
                      <SelectItem value="study">Révision</SelectItem>
                      <SelectItem value="break">Pause</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="event-time" className="text-sm font-medium">Horaire</label>
                  <Input 
                    id="event-time" 
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    placeholder="ex: 14:00 - 16:00"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="event-desc" className="text-sm font-medium">Description (optionnelle)</label>
                  <Input 
                    id="event-desc" 
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    placeholder="Description de l'événement"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleAddEvent}>Ajouter</Button>
              </div>
            </DialogContent>
          </Dialog>
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
              onRemoveEvent={onRemoveEvent}
            />
            
            <EventGroup 
              title="Devoirs" 
              events={groupedEvents.assignment} 
              icon={<FileText size={16} className="text-rose-500" />} 
              colorClass="primary"
              onRemoveEvent={onRemoveEvent}
            />
            
            <EventGroup 
              title="Révisions" 
              events={groupedEvents.study} 
              icon={<Brain size={16} className="text-purple-500" />} 
              colorClass="purple-light"
              onRemoveEvent={onRemoveEvent}
            />
            
            <EventGroup 
              title="Pauses" 
              events={groupedEvents.break} 
              icon={<Palmtree size={16} className="text-green-500" />} 
              colorClass="green-mint"
              onRemoveEvent={onRemoveEvent}
            />
            
            {/* AI Study Assistant */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100/50 shadow-md hover:shadow-lg transition-all">
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
                <Button variant="default" className="w-full bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all">
                  <Brain size={16} className="mr-2" />
                  Créer une fiche de révision
                </Button>
                <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50 shadow-sm hover:shadow-md transition-all">
                  <Clock size={16} className="mr-2" />
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
