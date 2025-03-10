
import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart as BarChartIcon, LineChart, PieChart, Users, Brain, Zap, Award } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

// Mock data for charts
const studentPerformanceData = [
  { name: "Sept", moyenne: 12.4, tempsConnexion: 5.2, exercices: 15 },
  { name: "Oct", moyenne: 13.1, tempsConnexion: 6.4, exercices: 22 },
  { name: "Nov", moyenne: 14.3, tempsConnexion: 7.1, exercices: 28 },
  { name: "Déc", moyenne: 13.7, tempsConnexion: 5.9, exercices: 20 },
  { name: "Jan", moyenne: 14.8, tempsConnexion: 8.2, exercices: 32 },
  { name: "Fév", moyenne: 15.2, tempsConnexion: 9.1, exercices: 38 },
];

const skillsDistributionData = [
  { name: "Algèbre", value: 78 },
  { name: "Géométrie", value: 65 },
  { name: "Statistiques", value: 83 },
  { name: "Analyse", value: 72 },
  { name: "Trigonométrie", value: 68 },
];

const engagementData = [
  { name: "Lundi", active: 42, total: 58 },
  { name: "Mardi", active: 48, total: 58 },
  { name: "Mercredi", active: 52, total: 58 },
  { name: "Jeudi", active: 47, total: 58 },
  { name: "Vendredi", active: 39, total: 58 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const LearningAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard className="p-5 flex flex-col items-center">
          <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-1">58</h3>
          <p className="text-muted-foreground text-sm text-center">Élèves actifs</p>
        </GlassCard>
        
        <GlassCard className="p-5 flex flex-col items-center">
          <div className="h-12 w-12 bg-yellow-soft/20 rounded-full flex items-center justify-center mb-3">
            <Brain className="h-6 w-6 text-yellow-soft" />
          </div>
          <h3 className="text-xl font-semibold mb-1">87%</h3>
          <p className="text-muted-foreground text-sm text-center">Taux de complétion</p>
        </GlassCard>
        
        <GlassCard className="p-5 flex flex-col items-center">
          <div className="h-12 w-12 bg-green-mint/20 rounded-full flex items-center justify-center mb-3">
            <Zap className="h-6 w-6 text-green-mint" />
          </div>
          <h3 className="text-xl font-semibold mb-1">14.2/20</h3>
          <p className="text-muted-foreground text-sm text-center">Moyenne générale</p>
        </GlassCard>
      </div>
      
      <Tabs defaultValue="performance" className="space-y-4">
        <GlassCard className="p-2">
          <TabsList className="grid grid-cols-3 gap-2 bg-transparent w-full">
            <TabsTrigger 
              value="performance" 
              className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
            >
              <BarChartIcon size={16} />
              <span>Performance</span>
            </TabsTrigger>
            <TabsTrigger 
              value="skills" 
              className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
            >
              <PieChart size={16} />
              <span>Compétences</span>
            </TabsTrigger>
            <TabsTrigger 
              value="engagement" 
              className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
            >
              <LineChart size={16} />
              <span>Engagement</span>
            </TabsTrigger>
          </TabsList>
        </GlassCard>
        
        <TabsContent value="performance" className="m-0 space-y-4">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-4">Performance des élèves</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={studentPerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="moyenne" name="Moyenne" fill="#8884d8" />
                  <Bar dataKey="tempsConnexion" name="Temps de connexion (h)" fill="#82ca9d" />
                  <Bar dataKey="exercices" name="Exercices complétés" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GlassCard className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Top élèves</h4>
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-3">
                {[
                  { name: "Marie Laurent", score: "18.5/20" },
                  { name: "Lucas Dupont", score: "17.8/20" },
                  { name: "Emma Rousseau", score: "17.3/20" },
                ].map((student, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {i + 1}
                      </div>
                      <span>{student.name}</span>
                    </div>
                    <span className="font-semibold">{student.score}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
            
            <GlassCard className="p-4 col-span-2">
              <h4 className="font-medium mb-3">Progression de la classe</h4>
              <div className="space-y-4">
                {[
                  { name: "Chapitre 1: Fonctions", progress: 100 },
                  { name: "Chapitre 2: Dérivées", progress: 92 },
                  { name: "Chapitre 3: Intégrales", progress: 78 },
                  { name: "Chapitre 4: Statistiques", progress: 45 },
                  { name: "Chapitre 5: Probabilités", progress: 12 },
                ].map((chapter, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{chapter.name}</span>
                      <span>{chapter.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${chapter.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </TabsContent>
        
        <TabsContent value="skills" className="m-0">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-4">Distribution des compétences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={skillsDistributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {skillsDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Analyse des compétences</h4>
                <div className="space-y-3">
                  {skillsDistributionData.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${skill.value}%`,
                            backgroundColor: COLORS[i % COLORS.length]
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-purple-light/10 rounded-lg border border-purple-light/20 mt-4">
                  <h5 className="font-medium mb-2">Recommandation</h5>
                  <p className="text-sm text-muted-foreground">
                    Basé sur les données, une attention particulière devrait être portée sur l'amélioration des compétences en Géométrie et Trigonométrie.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </TabsContent>
        
        <TabsContent value="engagement" className="m-0">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-4">Suivi de l'engagement</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={engagementData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="active" name="Élèves actifs" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="total" name="Total élèves" stroke="#82ca9d" />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-green-mint/10 rounded-lg border border-green-mint/20">
                <h4 className="font-medium mb-2 flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-green-mint" />
                  Taux de participation
                </h4>
                <p className="text-2xl font-semibold">78%</p>
                <p className="text-sm text-muted-foreground mt-1">
                  +5% par rapport au mois dernier
                </p>
              </div>
              
              <div className="p-4 bg-purple-light/10 rounded-lg border border-purple-light/20">
                <h4 className="font-medium mb-2 flex items-center">
                  <Brain className="h-4 w-4 mr-2 text-purple-light" />
                  Temps moyen de connexion
                </h4>
                <p className="text-2xl font-semibold">3.5h</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Par semaine et par étudiant
                </p>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-medium mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  Activités complétées
                </h4>
                <p className="text-2xl font-semibold">325</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Sur l'ensemble des élèves
                </p>
              </div>
            </div>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningAnalytics;
