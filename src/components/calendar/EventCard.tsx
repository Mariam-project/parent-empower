
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendarEvent } from "./types";

interface EventCardProps {
  event: CalendarEvent;
  className?: string;
  onRemove: () => void;
}

const EventCard = ({ event, className = "", onRemove }: EventCardProps) => {
  // Déterminer la couleur de fond en fonction du type d'événement
  const getBgColor = () => {
    switch (event.type) {
      case "assignment": return "bg-rose-50 border-rose-200 hover:bg-rose-100";
      case "lecture": return "bg-blue-50 border-blue-200 hover:bg-blue-100";
      case "study": return "bg-purple-50 border-purple-200 hover:bg-purple-100";
      case "break": return "bg-green-50 border-green-200 hover:bg-green-100";
      default: return "bg-gray-50 border-gray-200 hover:bg-gray-100";
    }
  };

  return (
    <div className={`p-4 rounded-lg border transition-colors duration-200 ${getBgColor()} ${className} shadow-sm hover:shadow-md relative`}>
      <div className="flex justify-between items-start">
        <h5 className="font-medium">{event.title}</h5>
        {event.time && (
          <span className="text-xs px-2 py-0.5 rounded bg-white/70 border border-gray-100 shadow-sm">
            {event.time}
          </span>
        )}
      </div>
      {event.description && (
        <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 hover:opacity-100"
        onClick={onRemove}
      >
        <X size={14} />
      </Button>
    </div>
  );
};

export default EventCard;
