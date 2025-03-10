
import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { 
  Brain,
  Sparkles,
  FileText,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CourseMaterialsProps {
  courseId: number;
}

const CourseMaterials: React.FC<CourseMaterialsProps> = ({ courseId }) => {
  const { toast } = useToast();
  
  const generateStudyMaterial = (type: string) => {
    toast({
      title: "Génération en cours",
      description: `Votre ${type} personnalisée est en cours de création...`,
    });
  };

  return (
    <div className="space-y-6">
      {/* AI Study Assistant Card */}
      <GlassCard className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
            <Brain size={24} className="text-blue-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Assistant IA de révision</h2>
            <p className="text-sm text-muted-foreground">
              Créez des fiches de révision personnalisées et optimisez votre apprentissage
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600"
            onClick={() => generateStudyMaterial('fiche de révision')}
          >
            <FileText size={16} className="mr-2" />
            Créer une fiche de révision
          </Button>
          
          <Button 
            variant="outline"
            className="w-full border-blue-200 hover:bg-blue-50"
            onClick={() => generateStudyMaterial('synthèse')}
          >
            <Brain size={16} className="mr-2" />
            Générer une synthèse
          </Button>
        </div>
      </GlassCard>
      
      {/* AI Features Card */}
      <GlassCard className="bg-gradient-to-br from-purple-50 to-rose-50 border-purple-200/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
            <Sparkles size={24} className="text-purple-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Fonctionnalités intelligentes</h2>
            <p className="text-sm text-muted-foreground">
              Exploitez la puissance de l'IA pour améliorer votre apprentissage
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white/60 rounded-xl border border-purple-100">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Play size={16} className="text-purple-500" />
              Quiz adaptatif
            </h3>
            <p className="text-sm text-muted-foreground">
              Questions générées en fonction de votre niveau
            </p>
          </div>
          
          <div className="p-4 bg-white/60 rounded-xl border border-purple-100">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Brain size={16} className="text-purple-500" />
              Révisions intelligentes
            </h3>
            <p className="text-sm text-muted-foreground">
              Recommandations basées sur vos performances
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default CourseMaterials;
