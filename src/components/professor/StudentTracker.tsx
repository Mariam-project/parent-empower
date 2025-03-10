import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  ChevronDown,
  Filter,
  User,
  Mail,
  Phone,
  ExternalLink,
  MoreHorizontal,
  FileText,
  BarChart,
  MessageSquare
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// Mock data for students
const mockStudents = [
  {
    id: 1,
    name: "Emma Dupont",
    email: "emma.dupont@example.com",
    phone: "06 12 34 56 78",
    avatar: "https://i.pravatar.cc/150?img=1",
    progress: 85,
    grade: "14.5/20",
    status: "Active",
    lastActivity: "2 jours",
    notes: "Très bon travail en classe, participation active.",
  },
  {
    id: 2,
    name: "Lucas Bernard",
    email: "lucas.bernard@example.com",
    phone: "07 65 43 21 09",
    avatar: "https://i.pravatar.cc/150?img=2",
    progress: 62,
    grade: "11/20",
    status: "En pause",
    lastActivity: "1 semaine",
    notes: "Quelques difficultés en mathématiques, besoin de soutien.",
  },
  {
    id: 3,
    name: "Chloé Martin",
    email: "chloe.martin@example.com",
    phone: "06 98 76 54 32",
    avatar: "https://i.pravatar.cc/150?img=3",
    progress: 92,
    grade: "16/20",
    status: "Active",
    lastActivity: "1 jour",
    notes: "Excellente élève, autonome et motivée.",
  },
  {
    id: 4,
    name: "Thomas Petit",
    email: "thomas.petit@example.com",
    phone: "07 11 22 33 44",
    avatar: "https://i.pravatar.cc/150?img=4",
    progress: 78,
    grade: "13/20",
    status: "Active",
    lastActivity: "3 jours",
    notes: "Bon niveau général, doit améliorer son organisation.",
  },
  {
    id: 5,
    name: "Léa Garnier",
    email: "lea.garnier@example.com",
    phone: "06 44 55 66 77",
    avatar: "https://i.pravatar.cc/150?img=5",
    progress: 55,
    grade: "9.5/20",
    status: "En difficulté",
    lastActivity: "2 semaines",
    notes: "Manque de confiance en soi, encouragements nécessaires.",
  },
  {
    id: 6,
    name: "Antoine Durand",
    email: "antoine.durand@example.com",
    phone: "07 99 88 77 66",
    avatar: "https://i.pravatar.cc/150?img=6",
    progress: 88,
    grade: "15/20",
    status: "Active",
    lastActivity: "1 jour",
    notes: "Très bon esprit d'équipe, aide ses camarades.",
  },
  {
    id: 7,
    name: "Manon Rousseau",
    email: "manon.rousseau@example.com",
    phone: "06 22 33 44 55",
    avatar: "https://i.pravatar.cc/150?img=7",
    progress: 70,
    grade: "12/20",
    status: "Active",
    lastActivity: "4 jours",
    notes: "Doit travailler sa concentration en classe.",
  },
  {
    id: 8,
    name: "Hugo Leroy",
    email: "hugo.leroy@example.com",
    phone: "07 33 44 55 66",
    avatar: "https://i.pravatar.cc/150?img=8",
    progress: 60,
    grade: "10.5/20",
    status: "En pause",
    lastActivity: "1 semaine",
    notes: "Absent ces derniers temps, vérifier sa situation.",
  },
  {
    id: 9,
    name: "Camille David",
    email: "camille.david@example.com",
    phone: "06 55 66 77 88",
    avatar: "https://i.pravatar.cc/150?img=9",
    progress: 95,
    grade: "17/20",
    status: "Active",
    lastActivity: "1 jour",
    notes: "Curieuse et intéressée, pose des questions pertinentes.",
  },
  {
    id: 10,
    name: "Valentin Moreau",
    email: "valentin.moreau@example.com",
    phone: "07 77 88 99 00",
    avatar: "https://i.pravatar.cc/150?img=10",
    progress: 80,
    grade: "14/20",
    status: "Active",
    lastActivity: "2 jours",
    notes: "A besoin d'être plus rigoureux dans son travail.",
  },
];

const StudentTracker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredStudents = mockStudents.filter((student) => {
    const searchRegex = new RegExp(searchTerm, "i");
    const matchesSearch =
      searchRegex.test(student.name) || searchRegex.test(student.email);
    const matchesStatus =
      filterStatus === "Tous" || student.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (!sortColumn) return 0;

    let aValue = a[sortColumn];
    let bValue = b[sortColumn];

    if (typeof aValue === "string") {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  
  const getSortIcon = (column) => {
    if (column !== sortColumn) return null;
    return sortDirection === "asc" ? "▲" : "▼";
  };

  return (
    <div className="space-y-6">
      <GlassCard className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Suivi des élèves</h2>
          <Button variant="gray" className="shadow-button">
            <Filter className="h-4 w-4 mr-2" />
            Filtrer
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10 bg-white shadow-button"
              placeholder="Rechercher un élève..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto justify-start shadow-button" >
                Statut: {filterStatus}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              <DropdownMenuItem onClick={() => setFilterStatus("Tous")}>
                Tous
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus("Active")}>
                Active
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus("En pause")}>
                En pause
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus("En difficulté")}>
                En difficulté
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div>
            <Button variant="gray" className="w-full md:w-auto shadow-button">
              <ExternalLink className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>
      </GlassCard>
      
      <GlassCard className="p-0 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <input type="checkbox" />
              </TableHead>
              <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                Nom {getSortIcon("name")}
              </TableHead>
              <TableHead onClick={() => handleSort("email")} className="cursor-pointer">
                Email {getSortIcon("email")}
              </TableHead>
              <TableHead onClick={() => handleSort("phone")} className="cursor-pointer">
                Téléphone {getSortIcon("phone")}
              </TableHead>
              <TableHead onClick={() => handleSort("progress")} className="text-right cursor-pointer">
                Progression {getSortIcon("progress")}
              </TableHead>
              <TableHead onClick={() => handleSort("grade")} className="text-right cursor-pointer">
                Note {getSortIcon("grade")}
              </TableHead>
              <TableHead onClick={() => handleSort("status")} className="text-center cursor-pointer">
                Statut {getSortIcon("status")}
              </TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span>{student.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <a href={`mailto:${student.email}`} className="text-primary hover:underline">
                    {student.email}
                  </a>
                </TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Progress value={student.progress} className="w-[80px]" />
                    <span>{student.progress}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{student.grade}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant="outline"
                    className={
                      student.status === "Active"
                        ? "bg-green-mint text-green-mint-foreground border-green-mint/30"
                        : student.status === "En pause"
                        ? "bg-yellow-soft text-yellow-soft-foreground border-yellow-soft/30"
                        : "bg-red-400 text-red-400-foreground border-red-400/30"
                    }
                  >
                    {student.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Ouvrir le menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <User className="h-3 w-3 mr-2" />
                        Voir le profil
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="h-3 w-3 mr-2" />
                        Envoyer un email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Phone className="h-3 w-3 mr-2" />
                        Appeler
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="h-3 w-3 mr-2" />
                        Voir les devoirs
                      </DropdownMenuItem>
                       <DropdownMenuItem>
                        <BarChart className="h-3 w-3 mr-2" />
                        Statistiques
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="h-3 w-3 mr-2" />
                        Envoyer un message
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </GlassCard>
    </div>
  );
};

export default StudentTracker;
