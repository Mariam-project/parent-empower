
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
  
  const bgClass = `bg-${colorClass}/5`;
  const borderClass = `border-${colorClass}/10`;
  const hoverClass = `hover:bg-${colorClass}/10`;
  const textClass = `text-${colorClass}`;
  const badgeClass = `bg-${colorClass}/10 text-${colorClass}`;
  
  return (
    <div>
      <h4 className="text-sm font-medium mb-3 flex items-center gap-1.5">
        {icon}
        <span>{title}</span>
      </h4>
      
      <div className="space-y-3">
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            className={`${bgClass} ${borderClass} ${hoverClass}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventGroup;
