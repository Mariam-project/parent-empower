import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Users,
  MessageCircle,
  Bell,
  Mail,
  Phone,
  Calendar as CalendarIcon,
  FileText,
  Send,
  Plus,
  Filter,
  MoreHorizontal,
  Check,
  ChevronDown
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const CommunicationCenter = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const { toast } = useToast();

  // Mock data for messages and notifications
  const mockMessages = [
    {
      id: 1,
      sender: "Emma Dupont",
      avatar: "https://i.pravatar.cc/150?img=1",
      message: "Bonjour, je voulais savoir si le cours de demain est maintenu ?",
      time: "Il y a 2 heures",
      status: "unread",
    },
    {
      id: 2,
      sender: "Lucas Bernard",
      avatar: "https://i.pravatar.cc/150?img=2",
      message: "Merci pour les ressources, elles m'ont beaucoup aidé !",
      time: "Il y a 1 jour",
      status: "read",
    },
    {
      id: 3,
      sender: "Chloé Martin",
      avatar: "https://i.pravatar.cc/150?img=3",
      message: "J'ai une question concernant l'exercice 3 du chapitre 2.",
      time: "Il y a 3 jours",
      status: "read",
    },
  ];

  const mockNotifications = [
    {
      id: 1,
      type: "new_student",
      message: "Un nouvel élève, Antoine Durand, s'est inscrit à votre cours de mathématiques.",
      time: "Il y a 1 heure",
      status: "unread",
    },
    {
      id: 2,
      type: "assignment_submitted",
      message: "Léa Garnier a soumis le devoir sur les équations différentielles.",
      time: "Il y a 4 heures",
      status: "read",
    },
    {
      id: 3,
      type: "course_update",
      message: "Le cours sur l'histoire de l'art a été mis à jour avec de nouvelles ressources.",
      time: "Il y a 1 jour",
      status: "read",
    },
  ];

  // Filtered messages based on search term
  const filteredMessages = mockMessages.filter((message) =>
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to send a message
  const sendMessage = () => {
    toast({
      title: "Message envoyé",
      description: "Votre message a été envoyé avec succès.",
    });
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="messages" value={activeTab} onValueChange={setActiveTab}>
        <GlassCard className="p-2">
          <TabsList className="grid grid-cols-2 gap-2 bg-transparent w-full">
            <TabsTrigger
              value="messages"
              className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
            >
              <MessageCircle size={18} />
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

        <TabsContent value="messages" className="m-0 space-y-4">
          <GlassCard className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold">Mes messages</h2>

              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-[250px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    className="pl-10 bg-white shadow-button"
                    placeholder="Rechercher un message..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="gray" className="shadow-button">
                      <Filter className="mr-2 h-4 w-4" />
                      Filtrer par
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filtrer par</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => setFilter("all")}>
                      Tous
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("unread")}>
                      Non lus
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("read")}>
                      Lus
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button className="shadow-button">
                  <Plus className="mr-2 h-4 w-4" />
                  Nouveau message
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className="bg-white rounded-lg border border-border/30 overflow-hidden shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="col-span-1 md:col-span-1 p-4 flex items-center justify-center">
                      <Avatar>
                        <AvatarImage src={message.avatar} alt={message.sender} />
                        <AvatarFallback>{message.sender.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="col-span-4 md:col-span-4 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium">{message.sender}</h3>
                          <p className="text-sm text-muted-foreground">{message.message}</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 shadow-button">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Users className="h-4 w-4 mr-2" />
                              Voir le profil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="h-4 w-4 mr-2" />
                              Répondre
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Phone className="h-4 w-4 mr-2" />
                              Appeler
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">{message.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold mb-6">Envoyer un message</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="recipient" className="block text-sm font-medium mb-2">
                  Destinataire
                </label>
                <Input
                  id="recipient"
                  placeholder="Nom de l'élève..."
                  className="shadow-button"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  className="min-h-[100px] shadow-button"
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={sendMessage} className="shadow-button">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer
                </Button>
              </div>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="notifications" className="m-0">
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold mb-6">Notifications</h2>
            <div className="space-y-4">
              {mockNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="bg-white rounded-lg border border-border/30 overflow-hidden shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-6">
                    <div className="col-span-1 md:col-span-5 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium">{notification.type}</h3>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">{notification.time}</div>
                    </div>
                    <div className="col-span-1 md:col-span-1 p-4 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8 shadow-button">
                        <Check className="h-4 w-4" />
                      </Button>
                    </div>
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
