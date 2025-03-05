
import React from "react";
import { LucideIcon } from "lucide-react";
import EventCard from "./EventCard";
import { CalendarEvent } from "./types";

interface EventGroupProps {
  title: string;
  events: CalendarEvent[];
  icon: React.ReactNode;
  colorClass: string;
}

const EventGroup = ({ title, events, icon, colorClass }: EventGroupProps) => {
  if (events.length === 0) return null;
  
  const getHeaderColor = () => {
    switch (colorClass) {
      case "primary": return "text-rose-500";
      case "blue-pastel-light": return "text-blue-500";
      case "purple-light": return "text-purple-500";
      case "green-mint": return "text-green-500";
      default: return "text-gray-700";
    }
  };
  
  return (
    <div className="bg-white/50 rounded-xl border border-gray-100 p-4 shadow-sm">
      <h4 className={`text-sm font-medium mb-3 flex items-center gap-1.5 ${getHeaderColor()}`}>
        {icon}
        <span>{title}</span>
      </h4>
      
      <div className="space-y-3">
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </div>
  );
};

export default EventGroup;
