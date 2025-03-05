import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Book, 
  Target, 
  Sparkles, 
  CalendarDays, 
  PlusCircle,
  Edit3,
  CheckCircle2,
  Lightbulb,
  Trophy,
  Clock,
  Save,
  MessageSquare,
  UserCircle,
  BookOpen
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data
const mockGoals = [
  { id: 1, title: "Améliorer ma compréhension en mathématiques", completed: false, deadline: "15 juillet 2023" },
  { id: 2, title: "Obtenir une note supérieure à 15 en physique", completed: true, deadline: "10 juin 2023" },
  { id: 3, title: "Lire 3 livres pour l'analyse littéraire", completed: false, deadline: "30 juillet 2023" },
];

const mockNotes = [
  { 
    id: 1, 
    title: "Révision des fonctions dérivées", 
    content: "Les points importants à retenir:\n- La dérivée d'une fonction f en un point a est la limite du taux d'accroissement de f en a\n- Formule: f'(a) = lim(h→0) [f(a+h) - f(a)]/h\n- Applications: tangente à une courbe, vitesse instantanée", 
    date: "12 juin 2023",
    tags: ["mathématiques", "révision"]
  },
  { 
    id: 2, 
    title: "Techniques d'analyse littéraire", 
    content: "Méthode pour analyser un texte:\n1. Contextualiser l'œuvre\n2. Identifier les thèmes principaux\n3. Analyser le style et les figures de style\n4. Formuler une problématique", 
    date: "8 juin 2023",
    tags: ["français", "méthodologie"]
  },
];

const mockFeedback = [
  { 
    id: 1, 
    from: "Mme Dupont (Mathématiques)", 
    content: "Excellente progression en algèbre. Continuez à travailler les démonstrations.", 
    date: "14 juin 2023" 
  },
  { 
    id: 2, 
    from: "M. Martin (Physique)", 
    content: "Bon travail sur le dernier TP. Attention aux unités dans les calculs.", 
    date: "10 juin 2023" 
  },
];

