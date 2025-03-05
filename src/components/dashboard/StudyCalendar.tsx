
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import GlassCard from "@/components/ui/GlassCard";
import {
  CalendarDays,
  Clock,
  FileText,
  Brain,
  Plus,
  Walk,
  Smile,
  Palmtree,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CalendarEvent {
  id: number;
  date: Date;
  title: string;
  type: "assignment" | "lecture" | "study" | "break";
  time?: string;
  description?: string;
}

// Mock calendar events
const initialEvents: CalendarEvent[] = [
  {
    id: 1,
    date: new Date(2023, 5, 14), // June 14, 2023
    title: "Mathématiques - Chapitre 5",
    type: "assignment",
    time: "23:59",
    description: "Rendre les exercices du chapitre 5"
  },
  {
    id: 2,
    date: new Date(2023, 5, 16), // June 16, 2023
    title: "Physique - Quiz final",
    type: "assignment",
    time: "17:00",
    description: "Quiz en ligne sur le chapitre 7"
  },
  {
    id: 3,
    date: new Date(2023, 5, 15), // June 15, 2023
    title: "Cours de mathématiques",
    type: "lecture",
    time: "10:00 - 12:00",
    description: "Salle 203"
  },
  {
    id: 4,
    date: new Date(2023, 5, 15), // June 15, 2023
    title: "Révision - Fonctions dérivées",
    type: "study",
    time: "14:00 - 16:00",
    description: "Se concentrer sur les exercices du livre p.45-48"
  },
  {
    id: 5,
    date: new Date(2023, 5, 14), // June 14, 2023
    title: "Pause méditation",
    type: "break",
    time: "18:00 - 18:30",
    description: "10 minutes de respiration profonde, 20 minutes de méditation guidée"
  },
  {
    id: 6,
    date: new Date(2023, 5, 17), // June 17, 2023
    title: "Marche détente",
    type: "break",
    time: "16:00 - 17:00",
    description: "Marche au parc pour décompresser"
  }
];

const StudyCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const { toast } = useToast();
  
  // Get events for the selected date
  const selectedDateEvents = date 
    ? events.filter(event => 
        event.date.getDate() === date.getDate() && 
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
      )
    : [];
    
  // Group events by type
  const groupedEvents = {
    assignment: selectedDateEvents.filter(e => e.type === "assignment"),
    lecture: selectedDateEvents.filter(e => e.type === "lecture"),
    study: selectedDateEvents.filter(e => e.type === "study"),
    break: selectedDateEvents.filter(e => e.type === "break")
  };
  
  // Add a study break suggestion
  const addStudyBreak = () => {
    let newBreak: CalendarEvent = {
      id: events.length + 1,
      date: date || new Date(),
      title: "Pause bien-être",
      type: "break",
      time: "17:00 - 17:30",
      description: "Prendre un moment pour vous et vous détendre"
    };
    
    setEvents([...events, newBreak]);
    
    toast({
      title: "Pause bien-être ajoutée",
      description: "Prendre du temps pour se ressourcer est essentiel pour un apprentissage efficace.",
    });
  };
  
  // Function to get color based on event type
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "assignment":
        return "bg-primary/10 text-primary";
      case "lecture":
        return "bg-blue-pastel-light/20 text-blue-pastel";
      case "study":
        return "bg-purple-light/10 text-purple-light";
      case "break":
        return "bg-green-mint/10 text-green-mint";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };
  
  // Function to get icon based on event type
  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return <FileText size={16} />;
      case "lecture":
        return <CalendarDays size={16} />;
      case "study":
        return <Brain size={16} />;
      case "break":
        type === "Marche détente" ? <Walk size={16} /> : <Smile size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  return (
    <GlassCard className="p-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5 bg-background/50 p-4 border-r border-border">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full"
          />
          <div className="mt-4 space-y-2">
            <div className="text-sm font-medium">Légende :</div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1 text-xs">
                <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                <span>Devoirs</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="w-3 h-3 rounded-full bg-blue-pastel-light/80"></div>
                <span>Cours</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="w-3 h-3 rounded-full bg-purple-light/80"></div>
                <span>Révisions</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="w-3 h-3 rounded-full bg-green-mint/80"></div>
                <span>Pauses</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">
              {date ? date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) : "Sélectionnez une date"}
            </h3>
            <Button variant="outline" size="sm" onClick={addStudyBreak} className="flex items-center gap-1">
              <Plus size={14} />
              <span>Ajouter une pause</span>
            </Button>
          </div>
          
          {selectedDateEvents.length === 0 ? (
            <div className="text-center py-10 px-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground mb-3">
                <CalendarDays size={20} />
              </div>
              <p className="text-muted-foreground">Aucun événement pour cette date</p>
              <Button variant="outline" size="sm" className="mt-3">
                <Plus size={14} className="mr-1" />
                Ajouter un événement
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Assignments */}
              {groupedEvents.assignment.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <FileText size={14} />
                    <span>Devoirs</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {groupedEvents.assignment.map(event => (
                      <div key={event.id} className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <div className="flex justify-between">
                          <h5 className="font-medium">{event.title}</h5>
                          <span className="text-xs bg-primary/10 px-2 py-0.5 rounded text-primary">
                            {event.time}
                          </span>
                        </div>
                        {event.description && (
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Lectures */}
              {groupedEvents.lecture.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>Cours</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {groupedEvents.lecture.map(event => (
                      <div key={event.id} className="p-3 bg-blue-pastel-light/5 rounded-lg border border-blue-pastel-light/10">
                        <div className="flex justify-between">
                          <h5 className="font-medium">{event.title}</h5>
                          <span className="text-xs bg-blue-pastel-light/10 px-2 py-0.5 rounded text-blue-pastel">
                            {event.time}
                          </span>
                        </div>
                        {event.description && (
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Study sessions */}
              {groupedEvents.study.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Brain size={14} />
                    <span>Révisions</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {groupedEvents.study.map(event => (
                      <div key={event.id} className="p-3 bg-purple-light/5 rounded-lg border border-purple-light/10">
                        <div className="flex justify-between">
                          <h5 className="font-medium">{event.title}</h5>
                          <span className="text-xs bg-purple-light/10 px-2 py-0.5 rounded text-purple-light">
                            {event.time}
                          </span>
                        </div>
                        {event.description && (
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Breaks */}
              {groupedEvents.break.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Palmtree size={14} />
                    <span>Pauses bien-être</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {groupedEvents.break.map(event => (
                      <div key={event.id} className="p-3 bg-green-mint/5 rounded-lg border border-green-mint/10">
                        <div className="flex justify-between">
                          <h5 className="font-medium">{event.title}</h5>
                          <span className="text-xs bg-green-mint/10 px-2 py-0.5 rounded text-green-600">
                            {event.time}
                          </span>
                        </div>
                        {event.description && (
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Add AI suggestion */}
              <div className="p-4 border border-dashed border-primary/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-primary" />
                  <h4 className="text-sm font-medium">Suggestion IA</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  D'après votre emploi du temps, il serait idéal de prévoir une session de révision 
                  avant votre échéance de Mathématiques. Voulez-vous l'ajouter ?
                </p>
                <Button size="sm" variant="outline" className="mt-2">
                  Ajouter à mon planning
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default StudyCalendar;
