
import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  Search,
  Filter,
  FileText,
  Video,
  Link as LinkIcon,
  Plus,
  MoreHorizontal,
  Tag,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { coursesData } from "@/data/coursesData";

const CourseManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { toast } = useToast();
  
  // Mock additional course data
  const myCourses = [
    {
      ...coursesData[0],
      nextSession: "Aujourd'hui, 14:30",
      studentsEnrolled: 28,
      status: "active"
    },
    {
      ...coursesData[1],
      nextSession: "Demain, 10:15",
      studentsEnrolled: 24,
      status: "active"
    },
    {
      ...coursesData[2],
      nextSession: "En pause jusqu'au 15/10",
      studentsEnrolled: 32,
      status: "inactive"
    },
    {
      ...coursesData[3],
      nextSession: "Jeudi, 15:45",
      studentsEnrolled: 26,
      status: "active"
    }
  ];
  
  const filteredCourses = myCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  const handleStartLesson = () => {
    toast({
      title: "Cours démarré",
      description: "Votre cours a démarré et les étudiants peuvent désormais y accéder."
    });
  };
  
  const handleAddCourse = () => {
    toast({
      title: "Créer un nouveau cours",
      description: "Cette fonctionnalité sera bientôt disponible."
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <FileText className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Mes cours</p>
            <h3 className="text-2xl font-bold">{myCourses.length}</h3>
          </div>
        </GlassCard>
        
        <GlassCard className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-green-mint/20 flex items-center justify-center">
            <Users className="text-green-mint" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total d'élèves</p>
            <h3 className="text-2xl font-bold">110</h3>
          </div>
        </GlassCard>
        
        <GlassCard className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-blue-pastel/20 flex items-center justify-center">
            <Clock className="text-blue-pastel" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Prochain cours</p>
            <h3 className="text-xl font-bold">Aujourd'hui, 14:30</h3>
          </div>
        </GlassCard>
      </div>
      
      <GlassCard className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold">Mes cours</h2>
          
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-[250px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-10 bg-white shadow-button"
                placeholder="Rechercher un cours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="gray" className="shadow-button">
                  <Filter className="mr-2 h-4 w-4" />
                  {statusFilter === "all" ? "Tous les cours" : 
                   statusFilter === "active" ? "Cours actifs" : "Cours inactifs"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                  Tous les cours
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("active")}>
                  Cours actifs
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("inactive")}>
                  Cours inactifs
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button onClick={handleAddCourse} className="shadow-button">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un cours
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-lg border border-border/30 overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="relative h-40 md:h-full">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div>
                      <div className="flex items-center mb-1">
                        <Tag className="h-4 w-4 text-white mr-2" />
                        <span className="text-white/90 text-sm font-medium">{course.subject}</span>
                      </div>
                      <h3 className="text-white font-medium">{course.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-3 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-medium mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">{course.subject}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <div className={`px-2 py-1 rounded-full text-white ${
                          course.status === "active" ? "bg-green-mint" : "bg-gray-400"
                        }`}>
                          {course.status === "active" ? "Actif" : "Inactif"}
                        </div>
                        <div className="px-2 py-1 rounded-full bg-gray-100">
                          {course.lessons} leçons
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Prochain cours</p>
                        <div className="flex items-center mt-1">
                          <CalendarIcon className="h-4 w-4 text-primary mr-2" />
                          <span className="font-medium">{course.nextSession}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Élèves inscrits</p>
                        <div className="flex items-center mt-1">
                          <Users className="h-4 w-4 text-green-mint mr-2" />
                          <span className="font-medium">{course.studentsEnrolled} élèves</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end justify-between gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="gray" size="icon" className="h-8 w-8 shadow-button">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            Modifier le cours
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Video className="h-4 w-4 mr-2" />
                            Gérer les ressources
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="h-4 w-4 mr-2" />
                            Voir les élèves
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <LinkIcon className="h-4 w-4 mr-2" />
                            Copier le lien
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Archiver le cours
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      
                      <div className="space-y-2 w-full md:text-right">
                        {course.status === "active" && (
                          <Button onClick={handleStartLesson} className="shadow-button w-full md:w-auto">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Démarrer le cours
                          </Button>
                        )}
                        
                        <Button variant="gray" className="shadow-button w-full md:w-auto">
                          <FileText className="h-4 w-4 mr-2" />
                          Voir les détails
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default CourseManager;
