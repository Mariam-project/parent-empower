
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import CalendarLegend from "./CalendarLegend";

interface CalendarSidebarProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const CalendarSidebar = ({ date, setDate }: CalendarSidebarProps) => {
  return (
    <div className="col-span-12 md:col-span-3 bg-white/90 p-6 border-r border-border shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Mon emploi du temps</h2>
      <div className="sticky top-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-xl shadow-md border border-border/20 bg-white/95 p-3"
        />
        <CalendarLegend />
      </div>
    </div>
  );
};

export default CalendarSidebar;
