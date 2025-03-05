
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  PlayCircle, 
  FileText, 
  PenSquare,
  CheckCircle,
  ArrowLeft,
  Clock,
  Star,
  Award
} from "lucide-react";
import { coursesData } from "@/data/coursesData";
import ExercisesList from "@/components/courses/ExercisesList";
import CourseMaterials from "@/components/courses/CourseMaterials";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("content");
  
  const course = coursesData.find(c => c.id.toString() === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <GlassCard>
          <h2 className="text-xl font-medium mb-4">Cours non trouvé</h2>
          <p className="mb-4">Le cours que vous cherchez n'existe pas ou a été déplacé.</p>
          <Link to="/courses">
            <Button>
              <ArrowLeft size={16} className="mr-2" />
              Retour aux cours
            </Button>
          </Link>
        </GlassCard>
      </div>
    );
  }

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
                <Button className="flex-1">
                  <PlayCircle size={16} className="mr-2" />
                  Continuer
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <FileText size={16} />
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <PenSquare size={16} />
                </Button>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard>
            <h2 className="text-xl font-medium mb-4">Accomplissements</h2>
            <div className="space-y-4">
              <div className="bg-background/80 rounded-lg p-4">
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
              
              <div className="bg-background/80 rounded-lg p-4">
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
              
              <div className="bg-background/80 rounded-lg p-4">
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
            </div>
          </GlassCard>
        </div>
        
        {/* Course tabs */}
        <Tabs defaultValue="content" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="content">Contenu du cours</TabsTrigger>
            <TabsTrigger value="exercises">Exercices</TabsTrigger>
            <TabsTrigger value="materials">Ressources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-medium mb-4">Modules du cours</h2>
              <div className="space-y-4">
                {[...Array(course.lessons)].map((_, i) => (
                  <div key={i} className="bg-background/80 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="text-sm font-medium">{i + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Leçon {i + 1}</h3>
                          <p className="text-sm text-muted-foreground">
                            {i < course.progress / (100 / course.lessons) ? "Complété" : "Non complété"}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {i < course.progress / (100 / course.lessons) ? "Revoir" : "Commencer"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </TabsContent>
          
          <TabsContent value="exercises">
            <ExercisesList courseId={course.id} />
          </TabsContent>
          
          <TabsContent value="materials">
            <CourseMaterials courseId={course.id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;
