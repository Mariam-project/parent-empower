
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from "lucide-react";
import {
  BarChart as ReBarChart,
  Bar,
  LineChart as ReLineChart,
  Line,
  PieChart as RePieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

// Sample data for charts
const performanceData = [
  { name: "Math", score: 78, average: 65 },
  { name: "French", score: 82, average: 70 },
  { name: "History", score: 65, average: 68 },
  { name: "Physics", score: 90, average: 72 },
  { name: "English", score: 75, average: 69 },
  { name: "Philosophy", score: 68, average: 64 },
];

const attendanceData = [
  { name: "Sep", attendance: 95 },
  { name: "Oct", attendance: 97 },
  { name: "Nov", attendance: 93 },
  { name: "Dec", attendance: 89 },
  { name: "Jan", attendance: 92 },
  { name: "Feb", attendance: 94 },
];

const engagementData = [
  { name: "Participation", value: 35 },
  { name: "Homework", value: 30 },
  { name: "Projects", value: 25 },
  { name: "Extra Credit", value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LearningAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Performance moyenne</CardTitle>
            <CardDescription>Résultats comparés aux moyennes de classe</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart
                  data={performanceData}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#8884d8" name="Note élève" />
                  <Bar dataKey="average" fill="#82ca9d" name="Moyenne classe" />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Présence mensuelle</CardTitle>
            <CardDescription>Taux de présence par mois</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <ReLineChart
                  data={attendanceData}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} domain={[80, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="attendance"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    name="Présence (%)"
                  />
                </ReLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Engagement</CardTitle>
            <CardDescription>Répartition des formes d'engagement</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[200px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={engagementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {engagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analyse détaillée par classe</CardTitle>
          <CardDescription>
            Consultez les statistiques détaillées pour chaque classe
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="performance" className="space-y-4">
            <TabsList className="grid grid-cols-3 gap-2 bg-gray-100">
              <TabsTrigger 
                value="performance" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <BarChart size={16} />
                <span>Performance</span>
              </TabsTrigger>
              <TabsTrigger 
                value="attendance" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <LineChart size={16} />
                <span>Présence</span>
              </TabsTrigger>
              <TabsTrigger 
                value="engagement" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <PieChart size={16} />
                <span>Engagement</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Consultez les performances moyennes des élèves dans chaque matière et comparez-les à la moyenne générale.
              </p>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ReBarChart
                    data={performanceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" name="Note élève" fill="#8884d8" />
                    <Bar dataKey="average" name="Moyenne classe" fill="#82ca9d" />
                  </ReBarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="attendance" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Visualisez l'évolution du taux de présence des élèves au cours des derniers mois.
              </p>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart
                    data={attendanceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="attendance"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                      name="Présence (%)"
                    />
                  </ReLineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="engagement" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Analyse de l'engagement des élèves à travers différentes activités pédagogiques.
              </p>
              <div className="h-[300px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={engagementData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningAnalytics;