const LearningJournal = () => {
  const [goals, setGoals] = useState(mockGoals);
  const [notes, setNotes] = useState(mockNotes);
  const [newGoal, setNewGoal] = useState("");
  const [newGoalDeadline, setNewGoalDeadline] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [activeTab, setActiveTab] = useState("goals");
  const { toast } = useToast();

  const addGoal = () => {
    if (newGoal.trim() === "") return;
    
    const goal = {
      id: goals.length + 1,
      title: newGoal,
      completed: false,
      deadline: newGoalDeadline || "Non définie"
    };
    
    setGoals([...goals, goal]);
    setNewGoal("");
    setNewGoalDeadline("");
    
    toast({
      title: "Objectif ajouté",
      description: "Votre nouvel objectif a été ajouté avec succès.",
    });
  };
  
  const toggleGoalCompletion = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
    
    const goal = goals.find(g => g.id === id);
    
    toast({
      title: goal?.completed ? "Objectif à faire" : "Objectif accompli !",
      description: goal?.completed 
        ? "L'objectif a été remis dans votre liste à faire." 
        : "Félicitations pour avoir atteint cet objectif !",
    });
  };
  
  const saveNote = () => {
    if (noteTitle.trim() === "" || noteContent.trim() === "") return;
    
    const note = {
      id: notes.length + 1,
      title: noteTitle,
      content: noteContent,
      date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
      tags: ["personnel"]
    };
    
    setNotes([note, ...notes]);
    setNoteTitle("");
    setNoteContent("");
    
    toast({
      title: "Note enregistrée",
      description: "Votre note a été ajoutée à votre carnet d'apprentissage.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 animate-fade-up">
          <div className="flex items-center mb-2">
            <Book className="mr-2 text-primary" size={24} />
            <h1 className="text-3xl font-display font-bold">Carnet d'apprentissage</h1>
          </div>
          <p className="text-muted-foreground">
            Suivez votre progression, notez vos objectifs et organisez vos idées
          </p>
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="goals" className="mb-6" onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="goals" className="flex items-center gap-2">
              <Target size={16} />
              <span>Objectifs</span>
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <Edit3 size={16} />
              <span>Notes</span>
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <MessageSquare size={16} />
              <span>Retours</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Trophy size={16} />
              <span>Accomplissements</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Goals tab */}
          <TabsContent value="goals" className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Target size={20} className="text-primary" />
                <span>Mes objectifs d'apprentissage</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                {goals.map((goal) => (
                  <div 
                    key={goal.id} 
                    className={`p-4 rounded-lg flex items-start justify-between ${
                      goal.completed 
                        ? "bg-green-mint/10 border border-green-mint/20" 
                        : "bg-background/80"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full h-6 w-6 ${
                          goal.completed ? "text-green-600" : "text-muted-foreground"
                        }`}
                        onClick={() => toggleGoalCompletion(goal.id)}
                      >
                        {goal.completed ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                      </Button>
                      
                      <div>
                        <p className={`font-medium ${goal.completed ? "line-through text-muted-foreground" : ""}`}>
                          {goal.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Échéance : {goal.deadline}
                        </p>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit3 size={14} />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium mb-3">Ajouter un nouvel objectif</h3>
                <div className="flex flex-col gap-3">
                  <Input 
                    placeholder="Quel est votre prochain objectif ?" 
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                  />
                  <div className="flex gap-3">
                    <Input 
                      type="date" 
                      className="flex-1"
                      value={newGoalDeadline}
                      onChange={(e) => setNewGoalDeadline(e.target.value)}
                    />
                    <Button onClick={addGoal}>
                      <PlusCircle size={16} className="mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard variant="accent">
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Lightbulb size={20} className="text-primary" />
                <span>Conseil personnalisé</span>
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Basé sur vos objectifs et votre progression, voici une suggestion pour vous aider à avancer :
              </p>
              
              <div className="p-4 bg-background/60 rounded-lg">
                <p className="italic">
                  "Pour améliorer votre compréhension en mathématiques, essayez de consacrer 20 minutes par jour 
                  à résoudre des problèmes variés. La régularité est plus efficace que de longues sessions intensives."
                </p>
              </div>
            </GlassCard>
          </TabsContent>
          
          {/* Notes tab */}
          <TabsContent value="notes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                {notes.map((note) => (
                  <GlassCard key={note.id}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-medium">{note.title}</h3>
                      <div className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary">
                        {note.date}
                      </div>
                    </div>
                    
                    <div className="text-muted-foreground whitespace-pre-line mb-3">
                      {note.content}
                    </div>
                    
                    <div className="flex gap-2">
                      {note.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-background/80 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                ))}
              </div>
              
              <div>
                <GlassCard className="sticky top-24">
                  <h3 className="text-lg font-medium mb-4">Nouvelle note</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Titre de la note" 
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Contenu de votre note..."
                        className="min-h-[200px]"
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                      />
                    </div>
                    
                    <Button onClick={saveNote} className="w-full">
                      <Save size={16} className="mr-2" />
                      Enregistrer la note
                    </Button>
                  </div>
                </GlassCard>
              </div>
            </div>
          </TabsContent>
          
          {/* Feedback tab */}
          <TabsContent value="feedback" className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-primary" />
                <span>Retours des enseignants</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                {mockFeedback.map((feedback) => (
                  <div key={feedback.id} className="p-4 bg-background/80 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <UserCircle size={20} />
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{feedback.from}</p>
                          <p className="text-xs text-muted-foreground">{feedback.date}</p>
                        </div>
                        <p className="text-muted-foreground mt-1">
                          {feedback.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium mb-3">Demander un retour</h3>
                <div className="flex flex-col gap-3">
                  <Textarea 
                    placeholder="Posez une question à vos enseignants ou demandez un retour sur votre travail..."
                    className="min-h-[100px]"
                  />
                  <Button>
                    <MessageSquare size={16} className="mr-2" />
                    Envoyer la demande
                  </Button>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
          
          {/* Achievements tab */}
          <TabsContent value="achievements" className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Trophy size={20} className="text-primary" />
                <span>Mes accomplissements</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-pastel/10 border border-blue-pastel/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Target size={20} />
                    </div>
                    <h3 className="font-medium">Objectifs accomplis</h3>
                  </div>
                  <p className="text-3xl font-bold mb-1">
                    {goals.filter(g => g.completed).length}/{goals.length}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    objectifs atteints
                  </p>
                </div>
                
                <div className="p-4 bg-purple-light/10 border border-purple-light/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-purple-light/20 flex items-center justify-center text-purple-light">
                      <CalendarDays size={20} />
                    </div>
                    <h3 className="font-medium">Régularité</h3>
                  </div>
                  <p className="text-3xl font-bold mb-1">
                    15 jours
                  </p>
                  <p className="text-sm text-muted-foreground">
                    d'apprentissage consécutif
                  </p>
                </div>
                
                <div className="p-4 bg-green-mint/10 border border-green-mint/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-mint/20 flex items-center justify-center text-green-mint">
                      <BookOpen size={20} />
                    </div>
                    <h3 className="font-medium">Cours terminés</h3>
                  </div>
                  <p className="text-3xl font-bold mb-1">
                    12
                  </p>
                  <p className="text-sm text-muted-foreground">
                    cours complétés
                  </p>
                </div>
                
                <div className="p-4 bg-background/80 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="font-medium">Points d'expérience</h3>
                  </div>
                  <p className="text-3xl font-bold mb-1">
                    2845
                  </p>
                  <p className="text-sm text-muted-foreground">
                    points accumulés
                  </p>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LearningJournal;
