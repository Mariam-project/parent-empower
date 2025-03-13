
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlassCard from "@/components/ui/GlassCard";
import StudentTracker from "@/components/professor/StudentTracker";
import ResourceCreator from "@/components/professor/ResourceCreator";
import CourseManager from "@/components/professor/CourseManager";
import CommunicationCenter from "@/components/professor/CommunicationCenter";
import LearningAnalytics from "@/components/professor/LearningAnalytics";
import { BookCopy, Users, Calendar, MessageSquare, BarChart, Bell, FileText, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const ProfessorDashboard = () => {
  const [activeTab, setActiveTab] = useState("students");
  const { toast } = useToast();

  // Simuler des notifications pour montrer le fonctionnement
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      toast({
        title: "Activité récente",
        description: "5 élèves ont terminé le dernier devoir de mathématiques",
      })
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-light/30 to-background pb-12">
      <div className="container mx-auto py-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Tableau de bord professeur</h1>
            <p className="text-muted-foreground">
              Gérez vos cours, suivez vos élèves et créez des ressources pédagogiques
            </p>
          </div>

          {/* Quick Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <GlassCard className="p-4 flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-blue-pastel/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-pastel" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Élèves actifs</p>
                <p className="text-2xl font-semibold">58</p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-4 flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-green-mint/20 flex items-center justify-center">
                <FileText className="h-6 w-6 text-green-mint" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Devoirs à corriger</p>
                <p className="text-2xl font-semibold">12</p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-4 flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-yellow-soft/20 flex items-center justify-center">
                <Bell className="h-6 w-6 text-yellow-soft" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Notifications</p>
                <p className="text-2xl font-semibold">7</p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-4 flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-blue-light/20 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-blue-light" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Progression moyenne</p>
                <p className="text-2xl font-semibold">68%</p>
              </div>
            </GlassCard>
          </div>

          {/* Quick Actions */}
          <GlassCard className="p-4">
            <h2 className="text-lg font-medium mb-3">Actions rapides</h2>
            <div className="flex flex-wrap gap-2">
              <Button className="shadow-button">
                <FileText size={16} className="mr-2" />
                Créer un cours
              </Button>
              <Button variant="secondary" className="shadow-button">
                <MessageSquare size={16} className="mr-2" />
                Messages parents
              </Button>
              <Button variant="outline" className="shadow-button">
                <Users size={16} className="mr-2" />
                Groupes d'élèves
              </Button>
              <Button variant="outline" className="shadow-button">
                <BarChart size={16} className="mr-2" />
                Rapports
              </Button>
            </div>
          </GlassCard>

          <Tabs
            defaultValue="students"
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <GlassCard className="p-2">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent w-full">
                <TabsTrigger 
                  value="students" 
                  className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
                >
                  <Users size={18} />
                  <span className="hidden md:inline">Suivi des élèves</span>
                  <span className="md:hidden">Élèves</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="resources" 
                  className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
                >
                  <BookCopy size={18} />
                  <span className="hidden md:inline">Ressources</span>
                  <span className="md:hidden">Ressources</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="courses" 
                  className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
                >
                  <Calendar size={18} />
                  <span className="hidden md:inline">Mes cours</span>
                  <span className="md:hidden">Cours</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="communications" 
                  className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
                >
                  <MessageSquare size={18} />
                  <span className="hidden md:inline">Communications</span>
                  <span className="md:hidden">Messages</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
                >
                  <BarChart size={18} />
                  <span className="hidden md:inline">Statistiques</span>
                  <span className="md:hidden">Stats</span>
                </TabsTrigger>
              </TabsList>
            </GlassCard>

            <TabsContent value="students" className="m-0">
              <StudentTracker />
            </TabsContent>

            <TabsContent value="resources" className="m-0">
              <ResourceCreator />
            </TabsContent>

            <TabsContent value="courses" className="m-0">
              <CourseManager />
            </TabsContent>

            <TabsContent value="communications" className="m-0">
              <CommunicationCenter />
            </TabsContent>

            <TabsContent value="analytics" className="m-0">
              <LearningAnalytics />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
