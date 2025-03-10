
import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BookCopy, 
  FileText, 
  Video, 
  Link as LinkIcon, 
  Upload, 
  Plus, 
  Sparkles,
  CheckSquare,
  Book,
  PenTool,
  BrainCircuit,
  Image as ImageIcon
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Mock resources
const existingResources = [
  {
    id: 1,
    title: "Introduction aux fonctions dérivées",
    type: "document",
    status: "published",
    createdAt: "Il y a 2 jours",
    subject: "Mathématiques",
    aiAssisted: true
  },
  {
    id: 2,
    title: "Exercices sur les polynômes",
    type: "exercise",
    status: "published",
    createdAt: "Il y a 1 semaine",
    subject: "Mathématiques",
    aiAssisted: false
  },
  {
    id: 3,
    title: "Cours sur la poésie romantique",
    type: "video",
    status: "draft",
    createdAt: "Aujourd'hui",
    subject: "Français",
    aiAssisted: true
  },
  {
    id: 4,
    title: "Quiz sur les forces en physique",
    type: "quiz",
    status: "published",
    createdAt: "Il y a 3 jours",
    subject: "Physique-Chimie",
    aiAssisted: true
  }
];

const ResourceCreator = () => {
  const [resourceType, setResourceType] = useState("document");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [currentTab, setCurrentTab] = useState("create");
  const { toast } = useToast();
  
  const handleCreateResource = () => {
    toast({
      title: "Ressource créée avec succès",
      description: `La ressource "${title}" a été créée et sauvegardée.`
    });
    
    // Reset form
    setTitle("");
    setDescription("");
    setAiPrompt("");
  };
  
  const handleGenerateWithAI = () => {
    if (!aiPrompt) {
      toast({
        title: "Veuillez saisir une demande",
        description: "Entrez une description de ce que vous souhaitez générer.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate AI generation
    toast({
      title: "Génération en cours...",
      description: "L'IA est en train de générer votre ressource pédagogique."
    });
    
    // After "generation" set some example values
    setTimeout(() => {
      setTitle("Les mouvements littéraires du XIXe siècle");
      setDescription("Ce document présente les principaux mouvements littéraires du XIXe siècle, notamment le romantisme, le réalisme et le naturalisme. Il aborde les caractéristiques de chaque mouvement et cite les auteurs majeurs.");
      
      toast({
        title: "Ressource générée",
        description: "La ressource a été générée avec succès. Vous pouvez maintenant la modifier avant de la créer."
      });
    }, 2000);
  };

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5 text-blue-pastel" />;
      case "video":
        return <Video className="h-5 w-5 text-purple-light" />;
      case "exercise":
        return <CheckSquare className="h-5 w-5 text-green-mint" />;
      case "quiz":
        return <PenTool className="h-5 w-5 text-yellow-soft" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <GlassCard className="p-2">
          <TabsList className="grid grid-cols-2 gap-2 bg-transparent w-full">
            <TabsTrigger 
              value="create" 
              className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
            >
              <Plus size={18} />
              <span>Créer une ressource</span>
            </TabsTrigger>
            <TabsTrigger 
              value="existing" 
              className="flex items-center gap-2 bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white shadow-button"
            >
              <BookCopy size={18} />
              <span>Mes ressources</span>
            </TabsTrigger>
          </TabsList>
        </GlassCard>
        
        <TabsContent value="create" className="m-0 space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold mb-6">Créer une nouvelle ressource pédagogique</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Type de ressource</label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant={resourceType === "document" ? "default" : "gray"}
                      className={`shadow-button justify-start ${resourceType === "document" ? "" : "bg-gray-100"}`}
                      onClick={() => setResourceType("document")}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Document
                    </Button>
                    <Button
                      type="button"
                      variant={resourceType === "video" ? "default" : "gray"}
                      className={`shadow-button justify-start ${resourceType === "video" ? "" : "bg-gray-100"}`}
                      onClick={() => setResourceType("video")}
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Vidéo
                    </Button>
                    <Button
                      type="button"
                      variant={resourceType === "exercise" ? "default" : "gray"}
                      className={`shadow-button justify-start ${resourceType === "exercise" ? "" : "bg-gray-100"}`}
                      onClick={() => setResourceType("exercise")}
                    >
                      <CheckSquare className="h-4 w-4 mr-2" />
                      Exercices
                    </Button>
                    <Button
                      type="button"
                      variant={resourceType === "quiz" ? "default" : "gray"}
                      className={`shadow-button justify-start ${resourceType === "quiz" ? "" : "bg-gray-100"}`}
                      onClick={() => setResourceType("quiz")}
                    >
                      <PenTool className="h-4 w-4 mr-2" />
                      Quiz
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">Titre</label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titre de la ressource"
                    className="shadow-button"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Matière</label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ex: Mathématiques, Français, Histoire..."
                    className="shadow-button"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description du contenu..."
                    className="min-h-[120px] shadow-button"
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button variant="gray" className="shadow-button">
                    Enregistrer en brouillon
                  </Button>
                  <Button 
                    disabled={!title || !description} 
                    onClick={handleCreateResource}
                    className="shadow-button"
                  >
                    Créer la ressource
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-border/30">
                <h3 className="flex items-center text-lg font-medium mb-4">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" />
                  Génération assistée par IA
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Laissez l'IA vous aider à créer rapidement des ressources pédagogiques de qualité en décrivant simplement ce que vous souhaitez.
                </p>
                
                <div className="mb-4">
                  <label htmlFor="ai-prompt" className="block text-sm font-medium mb-2">
                    Décrivez la ressource à générer
                  </label>
                  <Textarea
                    id="ai-prompt"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Ex: Créer un document sur les mouvements littéraires du XIXe siècle avec les principales caractéristiques de chaque mouvement."
                    className="min-h-[120px] shadow-button"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    onClick={handleGenerateWithAI}
                    variant="default"
                    className="shadow-button"
                  >
                    <BrainCircuit className="h-4 w-4 mr-2" />
                    Générer avec l'IA
                  </Button>
                  
                  <Button
                    variant="gray"
                    className="shadow-button"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Importer un fichier
                  </Button>
                </div>
                
                <div className="mt-6 border-t border-border/30 pt-4">
                  <h4 className="text-sm font-medium mb-3">Suggestions de l'IA</h4>
                  <div className="space-y-2">
                    <Button 
                      variant="gray" 
                      className="text-xs justify-start w-full shadow-button"
                      onClick={() => setAiPrompt("Créer un cours interactif sur les équations du second degré avec 10 exercices d'application progressifs.")}
                    >
                      <Book className="h-3 w-3 mr-2" />
                      Cours interactif sur les équations du second degré
                    </Button>
                    <Button 
                      variant="gray" 
                      className="text-xs justify-start w-full shadow-button"
                      onClick={() => setAiPrompt("Générer un quiz de 15 questions sur la Seconde Guerre mondiale avec des images et des réponses détaillées.")}
                    >
                      <PenTool className="h-3 w-3 mr-2" />
                      Quiz sur la Seconde Guerre mondiale
                    </Button>
                    <Button 
                      variant="gray" 
                      className="text-xs justify-start w-full shadow-button"
                      onClick={() => setAiPrompt("Créer une fiche récapitulative sur les fonctions dérivées avec les formules essentielles et des exemples d'application.")}
                    >
                      <FileText className="h-3 w-3 mr-2" />
                      Fiche récapitulative sur les dérivées
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </TabsContent>
        
        <TabsContent value="existing" className="m-0">
          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Mes ressources pédagogiques</h2>
              <Button className="shadow-button">
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle ressource
              </Button>
            </div>
            
            <div className="space-y-4">
              {existingResources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="bg-white rounded-lg border border-border/30 p-4 flex items-center justify-between shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center">
                      {getResourceTypeIcon(resource.type)}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">{resource.title}</h3>
                        {resource.aiAssisted && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                            <Sparkles className="h-3 w-3 mr-1" />
                            IA
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground gap-3">
                        <span className="capitalize">{resource.type}</span>
                        <span>•</span>
                        <span>{resource.subject}</span>
                        <span>•</span>
                        <span>{resource.createdAt}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-sm px-2 py-1 rounded-full bg-gray-100">
                      {resource.status === "published" ? (
                        <span className="text-green-mint">Publié</span>
                      ) : (
                        <span className="text-yellow-soft">Brouillon</span>
                      )}
                    </div>
                    <Button variant="gray" size="sm" className="shadow-button">
                      <PenTool className="h-4 w-4" />
                    </Button>
                    <Button variant="gray" size="sm" className="shadow-button">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceCreator;
