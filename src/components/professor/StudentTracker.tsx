
import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { 
  Users, Search, UserCheck, UserX, Clock, Award, 
  ChevronDown, ChevronUp, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock student data
const studentData = [
  { 
    id: 1, 
    name: "Emma Dupont", 
    attendance: 95, 
    completedAssignments: 18, 
    totalAssignments: 20,
    averageGrade: 17.5,
    lastActive: "Aujourd'hui, 10:30",
    status: "online",
    avatar: "https://i.pravatar.cc/150?img=1",
    badges: 14,
    progress: 85
  },
  { 
    id: 2, 
    name: "Thomas Bernard", 
    attendance: 85, 
    completedAssignments: 16, 
    totalAssignments: 20,
    averageGrade: 15.0,
    lastActive: "Hier, 14:25",
    status: "offline",
    avatar: "https://i.pravatar.cc/150?img=4",
    badges: 10,
    progress: 72
  },
  { 
    id: 3, 
    name: "Léa Martin", 
    attendance: 90, 
    completedAssignments: 19, 
    totalAssignments: 20,
    averageGrade: 16.2,
    lastActive: "Aujourd'hui, 09:15",
    status: "online",
    avatar: "https://i.pravatar.cc/150?img=5",
    badges: 12,
    progress: 80
  },
  { 
    id: 4, 
    name: "Lucas Petit", 
    attendance: 70, 
    completedAssignments: 12, 
    totalAssignments: 20,
    averageGrade: 13.5,
    lastActive: "Il y a 2 jours",
    status: "offline",
    avatar: "https://i.pravatar.cc/150?img=8",
    badges: 7,
    progress: 60
  },
  { 
    id: 5, 
    name: "Chloé Dubois", 
    attendance: 98, 
    completedAssignments: 20, 
    totalAssignments: 20,
    averageGrade: 19.0,
    lastActive: "Aujourd'hui, 11:05",
    status: "online",
    avatar: "https://i.pravatar.cc/150?img=9",
    badges: 18,
    progress: 95
  },
];

const StudentTracker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [studentExpanded, setStudentExpanded] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  
  const filteredStudents = studentData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || 
                         (filterStatus === "online" && student.status === "online") ||
                         (filterStatus === "offline" && student.status === "offline");
    return matchesSearch && matchesStatus;
  });
  
  const toggleStudentExpand = (studentId: number) => {
    if (studentExpanded === studentId) {
      setStudentExpanded(null);
    } else {
      setStudentExpanded(studentId);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <GlassCard className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Users className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total élèves</p>
            <h3 className="text-2xl font-bold">{studentData.length}</h3>
          </div>
        </GlassCard>
        
        <GlassCard className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-green-mint/20 flex items-center justify-center">
            <UserCheck className="text-green-mint" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Présence moyenne</p>
            <h3 className="text-2xl font-bold">87%</h3>
          </div>
        </GlassCard>
        
        <GlassCard className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-purple-light/20 flex items-center justify-center">
            <Award className="text-purple-light" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Moyenne générale</p>
            <h3 className="text-2xl font-bold">16.2/20</h3>
          </div>
        </GlassCard>
        
        <GlassCard className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-yellow-soft/20 flex items-center justify-center">
            <Clock className="text-yellow-soft" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Assiduité</p>
            <h3 className="text-2xl font-bold">92%</h3>
          </div>
        </GlassCard>
      </div>
      
      <GlassCard className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold">Liste des élèves</h2>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-10 bg-white shadow-button w-full md:w-[250px]"
                placeholder="Rechercher un élève..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="gray" className="shadow-button">
                  {filterStatus === "all" ? "Tous les élèves" : 
                   filterStatus === "online" ? "En ligne" : "Hors ligne"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setFilterStatus("all")}>
                  Tous les élèves
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("online")}>
                  En ligne
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("offline")}>
                  Hors ligne
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="space-y-3">
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-white rounded-lg shadow-sm border border-border/30">
              <div 
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleStudentExpand(student.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src={student.avatar} 
                      alt={student.name} 
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                      student.status === "online" ? "bg-green-mint" : "bg-gray-400"
                    }`}></span>
                  </div>
                  <div>
                    <h3 className="font-medium">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">Actif: {student.lastActive}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-medium">Moyenne</p>
                    <p className="text-base font-semibold">{student.averageGrade}/20</p>
                  </div>
                  
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-medium">Progression</p>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{student.progress}%</span>
                    </div>
                  </div>
                  
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-medium">Présence</p>
                    <p className="text-base font-semibold">{student.attendance}%</p>
                  </div>
                  
                  {studentExpanded === student.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
              
              {studentExpanded === student.id && (
                <div className="px-4 pb-4 pt-2 border-t border-border/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">Performance</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Devoirs rendus</span>
                            <span className="text-sm font-medium">{student.completedAssignments}/{student.totalAssignments}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-pastel h-2 rounded-full" 
                              style={{ width: `${(student.completedAssignments/student.totalAssignments)*100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Badges obtenus</span>
                            <span className="text-sm font-medium">{student.badges}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-light h-2 rounded-full" 
                              style={{ width: `${(student.badges/20)*100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Progression</span>
                            <span className="text-sm font-medium">{student.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-muted-foreground">Détails</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-xs text-muted-foreground">Moyenne</p>
                            <p className="font-medium">{student.averageGrade}/20</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-xs text-muted-foreground">Présence</p>
                            <p className="font-medium">{student.attendance}%</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-xs text-muted-foreground">Niveau</p>
                            <p className="font-medium">Seconde</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-xs text-muted-foreground">Points</p>
                            <p className="font-medium">{student.progress * 10}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-muted-foreground">Activité récente</h4>
                        <div className="text-sm space-y-2">
                          <p className="text-xs">• A rendu le devoir "Fonctions dérivées" il y a 2 jours</p>
                          <p className="text-xs">• A obtenu le badge "Mathématicien" hier</p>
                          <p className="text-xs">• A participé à la classe virtuelle aujourd'hui</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">Actions</h4>
                      <div className="flex flex-col space-y-2">
                        <Button variant="gray" className="shadow-button justify-start">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Envoyer un message
                        </Button>
                        <Button variant="gray" className="shadow-button justify-start">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          Rapport détaillé
                        </Button>
                        <Button variant="gray" className="shadow-button justify-start">
                          <Award className="h-4 w-4 mr-2" />
                          Attribuer un badge
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default StudentTracker;
