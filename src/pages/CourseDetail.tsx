
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  FileText, 
  PenSquare,
  CheckCircle,
  ArrowLeft,
  Clock,
  Star,
  Award,
  Brain,
  Sparkles,
  LucidePlayCircle,
  Video,
  BookOpenCheck,
  Check
} from "lucide-react";
import { coursesData } from "@/data/coursesData";
import ExercisesList from "@/components/courses/ExercisesList";
import { useToast } from "@/hooks/use-toast";

const LessonStatusBadge = ({ status }: { status: 'completed' | 'in-progress' | 'locked' | 'not-started' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'completed':
        return {
          bgColor: 'bg-green-mint',
          icon: <CheckCircle size={14} className="text-green-700" />,
          text: 'Complété',
          textColor: 'text-green-700'
        };
      case 'in-progress':
        return {
          bgColor: 'bg-yellow-soft',
          icon: <Play size={14} className="text-amber-700" />,
          text: 'En cours',
          textColor: 'text-amber-700'
        };
      case 'locked':
        return {
          bgColor: 'bg-gray-200',
          icon: null,
          text: 'Verrouillé',
          textColor: 'text-gray-500'
        };
      default:
        return {
          bgColor: 'bg-blue-pastel-light',
          icon: null,
          text: 'À commencer',
          textColor: 'text-blue-700'
        };
    }
  };

  const { bgColor, icon, text, textColor } = getStatusConfig();

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
      {icon}
      {text}
    </span>
  );
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("content");
  const { toast } = useToast();
  
  const course = coursesData.find(c => c.id.toString() === courseId);

  const generateStudyMaterial = (type: string) => {
    toast({
      title: "Génération en cours",
      description: `Votre ${type} personnalisée est en cours de création...`,
    });
  };
  
  if (!course) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <GlassCard>
          <h2 className="text-xl font-medium mb-4">Cours non trouvé</h2>
          <p className="mb-4">Le cours que vous cherchez n'existe pas ou a été déplacé.</p>
          <Link to="/courses">
            <Button className="shadow-md hover:shadow-lg">
              <ArrowLeft size={16} className="mr-2" />
              Retour aux cours
            </Button>
          </Link>
        </GlassCard>
      </div>
    );
  }

  // Sample lesson data to simulate a course like Kartable/SchoolMouv
  const lessonModules = [
    {
      id: 1,
      title: "Introduction aux concepts fondamentaux",
      duration: "15 min",
      type: "video",
      status: "completed" as const,
      progress: 100,
      icon: <Video size={16} />
    },
    {
      id: 2,
      title: "Définitions et formules importantes",
      duration: "20 min",
      type: "lesson",
      status: "completed" as const,
      progress: 100,
      icon: <BookOpen size={16} />
    },
    {
      id: 3,
      title: "Exemples et applications",
      duration: "25 min",
      type: "interactive",
      status: "in-progress" as const,
      progress: 70,
      icon: <Play size={16} />
    },
    {
      id: 4,
      title: "Exercices d'entraînement",
      duration: "30 min",
      type: "exercise",
      status: "not-started" as const,
      progress: 0,
      icon: <PenSquare size={16} />
    },
    {
      id: 5,
      title: "Quiz de vérification des connaissances",
      duration: "15 min",
      type: "quiz",
      status: "locked" as const,
      progress: 0,
      icon: <CheckCircle size={16} />
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with navigation */}
        <div className="mb-6 flex items-center">
          <Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl md:text-3xl font-display font-bold">{course.title}</h1>
        </div>
        
        {/* Course hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <GlassCard className="lg:col-span-2 overflow-hidden">
            <div className="relative h-64 w-full rounded-lg -m-6 mb-4 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white">
                  {course.subject}
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen size={14} className="mr-1" />
                  <span>{course.lessons} leçons</span>
                </div>
                <div className="flex items-center">
                  <Star size={14} className="mr-1 text-yellow-500" />
                  <span>{course.rating}</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Progression</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              
              <p className="text-muted-foreground">
                Ce cours vous permettra d'acquérir une compréhension approfondie de {course.title.toLowerCase()}.
                À l'issue de ce parcours, vous serez capable d'appliquer ces concepts dans des situations réelles.
              </p>
              
              <div className="flex gap-2">
                <Button className="flex-1 shadow-md hover:shadow-lg">
                  <Play size={16} className="mr-2" />
                  Continuer
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10 shadow-sm hover:shadow-md">
                  <FileText size={16} />
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10 shadow-sm hover:shadow-md">
                  <PenSquare size={16} />
                </Button>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard>
            <h2 className="text-xl font-medium mb-4">Accomplissements</h2>
            <div className="space-y-4">
              <div className="bg-background/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Badge à débloquer</h3>
                    <p className="text-sm text-muted-foreground mb-2">Terminez 50% du cours pour débloquer ce badge</p>
                    <Progress value={course.progress} max={50} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div className="bg-background/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Compétences validées</h3>
                    <p className="text-sm text-muted-foreground">
                      {course.progress >= 30 ? "Compréhension des concepts de base" : "Aucune compétence validée pour l'instant"}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Star size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Points accumulés</h3>
                    <p className="text-sm text-muted-foreground">
                      {Math.floor(course.progress * 10)} points
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Tous les badges</h3>
                    <p className="text-sm text-muted-foreground">
                      Voir tous les badges disponibles et comment les obtenir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        
        {/* Course tabs */}
        <Tabs defaultValue="content" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="content">Contenu du cours</TabsTrigger>
            <TabsTrigger value="exercises">Exercices</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="space-y-6">
            {/* Style Kartable/SchoolMouv pour les leçons */}
            <GlassCard>
              <h2 className="text-xl font-medium mb-6">Programme du cours</h2>
              
              <div className="space-y-4">
                {lessonModules.map((lesson) => (
                  <div 
                    key={lesson.id} 
                    className={`
                      rounded-xl p-4 border transition-all duration-200
                      ${lesson.status === 'completed' ? 'bg-green-mint/10 border-green-mint/30' : 
                        lesson.status === 'in-progress' ? 'bg-yellow-soft/10 border-yellow-soft/30' : 
                        lesson.status === 'locked' ? 'bg-gray-100 border-gray-200 opacity-70' : 
                        'bg-white border-blue-pastel-light/30'}
                    `}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center
                          ${lesson.status === 'completed' ? 'bg-green-mint text-green-700' : 
                            lesson.status === 'in-progress' ? 'bg-yellow-soft text-amber-700' :
                            lesson.status === 'locked' ? 'bg-gray-200 text-gray-500' : 
                            'bg-blue-pastel-light text-blue-700'}
                        `}>
                          {lesson.status === 'completed' ? 
                            <Check size={18} /> : lesson.icon}
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-muted-foreground">
                              Leçon {lesson.id}
                            </span>
                            <LessonStatusBadge status={lesson.status} />
                          </div>
                          
                          <h3 className="font-medium">{lesson.title}</h3>
                          
                          <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {lesson.duration}
                            </span>
                            {lesson.progress > 0 && lesson.progress < 100 && (
                              <span>Progression: {lesson.progress}%</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        variant={lesson.status === 'locked' ? "outline" : "default"}
                        size="sm"
                        disabled={lesson.status === 'locked'}
                        className={`
                          shadow-sm hover:shadow-md
                          ${lesson.status === 'completed' ? 'bg-green-mint hover:bg-green-mint/90' : 
                            lesson.status === 'in-progress' ? '' :
                            lesson.status === 'locked' ? 'bg-gray-100 hover:bg-gray-100' : ''}
                        `}
                      >
                        {lesson.status === 'completed' ? 'Revoir' : 
                         lesson.status === 'in-progress' ? 'Continuer' :
                         lesson.status === 'locked' ? 'Verrouillé' : 'Commencer'}
                      </Button>
                    </div>
                    
                    {lesson.status === 'in-progress' && (
                      <div className="mt-3">
                        <Progress value={lesson.progress} className="h-1.5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
            
            {/* AI Study Materials - Moved from Resources tab */}
            <GlassCard className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Brain size={24} className="text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">Assistant IA de révision</h2>
                  <p className="text-sm text-muted-foreground">
                    Créez des fiches de révision personnalisées et optimisez votre apprentissage
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all"
                  onClick={() => generateStudyMaterial('fiche de révision')}
                >
                  <FileText size={16} className="mr-2" />
                  Créer une fiche de révision
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-blue-200 hover:bg-blue-50 shadow-sm hover:shadow-md transition-all"
                  onClick={() => generateStudyMaterial('synthèse')}
                >
                  <Brain size={16} className="mr-2" />
                  Générer une synthèse
                </Button>
              </div>
            </GlassCard>
            
            {/* AI Features Card - Moved from Resources tab */}
            <GlassCard className="bg-gradient-to-br from-purple-50 to-rose-50 border-purple-200/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Sparkles size={24} className="text-purple-500" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">Fonctionnalités intelligentes</h2>
                  <p className="text-sm text-muted-foreground">
                    Exploitez la puissance de l'IA pour améliorer votre apprentissage
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/60 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Play size={16} className="text-purple-500" />
                    Quiz adaptatif
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Questions générées en fonction de votre niveau
                  </p>
                </div>
                
                <div className="p-4 bg-white/60 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Brain size={16} className="text-purple-500" />
                    Révisions intelligentes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Recommandations basées sur vos performances
                  </p>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
          
          <TabsContent value="exercises">
            <ExercisesList courseId={course.id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;
