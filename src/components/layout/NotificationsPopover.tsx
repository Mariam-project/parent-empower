
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  CheckCircle2,
  Award,
  Clock,
  X,
  Settings,
  BellOff,
  MessageSquare,
  Calendar,
  BookOpen
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock notification data
const initialNotifications = [
  {
    id: 1,
    title: "Quiz de Physique terminé !",
    message: "Félicitations ! Vous avez obtenu un score de 85%.",
    time: "Il y a 2 heures",
    read: false,
    type: "success"
  },
  {
    id: 2,
    title: "Nouveau badge débloqué !",
    message: "Vous avez débloqué le badge \"Persévérance\" pour votre série de 15 jours.",
    time: "Il y a 1 jour",
    read: false,
    type: "badge"
  },
  {
    id: 3,
    title: "Rappel : Échéance Mathématiques",
    message: "N'oubliez pas de compléter le chapitre 5 avant le 14 juin.",
    time: "Il y a 2 jours",
    read: true,
    type: "reminder"
  },
  {
    id: 4,
    title: "Nouveau cours disponible",
    message: "Le cours \"Intelligence Artificielle : Concepts fondamentaux\" vient d'être publié.",
    time: "Il y a 3 jours",
    read: true,
    type: "course"
  },
  {
    id: 5,
    title: "Retour de votre professeur",
    message: "Mme Dupont a laissé un commentaire sur votre dernier devoir.",
    time: "Il y a 5 jours",
    read: true,
    type: "feedback"
  }
];

const NotificationsPopover = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState({
    assignments: true,
    courses: true,
    badges: true,
    feedback: true
  });
  const { toast } = useToast();
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    toast({
      title: "Notifications",
      description: "Toutes les notifications ont été marquées comme lues."
    });
  };
  
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };
  
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };
  
  const toggleNotificationType = (type: string) => {
    setNotificationsEnabled({
      ...notificationsEnabled,
      [type]: !notificationsEnabled[type as keyof typeof notificationsEnabled]
    });
    
    toast({
      title: "Préférences de notification",
      description: `Notifications ${type} ${notificationsEnabled[type as keyof typeof notificationsEnabled] ? 'désactivées' : 'activées'}.`
    });
  };
  
  // Get notification icon based on type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="text-green-500" size={16} />;
      case "badge":
        return <Award className="text-blue-500" size={16} />;
      case "reminder":
        return <Clock className="text-yellow-500" size={16} />;
      case "course":
        return <BookOpen className="text-purple-light" size={16} />;
      case "feedback":
        return <MessageSquare className="text-primary" size={16} />;
      default:
        return <Bell size={16} />;
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 bg-primary/5">
          <h3 className="font-medium">Notifications</h3>
          <div className="flex gap-1">
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={markAllAsRead}
              >
                <CheckCircle2 size={16} />
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={16} />
            </Button>
          </div>
        </div>
        
        <ScrollArea className="h-[300px]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground mb-3">
                <BellOff size={20} />
              </div>
              <p className="text-muted-foreground">Aucune notification</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 hover:bg-muted/10 border-b border-border transition-colors relative ${
                  !notification.read ? "bg-primary/5" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex gap-3">
                  <div className="mt-0.5">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-medium">{notification.title}</h4>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 opacity-0 group-hover:opacity-100 absolute right-2 top-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNotification(notification.id);
                        }}
                      >
                        <X size={14} />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </ScrollArea>
        
        <div className="p-4 border-t">
          <h4 className="text-sm font-medium mb-3">Préférences</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <Label htmlFor="assignments" className="text-sm">Devoirs & Échéances</Label>
              </div>
              <Switch 
                id="assignments" 
                checked={notificationsEnabled.assignments}
                onCheckedChange={() => toggleNotificationType('assignments')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen size={14} />
                <Label htmlFor="courses" className="text-sm">Cours & Ressources</Label>
              </div>
              <Switch 
                id="courses"
                checked={notificationsEnabled.courses}
                onCheckedChange={() => toggleNotificationType('courses')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award size={14} />
                <Label htmlFor="badges" className="text-sm">Badges & Récompenses</Label>
              </div>
              <Switch 
                id="badges"
                checked={notificationsEnabled.badges}
                onCheckedChange={() => toggleNotificationType('badges')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare size={14} />
                <Label htmlFor="feedback" className="text-sm">Retours & Messages</Label>
              </div>
              <Switch 
                id="feedback"
                checked={notificationsEnabled.feedback}
                onCheckedChange={() => toggleNotificationType('feedback')}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationsPopover;
