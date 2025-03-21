
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  BookOpen, 
  PlayCircle, 
  FileText, 
  PenSquare,
  CheckCircle,
  Calculator,
  BookOpenCheck,
  Atom,
  Globe,
  Languages,
  History,
  Filter,
  SortAsc,
  Star,
  Clock
} from "lucide-react";
import { coursesData } from "@/data/coursesData";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  
  const subjects = [
    { id: "math", name: "Mathématiques", icon: <Calculator size={20} /> },
    { id: "physics", name: "Physique-Chimie", icon: <Atom size={20} /> },
    { id: "french", name: "Français", icon: <BookOpenCheck size={20} /> },
    { id: "history", name: "Histoire-Géo", icon: <Globe size={20} /> },
    { id: "languages", name: "Langues", icon: <Languages size={20} /> },
    { id: "philosophy", name: "Philosophie", icon: <History size={20} /> },
  ];
  
  // Filter courses based on search query and active filter
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "all" || course.tag === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 animate-fade-up">
          <h1 className="text-3xl font-display font-bold mb-2">Cours et ressources</h1>
          <p className="text-muted-foreground">
            Explorez notre bibliothèque de cours interactifs pour enrichir vos connaissances
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Rechercher un cours..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter size={18} />
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <SortAsc size={18} />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("all")}
              className="rounded-full"
            >
              Tous
            </Button>
            {subjects.map((subject) => (
              <Button
                key={subject.id}
                variant={activeFilter === subject.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(subject.id)}
                className="rounded-full flex items-center gap-1"
              >
                {subject.icon}
                <span>{subject.name}</span>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredCourses.map((course, index) => (
            <Link to={`/course/${course.id}`} key={course.id} className="block hover:no-underline">
              <GlassCard 
                className="overflow-hidden flex flex-col animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg -mx-6 -mt-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {course.subject}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 pt-4">
                  <h3 className="font-medium text-lg mb-2">{course.title}</h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
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
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1 text-xs">
                      <span>Progression</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button variant="default" className="flex-1">
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
              </GlassCard>
            </Link>
          ))}
        </div>
        
        {/* Recommended courses */}
        <div className="animate-fade-up" style={{ animationDelay: "800ms" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-bold">Recommandés pour vous</h2>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Star size={16} />
              <span>Voir plus</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calculator size={24} />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  Nouveau
                </span>
              </div>
              <h3 className="font-medium text-lg mb-2">Probabilités et statistiques</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                Un cours complet sur les probabilités et les statistiques pour préparer le baccalauréat.
              </p>
              <Button className="w-full mt-2">Débuter le cours</Button>
            </GlassCard>
            
            <GlassCard className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Globe size={24} />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  Populaire
                </span>
              </div>
              <h3 className="font-medium text-lg mb-2">Géopolitique contemporaine</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                Une analyse des enjeux géopolitiques actuels pour enrichir votre culture générale.
              </p>
              <Button className="w-full mt-2">Débuter le cours</Button>
            </GlassCard>
            
            <GlassCard className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpenCheck size={24} />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                  Certification
                </span>
              </div>
              <h3 className="font-medium text-lg mb-2">Méthodologie dissertation</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                Maîtrisez la méthodologie de la dissertation et obtenez une certification Parcoursup.
              </p>
              <Button className="w-full mt-2">Débuter le cours</Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
