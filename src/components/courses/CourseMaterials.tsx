
import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { 
  FileText, 
  Download, 
  Video, 
  Link as LinkIcon, 
  BookOpen,
  FilePlus2,
  Play,
  ExternalLink as ExternalLinkIcon,
  Wand2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CourseMaterialsProps {
  courseId: number;
}

// Mock materials data
const materialsByType = {
  documents: [
    { id: 1, title: "Support de cours complet", type: "pdf", size: "2.4 MB" },
    { id: 2, title: "Résumé des concepts clés", type: "pdf", size: "1.1 MB" },
    { id: 3, title: "Fiche de révision", type: "docx", size: "850 KB" },
  ],
  videos: [
    { id: 1, title: "Introduction au chapitre", duration: "12:45" },
    { id: 2, title: "Démonstration pratique", duration: "24:30" },
  ],
  links: [
    { id: 1, title: "Ressource complémentaire", url: "#" },
    { id: 2, title: "Article scientifique", url: "#" },
  ]
};

const CourseMaterials: React.FC<CourseMaterialsProps> = ({ courseId }) => {
  const { toast } = useToast();
  
  const downloadMaterial = (materialId: number, title: string) => {
    toast({
      title: "Téléchargement démarré",
      description: `${title} sera disponible dans quelques instants.`,
    });
  };
  
  const openVideo = (materialId: number, title: string) => {
    toast({
      title: "Vidéo en cours de chargement",
      description: `${title} va s'ouvrir dans un lecteur.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Documents section */}
      <GlassCard>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <FileText size={18} />
          </div>
          <h2 className="text-xl font-medium">Documents</h2>
        </div>
        
        <div className="space-y-3">
          {materialsByType.documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-primary/5">
                  <FileText size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">{doc.title}</p>
                  <p className="text-xs text-muted-foreground">{doc.type.toUpperCase()} • {doc.size}</p>
                </div>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => downloadMaterial(doc.id, doc.title)}
              >
                <Download size={16} />
              </Button>
            </div>
          ))}
        </div>
      </GlassCard>
      
      {/* Videos section */}
      <GlassCard>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Video size={18} />
          </div>
          <h2 className="text-xl font-medium">Vidéos</h2>
        </div>
        
        <div className="space-y-3">
          {materialsByType.videos.map((video) => (
            <div key={video.id} className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-primary/5">
                  <Video size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">{video.title}</p>
                  <p className="text-xs text-muted-foreground">Durée: {video.duration}</p>
                </div>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => openVideo(video.id, video.title)}
              >
                <Play size={16} />
              </Button>
            </div>
          ))}
        </div>
      </GlassCard>
      
      {/* Links section */}
      <GlassCard>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <LinkIcon size={18} />
          </div>
          <h2 className="text-xl font-medium">Liens utiles</h2>
        </div>
        
        <div className="space-y-3">
          {materialsByType.links.map((link) => (
            <div key={link.id} className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-primary/5">
                  <LinkIcon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">{link.title}</p>
                  <p className="text-xs text-muted-foreground">Ressource externe</p>
                </div>
              </div>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="ghost">
                  <ExternalLinkIcon size={16} />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </GlassCard>
      
      {/* AI Generated content */}
      <GlassCard className="border border-dashed border-primary/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <FilePlus2 size={18} />
          </div>
          <h2 className="text-xl font-medium">Générer une ressource personnalisée</h2>
        </div>
        
        <p className="text-muted-foreground mb-4">
          Utilisez l'IA pour créer une fiche de révision ou un résumé adapté à votre style d'apprentissage.
        </p>
        
        <div className="flex gap-2">
          <Button>
            <BookOpen size={16} className="mr-2" />
            Générer une fiche
          </Button>
          <Button variant="outline">
            <Wand2 size={16} className="mr-2" />
            Résumer le cours
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default CourseMaterials;
