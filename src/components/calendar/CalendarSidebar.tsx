
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import CalendarLegend from "./CalendarLegend";

interface CalendarSidebarProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const CalendarSidebar = ({ date, setDate }: CalendarSidebarProps) => {
  return (
    <div className="md:col-span-5 lg:col-span-4 bg-background/60 p-6 border-r border-border flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-center">Calendrier d'études</h2>
      <div className="w-full max-w-sm mx-auto">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-xl shadow-sm border border-border/20 bg-white/80 p-3"
        />
      </div>
      <CalendarLegend />
    </div>
  );
};

export default CalendarSidebar;
