
import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  User,
  Users,
  Send,
  Paperclip,
  Clock,
  Mail,
  Phone,
  Video,
  ChevronDown,
  Search,
  Plus,
  CheckCheck,
  MessageCircle,
  Bell,
  Calendar as CalendarIcon,
  FileText
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock messages data
const mockMessages = [
  {
    id: 1,
    sender: "Emma Dupont",
    avatar: "https://i.pravatar.cc/150?img=1",
    message: "Bonjour professeur, j'aurais besoin d'aide pour l'exercice 3 de mathématiques.",
    time: "10:30",
    date: "Aujourd'hui",
    read: true,
    userType: "student"
  },
  {
    id: 2,
    sender: "Thomas Bernard",
    avatar: "https://i.pravatar.cc/150?img=4",
    message: "Est-ce que vous pourriez me donner des conseils pour préparer l'exposé ?",
    time: "09:15",
    date: "Aujourd'hui",
    read: false,
    userType: "student"
  },
  {
    id: 3,
    sender: "Sophie Martin",
    avatar: "https://i.pravatar.cc/150?img=10",
    message: "Bonjour, nous devrons discuter des progrès de votre fils Lucas lors de notre prochain rendez-vous.",
    time: "Hier",
    date: "15:45",
    read: true,
    userType: "parent"
  },
  {
    id: 4,
    sender: "Marie Leroy",
    avatar: "https://i.pravatar.cc/150?img=13",
    message: "Pouvez-vous me confirmer l'horaire de la réunion des enseignants ?",
    time: "Hier",
    date: "14:20",
    read: true,
    userType: "teacher"
  },
  {
    id: 5,
    sender: "Lucas Petit",
    avatar: "https://i.pravatar.cc/150?img=8",
    message: "Je vous ai envoyé mon devoir par mail, pourriez-vous confirmer sa réception ?",
    time: "Lundi",
    date: "11:05",
    read: true,
    userType: "student"
  }
];

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    title: "Nouveau message",
    message: "Thomas Bernard vous a envoyé un message",
    time: "Il y a 1 heure",
    type: "message",
    read: false
  },
  {
    id: 2,
    title: "Cours à venir",
    message: "Rappel: Vous avez un cours de Mathématiques à 14h30",
    time: "Il y a 3 heures",
    type: "reminder",
    read: false
  },
  {
    id: 3,
    title: "Devoir remis",
    message: "Emma Dupont a remis son devoir de Français",
    time: "Hier, 16:45",
    type: "assignment",
    read: true
  },
  {
    id: 4,
    title: "Rappel de réunion",
    message: "Réunion des enseignants demain à 10h",
    time: "Hier, 13:20",
    type: "reminder",
    read: true
  }
];

