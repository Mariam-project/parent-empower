
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlassCard from "@/components/ui/GlassCard";
import StudentTracker from "@/components/professor/StudentTracker";
import ResourceCreator from "@/components/professor/ResourceCreator";
import CourseManager from "@/components/professor/CourseManager";
import CommunicationCenter from "@/components/professor/CommunicationCenter";
import LearningAnalytics from "@/components/professor/LearningAnalytics";
import { BookCopy, Users, Calendar, MessageSquare, BarChart } from "lucide-react";

const ProfessorDashboard = () => {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-light/30 to-background pb-12">
      <div className="container mx-auto py-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Tableau de bord professeur</h1>
            <p className="text-muted-foreground">
              Gérez vos cours, suivez vos élèves et créez des ressources pédagogiques
            </p>
          </div>

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
