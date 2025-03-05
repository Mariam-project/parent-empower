
import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { useToast } from "@/hooks/use-toast";
import { initialEvents } from "./initialEvents";
import { CalendarEvent } from "./types";
import CalendarSidebar from "./CalendarSidebar";
import EventsPanel from "./EventsPanel";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/50 to-background">
      <GlassCard className="p-0 overflow-hidden min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
          <CalendarSidebar date={date} setDate={setDate} />
          <EventsPanel 
            selectedDate={date}
            selectedDateEvents={selectedDateEvents}
            groupedEvents={groupedEvents}
            onAddStudyBreak={addStudyBreak}
          />
        </div>
      </GlassCard>
    </div>
  );
};

export default StudyCalendar;
