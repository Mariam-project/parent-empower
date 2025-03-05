
import React from "react";

const CalendarLegend = () => {
  return (
    <div className="mt-8 w-full max-w-sm mx-auto bg-white/60 border border-border/20 rounded-xl p-4 shadow-sm">
      <div className="text-sm font-medium mb-3">Légende :</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded-full bg-rose-400 shadow-sm"></div>
          <span>Devoirs</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded-full bg-blue-400 shadow-sm"></div>
          <span>Cours</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded-full bg-purple-400 shadow-sm"></div>
          <span>Révisions</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded-full bg-green-400 shadow-sm"></div>
          <span>Pauses</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarLegend;
