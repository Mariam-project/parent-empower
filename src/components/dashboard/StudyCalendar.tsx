
import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Brain, 
  BookOpen, 
  BookOpenCheck,
  Lightbulb,
  CirclePause,
  PlayCircle,
  PenSquare
} from "lucide-react";

const studyEvents = [
  {
    id: 1,
    title: "Mathématiques - Chapitre 4",
    time: "8:30 - 9:45",
    type: "study",
    date: new Date(new Date().setHours(8, 30))
  },
  {
    id: 2,
    title: "Pause",
    time: "9:45 - 10:00",
    type: "break",
    date: new Date(new Date().setHours(9, 45))
  },
  {
    id: 3,
    title: "Physique - Exercices",
    time: "10:00 - 11:15",
    type: "practice",
    date: new Date(new Date().setHours(10, 0))
  },
  {
    id: 4,
    title: "Pause déjeuner",
    time: "12:00 - 13:00",
    type: "break",
    date: new Date(new Date().setHours(12, 0))
  },
  {
    id: 5,
    title: "Français - Lecture",
    time: "14:00 - 15:30",
    type: "study",
    date: new Date(new Date().setHours(14, 0))
  },
  {
    id: 6,
    title: "Marche détente",
    time: "16:00 - 16:30",
    type: "wellness",
    date: new Date(new Date().setHours(16, 0))
  },
  {
    id: 7,
    title: "Révision des concepts clés",
    time: "17:00 - 18:00",
    type: "review",
    date: new Date(new Date().setHours(17, 0))
  }
];

const now = new Date();
const currentHour = now.getHours();

const StudyCalendar: React.FC = () => {
  const getCurrentEvent = () => {
    const currentEvent = studyEvents.find(event => {
      const eventHour = event.date.getHours();
      const eventEndTime = parseInt(event.time.split(" - ")[1].split(":")[0]);
      
      return currentHour >= eventHour && currentHour < eventEndTime;
    });
    
    return currentEvent || studyEvents[0];
  };
  
  const getUpcomingEvents = () => {
    return studyEvents.filter(event => {
      const eventHour = event.date.getHours();
      return eventHour > currentHour;
    }).slice(0, 3);
  };
  
  const currentEvent = getCurrentEvent();
  const upcomingEvents = getUpcomingEvents();
  
  const getEventIcon = (type: string) => {
    switch(type) {
      case "study":
        return <BookOpen size={20} />;
      case "practice":
        return <PenSquare size={20} />;
      case "review":
        return <BookOpenCheck size={20} />;
      case "break":
        return <CirclePause size={20} />;
      case "wellness":
        return <Lightbulb size={20} />;
      default:
        return <Brain size={20} />;
    }
  };
  
  const getEventColor = (type: string) => {
    switch(type) {
      case "study":
        return "bg-primary/10 text-primary";
      case "practice":
        return "bg-purple-light/10 text-purple-light";
      case "review":
        return "bg-blue-pastel/10 text-blue-pastel";
      case "break":
        return "bg-green-mint/10 text-green-mint";
      case "wellness":
        return "bg-green-mint/10 text-green-mint";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium flex items-center gap-2">
          <Calendar className="text-primary" size={20} />
          <span>Planning d'aujourd'hui</span>
        </h2>
        <Button variant="ghost" size="sm">
          Voir tout
        </Button>
      </div>
      
      {/* Current activity */}
      <div className="p-4 border border-primary/20 rounded-lg mb-4 bg-primary/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">En cours</span>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
            {currentEvent.time}
          </span>
        </div>
        
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getEventColor(currentEvent.type)}`}>
            {getEventIcon(currentEvent.type)}
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium">{currentEvent.title}</h3>
            <p className="text-xs text-muted-foreground">
              {currentEvent.type === "break" || currentEvent.type === "wellness" 
                ? "Prenez du temps pour vous ressourcer" 
                : "Concentrez-vous sur cette tâche"}
            </p>
          </div>
          
          <Button className="h-8" size="sm">
            <PlayCircle size={16} className="mr-1" />
            Démarrer
          </Button>
        </div>
      </div>
      
      {/* Up next section */}
      <div>
        <h3 className="text-sm font-medium mb-3">À venir</h3>
        <div className="space-y-3">
          {upcomingEvents.map(event => (
            <div key={event.id} className="flex items-center p-3 bg-background/80 rounded-lg">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${getEventColor(event.type)}`}>
                {getEventIcon(event.type)}
              </div>
              
              <div className="flex-1">
                <p className="font-medium text-sm">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
              
              {event.type !== "break" && event.type !== "wellness" && (
                <Button variant="outline" size="sm" className="h-7 text-xs">
                  Préparer
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default StudyCalendar;
