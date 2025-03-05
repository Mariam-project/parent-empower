
import React from "react";
import { CalendarEvent } from "./types";

interface EventCardProps {
  event: CalendarEvent;
  className?: string;
}

const EventCard = ({ event, className = "" }: EventCardProps) => {
  return (
    <div className={`p-4 rounded-lg border hover:bg-opacity-20 transition-colors ${className}`}>
      <div className="flex justify-between">
        <h5 className="font-medium">{event.title}</h5>
        <span className="text-xs px-2 py-0.5 rounded">
          {event.time}
        </span>
      </div>
      {event.description && (
        <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
      )}
    </div>
  );
};

export default EventCard;
