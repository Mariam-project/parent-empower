
import React from "react";

const CalendarLegend = () => {
  return (
    <div className="mt-6 space-y-3">
      <div className="text-sm font-medium">Légende :</div>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5 text-sm">
          <div className="w-4 h-4 rounded-full bg-primary/80"></div>
          <span>Devoirs</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm">
          <div className="w-4 h-4 rounded-full bg-blue-pastel-light/80"></div>
          <span>Cours</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm">
          <div className="w-4 h-4 rounded-full bg-purple-light/80"></div>
          <span>Révisions</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm">
          <div className="w-4 h-4 rounded-full bg-green-mint/80"></div>
          <span>Pauses</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarLegend;
