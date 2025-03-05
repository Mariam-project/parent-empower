
import React from "react";
import { CalendarDays, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const NoEvents = () => {
  return (
    <div className="text-center py-16 px-4">
      <div className="mx-auto w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground mb-4">
        <CalendarDays size={24} />
      </div>
      <p className="text-xl text-muted-foreground mb-2">Aucun événement pour cette date</p>
      <p className="text-muted-foreground mb-6">Ajoutez des cours, des révisions ou des pauses pour organiser votre journée</p>
      <Button variant="outline" size="sm" className="mt-3">
        <Plus size={14} className="mr-1" />
        Ajouter un événement
      </Button>
    </div>
  );
};

export default NoEvents;
