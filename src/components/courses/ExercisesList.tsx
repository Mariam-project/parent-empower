
import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  BadgeCheck
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExercisesListProps {
  courseId: number;
}

// Mock exercises data
const exercisesData = [
  {
    id: 1,
    title: "QCM - Connaissances de base",
    type: "quiz",
    duration: "15 min",
    difficulty: "Facile",
    completed: true,
    score: 85,
  },
  {
    id: 2,
    title: "Exercice d'application",
    type: "practice",
    duration: "30 min",
    difficulty: "Moyen",
    completed: false,
    score: null,
  },
  {
    id: 3,
    title: "Problème complexe",
    type: "problem",
    duration: "45 min",
    difficulty: "Difficile",
    completed: false,
    score: null,
  },
  {
    id: 4,
    title: "Travail pratique",
    type: "project",
    duration: "1h 30min",
    difficulty: "Avancé",
    completed: false,
    score: null,
  },
];

const ExercisesList: React.FC<ExercisesListProps> = ({ courseId }) => {
  const [exercises] = useState(exercisesData);
  const { toast } = useToast();
  
  const startExercise = (exerciseId: number) => {
    toast({
      title: "Exercice démarré",
      description: "Bonne chance pour cet exercice !",
    });
  };
  
  const completeExercise = (exerciseId: number) => {
    toast({
      title: "Exercice validé !",
      description: "Félicitations, vous avez gagné des points !",
      variant: "default",
    });
  };

  return (
    <GlassCard>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Exercices disponibles</h2>
        <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
          {exercises.filter(ex => ex.completed).length}/{exercises.length} complétés
        </span>
      </div>
      
      <div className="space-y-6">
        {exercises.map((exercise) => (
          <div 
            key={exercise.id} 
            className={`bg-background/80 rounded-lg p-5 transition-all ${
              exercise.completed ? "border-l-4 border-green-mint" : ""
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${
                    exercise.completed ? "bg-green-500" : "bg-primary"
                  }`}></span>
                  <span className="text-sm text-muted-foreground uppercase">
                    {exercise.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-medium">{exercise.title}</h3>
                
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{exercise.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertCircle size={14} />
                    <span>{exercise.difficulty}</span>
                  </div>
                  {exercise.completed && (
                    <div className="flex items-center gap-1 text-green-500">
                      <BadgeCheck size={14} />
                      <span>Score: {exercise.score}%</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                {exercise.completed ? (
                  <>
                    <Button variant="outline" size="sm" className="text-green-500">
                      <CheckCircle size={16} className="mr-2" />
                      Revoir
                    </Button>
                  </>
                ) : (
                  <Button size="sm" onClick={() => startExercise(exercise.id)}>
                    <FileText size={16} className="mr-2" />
                    Commencer
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <div className="p-5 bg-primary/5 rounded-lg border border-dashed border-primary/30 text-center">
          <p className="text-muted-foreground mb-4">
            La complétion des exercices vous permet de valider vos connaissances et d'obtenir des points supplémentaires.
          </p>
          <Button variant="outline" onClick={() => completeExercise(2)}>
            Valider un exercice (démo)
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default ExercisesList;
