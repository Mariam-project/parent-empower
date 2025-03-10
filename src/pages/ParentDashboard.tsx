
import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  Lightbulb,
  Award,
  Calendar,
  FileText,
  UserCircle,
  Send,
  CheckCircle2,
  Info,
  HelpCircle,
  Book,
  Smartphone
} from "lucide-react";

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState("progress");
  const { toast } = useToast();
  
  // Exemple données élève
  const student = {
    name: "Thomas Dupont",
    grade: "Terminale S",
    averageGrade: 14.5,
    progress: 68,
    coursesCompleted: 12,
    totalCourses: 20,
    lastActivity: "Hier à 18:30",
    nextDeadlines: [
      { id: 1, title: "Mathématiques - Chapitre 5", date: "14 juin", subject: "Mathématiques" },
      { id: 2, title: "Physique - Quiz final", date: "16 juin", subject: "Physique" }
    ],
    recentFeedback: [
      { 
        id: 1, 
        from: "Mme Dupont (Mathématiques)", 
        content: "Thomas a excellé dans le dernier devoir de mathématiques. Il a particulièrement bien réussi les exercices d'analyse.", 
        date: "10 juin 2023",
        grade: "17/20"
      },
      { 
        id: 2, 
        from: "M. Martin (Physique)", 
        content: "Bon travail sur le dernier TP. Thomas montre une bonne compréhension des concepts, mais doit faire attention aux unités dans les calculs.", 
        date: "5 juin 2023",
        grade: "14/20" 
      }
    ]
  };
  
  const sendMessage = () => {
    toast({
      title: "Message envoyé",
      description: "Votre message a été envoyé à l'enseignant avec succès.",
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 animate-fade-up">
          <div className="flex items-center mb-2">
            <Users className="mr-2 text-primary" size={24} />
            <h1 className="text-3xl font-display font-bold">Espace Parents</h1>
          </div>
          <p className="text-muted-foreground">
            Suivez les progrès scolaires de votre enfant et restez en contact avec les enseignants
          </p>
        </div>
        
        {/* Student Info */}
        <GlassCard className="mb-8 animate-fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <UserCircle size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-medium">{student.name}</h2>
                <p className="text-muted-foreground">{student.grade} • Dernière activité : {student.lastActivity}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 shadow-md">
                <Calendar size={16} className="mr-2" />
                Emploi du temps
              </Button>
              <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 shadow-md">
                <FileText size={16} className="mr-2" />
                Bulletin scolaire
              </Button>
              <Button className="shadow-md">
                <Bell size={16} className="mr-2" />
                Configurer les notifications
              </Button>
            </div>
          </div>
        </GlassCard>
        
        {/* Tabs */}
        <Tabs defaultValue="progress" className="mb-6" onValueChange={setActiveTab}>
          <TabsList className="mb-6 bg-white shadow-md">
            <TabsTrigger 
              value="progress" 
              className="flex items-center gap-2 hover:bg-gray-100 data-[state=active]:bg-gray-100 data-[state=active]:shadow-md"
            >
              <BarChart3 size={16} />
              <span>Progrès</span>
            </TabsTrigger>
            <TabsTrigger 
              value="feedback" 
              className="flex items-center gap-2 hover:bg-gray-100 data-[state=active]:bg-gray-100 data-[state=active]:shadow-md"
            >
              <MessageSquare size={16} />
              <span>Retours des enseignants</span>
            </TabsTrigger>
            <TabsTrigger 
              value="communicate" 
              className="flex items-center gap-2 hover:bg-gray-100 data-[state=active]:bg-gray-100 data-[state=active]:shadow-md"
            >
              <Send size={16} />
              <span>Communiquer</span>
            </TabsTrigger>
            <TabsTrigger 
              value="resources" 
              className="flex items-center gap-2 hover:bg-gray-100 data-[state=active]:bg-gray-100 data-[state=active]:shadow-md"
            >
              <Lightbulb size={16} />
              <span>Guides et Ressources</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="col-span-1 md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium">Progression globale</h2>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 shadow-md">
                    <BarChart3 size={16} />
                    <span>Détails</span>
                  </Button>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Progression des cours</span>
                    <span className="font-medium">{student.progress}%</span>
                  </div>
                  <Progress value={student.progress} className="h-3" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex flex-col p-4 bg-background/80 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <BookOpen size={18} />
                      <span className="font-medium">Cours</span>
                    </div>
                    <div className="text-2xl font-medium">{student.coursesCompleted}/{student.totalCourses}</div>
                    <div className="text-xs text-muted-foreground">cours complétés</div>
                  </div>
                  <div className="flex flex-col p-4 bg-background/80 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Award size={18} />
                      <span className="font-medium">Moyenne</span>
                    </div>
                    <div className="text-2xl font-medium">{student.averageGrade}/20</div>
                    <div className="text-xs text-muted-foreground">note moyenne</div>
                  </div>
                  <div className="flex flex-col p-4 bg-background/80 rounded-lg">
                    <div className="flex items-center gap-2 text-green-500 mb-2">
                      <CheckCircle2 size={18} />
                      <span className="font-medium">Assiduité</span>
                    </div>
                    <div className="text-2xl font-medium">98%</div>
                    <div className="text-xs text-muted-foreground">taux de présence</div>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium">Prochaines échéances</h2>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 shadow-md">
                    <Calendar size={16} />
                    <span>Calendrier</span>
                  </Button>
                </div>
                <div className="space-y-4">
                  {student.nextDeadlines.map((item) => (
                    <div key={item.id} className="flex items-center p-3 bg-background/80 rounded-lg">
                      <div className="w-2 h-10 rounded-full mr-3 bg-primary/60"></div>
                      <div className="flex-1">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">Échéance: {item.date} • {item.subject}</div>
                      </div>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-gray-100 hover:bg-gray-200 shadow-md">
                        <Info size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
            
            <GlassCard>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Matières et progression</h2>
                <Button variant="outline" size="sm" className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 shadow-md">
                  <BookOpen size={16} />
                  <span>Tous les cours</span>
                </Button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-background/80 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="font-medium">Mathématiques</h3>
                      <p className="text-sm text-muted-foreground">Prof. Dupont • Moyenne: 16/20</p>
                    </div>
                    <Button size="sm" variant="outline" className="h-8 bg-gray-100 hover:bg-gray-200 shadow-md">
                      Détails
                    </Button>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span>Progression</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
                
                <div className="p-4 bg-background/80 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="font-medium">Physique-Chimie</h3>
                      <p className="text-sm text-muted-foreground">Prof. Martin • Moyenne: 14/20</p>
                    </div>
                    <Button size="sm" variant="outline" className="h-8 bg-gray-100 hover:bg-gray-200 shadow-md">
                      Détails
                    </Button>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span>Progression</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
                
                <div className="p-4 bg-background/80 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="font-medium">Français</h3>
                      <p className="text-sm text-muted-foreground">Prof. Dubois • Moyenne: 15/20</p>
                    </div>
                    <Button size="sm" variant="outline" className="h-8 bg-gray-100 hover:bg-gray-200 shadow-md">
                      Détails
                    </Button>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span>Progression</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
          
          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-primary" />
                <span>Retours des enseignants</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                {student.recentFeedback.map((feedback) => (
                  <div key={feedback.id} className="p-4 bg-background/80 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <UserCircle size={20} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{feedback.from}</p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-muted-foreground">{feedback.date}</p>
                            <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {feedback.grade}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-1">
                          {feedback.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Affichage des 2 derniers retours</p>
                <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 shadow-md">
                  Voir tous les retours
                </Button>
              </div>
            </GlassCard>
            
            <GlassCard variant="accent">
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Info size={20} className="text-primary" />
                <span>À propos des retours</span>
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Les retours des enseignants sont mis à jour régulièrement après chaque évaluation ou devoir.
                Ils vous permettent de suivre la progression et les points d'amélioration de votre enfant.
              </p>
              
              <div className="flex items-center p-4 bg-blue-pastel-light/30 rounded-lg">
                <Lightbulb className="text-blue-600 mr-3" size={20} />
                <p className="text-sm">
                  <span className="font-medium">Conseil :</span> Discutez de ces retours avec votre enfant pour l'encourager et l'aider à s'améliorer dans les domaines identifiés.
                </p>
              </div>
            </GlassCard>
          </TabsContent>
          
          {/* Communicate Tab */}
          <TabsContent value="communicate" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <GlassCard>
                  <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <MessageSquare size={20} className="text-primary" />
                    <span>Contacter les enseignants</span>
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Destinataire</label>
                      <select className="w-full p-2 rounded-md border border-gray-200 bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                        <option value="">Sélectionnez un enseignant</option>
                        <option value="math">Mme Dupont (Mathématiques)</option>
                        <option value="physics">M. Martin (Physique)</option>
                        <option value="french">Mme Dubois (Français)</option>
                        <option value="principal">M. Bernard (Principal)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Sujet</label>
                      <Input placeholder="Entrez le sujet de votre message" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <Textarea 
                        placeholder="Rédigez votre message ici..."
                        className="min-h-[150px]"
                      />
                    </div>
                    
                    <Button onClick={sendMessage} className="shadow-md hover:shadow-lg">
                      <Send size={16} className="mr-2" />
                      Envoyer le message
                    </Button>
                  </div>
                </GlassCard>
                
                <GlassCard>
                  <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <Users size={20} className="text-primary" />
                    <span>Communauté de parents</span>
                  </h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Rejoignez la communauté des parents d'élèves pour échanger des informations, 
                    poser des questions et partager des expériences.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-background/80 rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <UserCircle size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium">Parent de Jules</p>
                            <p className="text-xs text-muted-foreground">il y a 2 jours</p>
                          </div>
                          <p className="text-muted-foreground">
                            Bonjour à tous, quelqu'un saurait quand aura lieu la réunion parents-professeurs pour le trimestre ?
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-background/80 rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <UserCircle size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium">Parent de Marie</p>
                            <p className="text-xs text-muted-foreground">il y a 1 jour</p>
                          </div>
                          <p className="text-muted-foreground">
                            La réunion est prévue pour le 25 juin d'après le dernier mail du principal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t flex gap-2">
                    <Input placeholder="Écrivez votre message..." />
                    <Button className="shadow-md">
                      <Send size={16} />
                    </Button>
                  </div>
                </GlassCard>
              </div>
              
              <div className="space-y-6">
                <GlassCard className="bg-gradient-to-br from-secondary to-blue-pastel-light/40">
                  <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <Bell size={20} />
                    <span>Notifications</span>
                  </h2>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-sm font-medium mb-1">Bulletin du 2e trimestre disponible</p>
                      <p className="text-xs text-muted-foreground">il y a 3 jours</p>
                    </div>
                    
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-sm font-medium mb-1">Nouveau retour en mathématiques</p>
                      <p className="text-xs text-muted-foreground">il y a 1 semaine</p>
                    </div>
                    
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-sm font-medium mb-1">Sortie scolaire prévue le 21 juin</p>
                      <p className="text-xs text-muted-foreground">il y a 1 semaine</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 bg-white hover:bg-gray-100 shadow-md">
                    Voir toutes les notifications
                  </Button>
                </GlassCard>
                
                <GlassCard>
                  <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <HelpCircle size={20} className="text-primary" />
                    <span>Besoin d'aide ?</span>
                  </h2>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-gray-100 hover:bg-gray-200 shadow-md">
                      <MessageSquare size={16} className="mr-2" />
                      Contacter l'administration
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start bg-gray-100 hover:bg-gray-200 shadow-md">
                      <Book size={16} className="mr-2" />
                      Guide des parents
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start bg-gray-100 hover:bg-gray-200 shadow-md">
                      <HelpCircle size={16} className="mr-2" />
                      FAQ
                    </Button>
                  </div>
                </GlassCard>
              </div>
            </div>
          </TabsContent>
          
          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <Book size={20} className="text-primary" />
                  <span>Guide du numérique pour les parents</span>
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  Découvrez comment accompagner votre enfant dans son parcours d'apprentissage numérique.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-background/80 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-pastel-light/30 flex items-center justify-center text-blue-600 shrink-0">
                        <Smartphone size={20} />
                      </div>
                      <h3 className="font-medium">Équilibre numérique</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Comment aider votre enfant à maintenir un équilibre sain entre le temps d'écran et les autres activités.
                    </p>
                    <Button size="sm" variant="outline" className="bg-gray-100 hover:bg-gray-200 shadow-md">
                      Lire l'article
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-background/80 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-mint/30 flex items-center justify-center text-green-600 shrink-0">
                        <Lightbulb size={20} />
                      </div>
                      <h3 className="font-medium">Accompagner l'apprentissage en ligne</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Conseils pratiques pour aider votre enfant à tirer le meilleur parti des ressources éducatives en ligne.
                    </p>
                    <Button size="sm" variant="outline" className="bg-gray-100 hover:bg-gray-200 shadow-md">
                      Lire l'article
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-background/80 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-light/30 flex items-center justify-center text-purple-600 shrink-0">
                        <HelpCircle size={20} />
                      </div>
                      <h3 className="font-medium">Comprendre les outils numériques</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Guide pour comprendre les différents outils numériques utilisés par votre enfant dans son parcours scolaire.
                    </p>
                    <Button size="sm" variant="outline" className="bg-gray-100 hover:bg-gray-200 shadow-md">
                      Lire l'article
                    </Button>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard>
                <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <Lightbulb size={20} className="text-primary" />
                  <span>Conseils pour parents</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-pastel-light/20 rounded-lg">
                    <h3 className="font-medium mb-2">Comment motiver mon enfant ?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      La motivation est essentielle pour l'apprentissage. Voici quelques conseils pour encourager votre enfant à rester motivé dans ses études :
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 ml-5 list-disc">
                      <li>Célébrez les réussites, même les plus petites</li>
                      <li>Établissez des objectifs réalistes et mesurables</li>
                      <li>Discutez régulièrement de l'importance de l'éducation</li>
                      <li>Créez un environnement d'étude positif à la maison</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-mint/20 rounded-lg">
                    <h3 className="font-medium mb-2">Communication positive avec les enseignants</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Une bonne communication avec les enseignants est essentielle pour soutenir l'apprentissage de votre enfant :
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 ml-5 list-disc">
                      <li>Participez aux réunions parents-professeurs</li>
                      <li>Posez des questions spécifiques sur les progrès de votre enfant</li>
                      <li>Informez les enseignants des événements importants à la maison</li>
                      <li>Exprimez votre gratitude pour leur travail</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-light/20 rounded-lg">
                    <h3 className="font-medium mb-2">Gérer le stress des examens</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Les périodes d'examen peuvent être stressantes. Voici comment aider votre enfant :
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 ml-5 list-disc">
                      <li>Encouragez une préparation régulière plutôt qu'intensive</li>
                      <li>Assurez-vous qu'il/elle dorme suffisamment</li>
                      <li>Proposez une alimentation équilibrée</li>
                      <li>Aidez-le/la à développer des techniques de relaxation</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full mt-4 shadow-md">
                  Télécharger le guide complet pour parents
                </Button>
              </GlassCard>
            </div>
            
            <GlassCard>
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                <span>Événements pour les parents</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-background/80 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="text-sm text-primary font-medium mb-2">15 juin 2023 • 18h30</div>
                  <h3 className="font-medium mb-1">Réunion d'information</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Présentation des programmes et objectifs pour le prochain trimestre.
                  </p>
                  <Button size="sm" variant="outline" className="w-full bg-gray-100 hover:bg-gray-200 shadow-md">
                    S'inscrire
                  </Button>
                </div>
                
                <div className="p-4 bg-background/80 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="text-sm text-primary font-medium mb-2">22 juin 2023 • 17h00</div>
                  <h3 className="font-medium mb-1">Atelier numérique</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Découvrez les outils numériques utilisés par vos enfants à l'école.
                  </p>
                  <Button size="sm" variant="outline" className="w-full bg-gray-100 hover:bg-gray-200 shadow-md">
                    S'inscrire
                  </Button>
                </div>
                
                <div className="p-4 bg-background/80 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="text-sm text-primary font-medium mb-2">29 juin 2023 • 19h00</div>
                  <h3 className="font-medium mb-1">Café des parents</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Échange informel entre parents et quelques enseignants.
                  </p>
                  <Button size="sm" variant="outline" className="w-full bg-gray-100 hover:bg-gray-200 shadow-md">
                    S'inscrire
                  </Button>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParentDashboard;