const CommunicationCenter = () => {
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [messageText, setMessageText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("messages");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    toast({
      title: "Message envoyé",
      description: "Votre message a été envoyé avec succès."
    });
    
    setMessageText("");
  };
  
  const filteredMessages = mockMessages.filter(message =>
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const activeChatDetails = mockMessages.find(m => m.id === activeChat);

  return (
    <div className="space-y-6">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <GlassCard className="p-2">
          <TabsList className="grid grid-cols-2 gap-2 bg-transparent w-full">
            <TabsTrigger 
              value="messages" 
              className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
            >
              <MessageSquare size={18} />
              <span>Messages</span>
            </TabsTrigger>
            <TabsTrigger 
              value="notifications" 
              className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
            >
              <Bell size={18} />
              <span>Notifications</span>
            </TabsTrigger>
          </TabsList>
        </GlassCard>
        
        <TabsContent value="messages" className="m-0">
          <GlassCard className="p-0 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Contacts list */}
              <div className="md:border-r border-border/30">
                <div className="p-4 border-b border-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">Messages</h2>
                    <Button variant="gray" size="icon" className="h-8 w-8 shadow-button">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      className="pl-10 bg-white shadow-button"
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="divide-y divide-border/30 max-h-[600px] overflow-y-auto">
                  {filteredMessages.map((message) => (
                    <div 
                      key={message.id}
                      className={`p-4 hover:bg-gray-50 cursor-pointer ${activeChat === message.id ? 'bg-gray-50' : ''}`}
                      onClick={() => setActiveChat(message.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img 
                            src={message.avatar} 
                            alt={message.sender} 
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                            message.id % 2 === 0 ? "bg-green-mint" : "bg-gray-400"
                          }`}></span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium truncate">{message.sender}</h3>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{message.time}</span>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm text-muted-foreground truncate flex-1">
                              {message.message}
                            </p>
                            {!message.read && (
                              <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 ml-1"></span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Chat area */}
              <div className="col-span-2 flex flex-col h-[700px]">
                {activeChat ? (
                  <>
                    <div className="p-4 border-b border-border/30 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={activeChatDetails?.avatar} 
                          alt={activeChatDetails?.sender} 
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <h2 className="font-medium">{activeChatDetails?.sender}</h2>
                          <p className="text-xs text-muted-foreground">
                            {activeChatDetails?.userType === "student" ? "Élève" : 
                             activeChatDetails?.userType === "parent" ? "Parent" : "Enseignant"}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="gray" size="icon" className="h-8 w-8 shadow-button">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="gray" size="icon" className="h-8 w-8 shadow-button">
                          <Video className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="gray" size="icon" className="h-8 w-8 shadow-button">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                            <DropdownMenuItem>Archiver la conversation</DropdownMenuItem>
                            <DropdownMenuItem>Marquer comme non lu</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Bloquer</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                      {/* Example chat messages */}
                      <div className="flex items-start space-x-3">
                        <img 
                          src={activeChatDetails?.avatar} 
                          alt={activeChatDetails?.sender} 
                          className="h-8 w-8 rounded-full object-cover mt-1"
                        />
                        <div>
                          <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs md:max-w-md">
                            <p className="text-sm">{activeChatDetails?.message}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{activeChatDetails?.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="text-right">
                          <div className="bg-primary text-white p-3 rounded-lg shadow-sm max-w-xs md:max-w-md">
                            <p className="text-sm">Bonjour, comment puis-je vous aider ?</p>
                          </div>
                          <div className="flex items-center justify-end mt-1">
                            <p className="text-xs text-muted-foreground">10:35</p>
                            <CheckCheck className="h-3 w-3 ml-1 text-primary" />
                          </div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <img 
                          src={activeChatDetails?.avatar} 
                          alt={activeChatDetails?.sender} 
                          className="h-8 w-8 rounded-full object-cover mt-1"
                        />
                        <div>
                          <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs md:max-w-md">
                            <p className="text-sm">Merci de votre réponse rapide. Je ne comprends pas bien la question 3.</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">10:37</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="text-right">
                          <div className="bg-primary text-white p-3 rounded-lg shadow-sm max-w-xs md:max-w-md">
                            <p className="text-sm">Je vois. La question 3 porte sur les dérivées. Vous devez appliquer la formule du produit. Voulez-vous que je vous donne un exemple ?</p>
                          </div>
                          <div className="flex items-center justify-end mt-1">
                            <p className="text-xs text-muted-foreground">10:40</p>
                            <CheckCheck className="h-3 w-3 ml-1 text-primary" />
                          </div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-border/30">
                      <div className="flex items-end space-x-3">
                        <Textarea
                          placeholder="Écrivez votre message..."
                          className="min-h-[80px] shadow-button"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                        />
                        <div className="flex flex-col space-y-2">
                          <Button variant="gray" size="icon" className="shadow-button">
                            <Paperclip className="h-4 w-4" />
                          </Button>
                          <Button onClick={handleSendMessage} size="icon" className="shadow-button">
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                      <h3 className="text-lg font-medium">Aucune conversation sélectionnée</h3>
                      <p className="text-muted-foreground mt-1">Sélectionnez une conversation pour commencer à discuter</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </TabsContent>
        
        <TabsContent value="notifications" className="m-0">
          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <Button variant="gray" className="shadow-button">
                Tout marquer comme lu
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockNotifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 border border-border/30 rounded-lg ${notification.read ? 'bg-white' : 'bg-primary/5'}`}
                >
                  <div className="flex items-start">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                      notification.type === 'message' ? 'bg-primary/20' : 
                      notification.type === 'reminder' ? 'bg-yellow-soft/20' : 
                      'bg-green-mint/20'
                    }`}>
                      {notification.type === 'message' ? (
                        <MessageSquare className="h-5 w-5 text-primary" />
                      ) : notification.type === 'reminder' ? (
                        <Clock className="h-5 w-5 text-yellow-soft" />
                      ) : (
                        <Mail className="h-5 w-5 text-green-mint" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{notification.title}</h3>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      
                      <div className="mt-3 flex items-center space-x-3">
                        {notification.type === 'message' && (
                          <Button variant="gray" size="sm" className="shadow-button">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Répondre
                          </Button>
                        )}
                        
                        {notification.type === 'reminder' && (
                          <Button variant="gray" size="sm" className="shadow-button">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            Voir dans le calendrier
                          </Button>
                        )}
                        
                        {notification.type === 'assignment' && (
                          <Button variant="gray" size="sm" className="shadow-button">
                            <FileText className="h-3 w-3 mr-1" />
                            Voir le devoir
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {!notification.read && (
                      <div className="h-2 w-2 rounded-full bg-primary ml-2 mt-2"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunicationCenter;
