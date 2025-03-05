
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import CalendarLegend from "./CalendarLegend";

interface CalendarSidebarProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const CalendarSidebar = ({ date, setDate }: CalendarSidebarProps) => {
  return (
    <div className="md:col-span-5 lg:col-span-4 bg-background/50 p-6 border-r border-border">
      <h2 className="text-2xl font-medium mb-6">Calendrier d'études</h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full"
      />
      <CalendarLegend />
    </div>
  );
};

export default CalendarSidebar;
