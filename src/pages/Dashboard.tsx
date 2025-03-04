
import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Award, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  Star, 
  TrendingUp,
  CalendarDays,
  FileText,
  Bell,
  BookOpenCheck,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data for the dashboard
  const progress = 68;
  const coursesCompleted = 12;
  const totalCourses = 20;
  const badgesEarned = 8;
  const streakDays = 15;
  
  const upcomingDeadlines = [
    { id: 1, title: "Mathématiques - Chapitre 5", date: "14 juin", urgent: true },
    { id: 2, title: "Physique - Quiz final", date: "16 juin", urgent: false },
    { id: 3, title: "Français - Dissertation", date: "20 juin", urgent: false },
  ];
  
  const recentCourses = [
    { id: 1, title: "Fonctions dérivées", subject: "Mathématiques", progress: 80 },
    { id: 2, title: "La poésie au XIXe siècle", subject: "Français", progress: 45 },
    { id: 3, title: "Les forces et le mouvement", subject: "Physique", progress: 60 },
  ];
  
  const badges = [
    { id: 1, title: "Mathématicien en herbe", icon: <Brain size={20} /> },
    { id: 2, title: "Littéraire passionné", icon: <BookOpenCheck size={20} /> },
    { id: 3, title: "Persévérance", icon: <TrendingUp size={20} /> },
    { id: 4, title: "Assiduité", icon: <Clock size={20} /> },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Welcome header */}
        <div className="mb-10 animate-fade-up">
          <h1 className="text-3xl font-display font-bold mb-2">Bonjour, Thomas 👋</h1>
          <p className="text-muted-foreground">
            Voici votre tableau de bord, continuez votre excellent travail !
          </p>
        </div>
        
        {/* Progress overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <GlassCard className="col-span-1 md:col-span-2 animate-fade-up">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium">Votre progression globale</h2>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <BarChart3 size={16} />
                <span>Détails</span>
              </Button>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Progression</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col p-4 bg-background/80 rounded-lg">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <BookOpen size={18} />
                  <span className="font-medium">Cours</span>
                </div>
                <div className="text-2xl font-medium">{coursesCompleted}/{totalCourses}</div>
                <div className="text-xs text-muted-foreground">cours complétés</div>
              </div>
              <div className="flex flex-col p-4 bg-background/80 rounded-lg">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Award size={18} />
                  <span className="font-medium">Badges</span>
                </div>
                <div className="text-2xl font-medium">{badgesEarned}</div>
                <div className="text-xs text-muted-foreground">badges gagnés</div>
              </div>
              <div className="flex flex-col p-4 bg-background/80 rounded-lg">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <TrendingUp size={18} />
                  <span className="font-medium">Série</span>
                </div>
                <div className="text-2xl font-medium">{streakDays} jours</div>
                <div className="text-xs text-muted-foreground">série actuelle</div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Échéances</h2>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <CalendarDays size={16} />
                <span>Calendrier</span>
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingDeadlines.map((item) => (
                <div key={item.id} className="flex items-center p-3 bg-background/80 rounded-lg">
                  <div className={`w-2 h-10 rounded-full mr-3 ${item.urgent ? 'bg-destructive' : 'bg-primary/60'}`}></div>
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-muted-foreground">Échéance: {item.date}</div>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <FileText size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        
        {/* Recent courses and badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <GlassCard className="col-span-1 md:col-span-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Cours récents</h2>
              <Link to="/courses">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <BookOpen size={16} />
                  <span>Tous les cours</span>
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="p-4 bg-background/80 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.subject}</p>
                    </div>
                    <Button size="sm" variant="outline" className="h-8">
                      Continuer
                    </Button>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span>Progression</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
          
          <GlassCard className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Vos badges</h2>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Award size={16} />
                <span>Tous les badges</span>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center p-4 bg-background/80 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-medium">{badge.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button className="w-full">Gagner plus de badges</Button>
            </div>
          </GlassCard>
        </div>
        
        {/* Recommendations and notifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Recommandations</h2>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Star size={16} />
                <span>Plus</span>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-background/80 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <BookOpenCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Mathématiques - Révisions finales</h3>
                    <p className="text-sm text-muted-foreground mb-2">Idéal pour renforcer vos connaissances avant l'examen</p>
                    <Button size="sm" variant="outline">Voir le cours</Button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background/80 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Créez votre fiche personnalisée</h3>
                    <p className="text-sm text-muted-foreground mb-2">Utilisez l'IA pour générer une fiche adaptée à votre style d'apprentissage</p>
                    <Button size="sm" variant="outline">Créer une fiche</Button>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="animate-fade-up" style={{ animationDelay: "500ms" }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Notifications</h2>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Bell size={16} />
                <span>Toutes</span>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-background/80 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Quiz de Physique terminé !</h3>
                    <p className="text-sm text-muted-foreground">Félicitations ! Vous avez obtenu un score de 85%.</p>
                    <p className="text-xs text-muted-foreground mt-1">Il y a 2 heures</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background/80 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Nouveau badge débloqué !</h3>
                    <p className="text-sm text-muted-foreground">Vous avez débloqué le badge "Persévérance" pour votre série de 15 jours.</p>
                    <p className="text-xs text-muted-foreground mt-1">Il y a 1 jour</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background/80 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <Bell size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Rappel : Échéance Mathématiques</h3>
                    <p className="text-sm text-muted-foreground">N'oubliez pas de compléter le chapitre 5 avant le 14 juin.</p>
                    <p className="text-xs text-muted-foreground mt-1">Il y a 2 jours</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
