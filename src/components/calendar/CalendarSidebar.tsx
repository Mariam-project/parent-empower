
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import CalendarLegend from "./CalendarLegend";
import { Button } from "@/components/ui/button";
import { Plus, UserCog, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
        
        <div className="mt-4 mb-4 space-y-3">
          <Button 
            variant="gray" 
            className="w-full bg-gray-100 hover:bg-gray-200 shadow-button text-gray-800"
          >
            <Plus size={16} className="mr-2" />
            Ajouter un événement
          </Button>
          
          <Link to="/parent-dashboard" className="w-full block">
            <Button 
              variant="gray" 
              className="w-full bg-gray-100 hover:bg-gray-200 shadow-button text-gray-800"
            >
              <Users size={16} className="mr-2" />
              Accès parents
            </Button>
          </Link>
          
          <Link to="/professor-dashboard" className="w-full block">
            <Button 
              variant="gray" 
              className="w-full bg-gray-100 hover:bg-gray-200 shadow-button text-gray-800"
            >
              <UserCog size={16} className="mr-2" />
              Accès professeurs
            </Button>
          </Link>
        </div>
        
        <CalendarLegend />
      </div>
    </div>
  );
};

export default CalendarSidebar;
