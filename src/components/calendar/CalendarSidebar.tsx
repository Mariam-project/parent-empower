
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import CalendarLegend from "./CalendarLegend";

interface CalendarSidebarProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const CalendarSidebar = ({ date, setDate }: CalendarSidebarProps) => {
  return (
    <div className="col-span-12 lg:col-span-3 bg-background/60 p-6 border-r border-border min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-center">Mon emploi du temps</h2>
      <div className="sticky top-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-xl shadow-sm border border-border/20 bg-white/80 p-3"
        />
        <CalendarLegend />
      </div>
    </div>
  );
};

export default CalendarSidebar;
