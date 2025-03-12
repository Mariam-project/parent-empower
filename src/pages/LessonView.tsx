
import React from "react";
import { useParams, Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, BookOpen, PenTool, Bookmark, ChevronDown, ChevronRight, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coursesData } from "@/data/coursesData";
import { useToast } from "@/hooks/use-toast";
import MathContent from "@/components/courses/MathContent";

const LessonView = () => {
  const { courseId, lessonId } = useParams();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = React.useState("content");
  const [expandedSection, setExpandedSection] = React.useState("definition");
  
  // Find the course data
  const course = coursesData.find(c => c.id.toString() === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <GlassCard>
          <h2 className="text-xl font-medium mb-4">Cours non trouvé</h2>
          <p className="mb-4">Le cours que vous cherchez n'existe pas ou a été déplacé.</p>
          <Link to="/courses">
            <Button className="shadow-md hover:shadow-lg">
              <ArrowLeft size={16} className="mr-2" />
              Retour aux cours
            </Button>
          </Link>
        </GlassCard>
      </div>
    );
  }

  const handleMarkAsRead = () => {
    toast({
      title: "Leçon terminée !",
      description: "Cette leçon a été marquée comme terminée.",
    });
  };
  
  const handleBookmarkSection = () => {
    toast({
      title: "Section enregistrée",
      description: "Cette section a été ajoutée à vos favoris.",
    });
  };
  
  const handleToggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with navigation */}
        <div className="mb-6 flex items-center">
          <Link to={`/course/${courseId}`} className="text-muted-foreground hover:text-foreground transition-colors mr-4">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl md:text-3xl font-display font-bold">{course.title}</h1>
        </div>
        
        {/* Lesson content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <GlassCard className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Leçon 1: Introduction aux fonctions dérivées</h2>
              <Button onClick={handleMarkAsRead} variant="outline" className="flex items-center gap-2 shadow-sm hover:shadow-md">
                <CheckCircle size={16} />
                <span>Marquer comme lue</span>
              </Button>
            </div>
            
            <div className="space-y-8">
              {/* Introduction section */}
              <div className="p-4 rounded-lg bg-blue-pastel-light/10 border border-blue-pastel-light/30">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggleSection("introduction")}
                >
                  <h3 className="text-lg font-medium">Introduction</h3>
                  {expandedSection === "introduction" ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
                
                {expandedSection === "introduction" && (
                  <div className="mt-4 space-y-3">
                    <p>
                      La dérivation est un concept fondamental en analyse mathématique qui nous permet de comprendre 
                      comment les fonctions varient. Cette notion est au cœur du calcul différentiel et possède de 
                      nombreuses applications dans divers domaines scientifiques, notamment en physique et en économie.
                    </p>
                    <p>
                      Dans cette leçon, nous allons découvrir les bases de la dérivation, comprendre sa signification 
                      géométrique et apprendre à calculer les dérivées de fonctions élémentaires.
                    </p>
                  </div>
                )}
              </div>
              
              {/* Definition section */}
              <div className="p-4 rounded-lg bg-green-mint/10 border border-green-mint/30">
                <div className="flex justify-between items-center cursor-pointer mb-2" onClick={() => handleToggleSection("definition")}>
                  <h3 className="text-lg font-medium">Définition et interprétation géométrique</h3>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmarkSection();
                      }}
                    >
                      <Bookmark size={16} />
                    </Button>
                    {expandedSection === "definition" ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedSection === "definition" && (
                  <div className="space-y-4">
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h4 className="font-medium mb-2">Définition de la dérivée</h4>
                      <p className="mb-3">
                        Soit f une fonction définie sur un intervalle I. La dérivée de f au point x₀ ∈ I, notée f&apos;(x₀), 
                        est définie comme la limite du taux de variation de f au voisinage de x₀ lorsque l&apos;accroissement 
                        de x tend vers 0.
                      </p>
                      
                      <div className="bg-gray-50 p-3 rounded-md mb-3 font-mono text-center">
                        <MathContent formula="f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}" />
                      </div>
                      
                      <p>
                        Si cette limite existe, on dit que f est dérivable au point x₀. Si f est dérivable en tout point 
                        d&apos;un intervalle I, alors la fonction x ↦ f&apos;(x) définie sur I est appelée la fonction dérivée de f.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h4 className="font-medium mb-2">Interprétation géométrique</h4>
                      <p className="mb-3">
                        Géométriquement, la dérivée f&apos;(x₀) représente la pente de la tangente à la courbe 
                        représentative de f au point de coordonnées (x₀, f(x₀)).
                      </p>
                      
                      <div className="aspect-video mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          [Illustration de la tangente à une courbe]
                        </div>
                      </div>
                      
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Si f&apos;(x₀) &gt; 0, la fonction est strictement croissante au voisinage de x₀.</li>
                        <li>Si f&apos;(x₀) &lt; 0, la fonction est strictement décroissante au voisinage de x₀.</li>
                        <li>Si f&apos;(x₀) = 0, la tangente à la courbe au point (x₀, f(x₀)) est horizontale.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Rules section */}
              <div className="p-4 rounded-lg bg-yellow-soft/10 border border-yellow-soft/30">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggleSection("rules")}
                >
                  <h3 className="text-lg font-medium">Règles de dérivation</h3>
                  {expandedSection === "rules" ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
                
                {expandedSection === "rules" && (
                  <div className="mt-4 space-y-4">
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h4 className="font-medium mb-2">Dérivées de fonctions élémentaires</h4>
                      <div className="space-y-2">
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded flex items-center">
                          <div className="w-32 font-medium">Constante:</div>
                          <MathContent formula="(C)' = 0" />
                        </div>
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded flex items-center">
                          <div className="w-32 font-medium">Fonction identité:</div>
                          <MathContent formula="(x)' = 1" />
                        </div>
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded flex items-center">
                          <div className="w-32 font-medium">Fonction puissance:</div>
                          <MathContent formula="(x^n)' = nx^{n-1}" />
                        </div>
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded flex items-center">
                          <div className="w-32 font-medium">Fonction exponentielle:</div>
                          <MathContent formula="(e^x)' = e^x" />
                        </div>
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded flex items-center">
                          <div className="w-32 font-medium">Fonction logarithme:</div>
                          <MathContent formula="(\\ln x)' = \\frac{1}{x}" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h4 className="font-medium mb-2">Opérations sur les dérivées</h4>
                      <p className="mb-3">
                        Si u et v sont deux fonctions dérivables, et si α et β sont deux constantes réelles, alors:
                      </p>
                      
                      <div className="space-y-2">
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded">
                          <div className="font-medium mb-1">Linéarité:</div>
                          <MathContent formula="(\\alpha u + \\beta v)' = \\alpha u' + \\beta v'" />
                        </div>
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded">
                          <div className="font-medium mb-1">Produit:</div>
                          <MathContent formula="(u \\times v)' = u' \\times v + u \\times v'" />
                        </div>
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded">
                          <div className="font-medium mb-1">Quotient:</div>
                          <MathContent formula="\\left(\\frac{u}{v}\\right)' = \\frac{u' \\times v - u \\times v'}{v^2}" />
                        </div>
                        <div className="p-2 border border-dashed border-yellow-soft/50 rounded">
                          <div className="font-medium mb-1">Composée:</div>
                          <MathContent formula="(u \\circ v)' = (u' \\circ v) \\times v'" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Examples section */}
              <div className="p-4 rounded-lg bg-purple-light/10 border border-purple-light/30">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggleSection("examples")}
                >
                  <h3 className="text-lg font-medium">Exemples et applications</h3>
                  {expandedSection === "examples" ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
                
                {expandedSection === "examples" && (
                  <div className="mt-4 space-y-4">
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h4 className="font-medium mb-2">Exemple 1: Dériver une fonction polynomiale</h4>
                      <p className="mb-2">
                        Calculons la dérivée de la fonction f définie par f(x) = 3x² - 2x + 4.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-md mb-3">
                        <p className="font-medium">Solution:</p>
                        <div className="space-y-1">
                          <p>f(x) = 3x² - 2x + 4</p>
                          <p>f&apos;(x) = (3x²)&apos; - (2x)&apos; + (4)&apos;</p>
                          <p>f&apos;(x) = 3(x²)&apos; - 2(x)&apos; + 0</p>
                          <p>f&apos;(x) = 3 × 2x - 2 × 1</p>
                          <p>f&apos;(x) = 6x - 2</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h4 className="font-medium mb-2">Exemple 2: Dériver un produit de fonctions</h4>
                      <p className="mb-2">
                        Calculons la dérivée de la fonction g définie par g(x) = (x² + 1) × (3x - 5).
                      </p>
                      <div className="bg-gray-50 p-3 rounded-md mb-3">
                        <p className="font-medium">Solution:</p>
                        <div className="space-y-1">
                          <p>Posons u(x) = x² + 1 et v(x) = 3x - 5.</p>
                          <p>g(x) = u(x) × v(x)</p>
                          <p>g&apos;(x) = u&apos;(x) × v(x) + u(x) × v&apos;(x)</p>
                          <p>u&apos;(x) = 2x et v&apos;(x) = 3</p>
                          <p>g&apos;(x) = 2x × (3x - 5) + (x² + 1) × 3</p>
                          <p>g&apos;(x) = 6x² - 10x + 3x² + 3</p>
                          <p>g&apos;(x) = 9x² - 10x + 3</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/60 rounded-lg">
                      <h4 className="font-medium mb-2">Exemple 3: Application à l&apos;étude des variations</h4>
                      <p className="mb-2">
                        Étudions les variations de la fonction h définie par h(x) = x³ - 3x² + 2 sur ℝ.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-md mb-3">
                        <p className="font-medium">Solution:</p>
                        <div className="space-y-1">
                          <p>h&apos;(x) = 3x² - 6x = 3x(x - 2)</p>
                          <p>h&apos;(x) = 0 ⟺ x = 0 ou x = 2</p>
                          <p>h&apos;(x) &gt; 0 ⟺ x &lt; 0 ou x &gt; 2</p>
                          <p>h&apos;(x) &lt; 0 ⟺ 0 &lt; x &lt; 2</p>
                        </div>
                        <p className="mt-2">Tableau de variations:</p>
                        <div className="mt-1 border border-gray-300 rounded p-2 text-center">
                          [Tableau de variations de h]
                        </div>
                        <p className="mt-2">
                          La fonction h admet un maximum local en x = 0 et un minimum local en x = 2.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Summary section */}
              <div className="p-4 rounded-lg bg-blue-pastel-light/10 border border-blue-pastel-light/30">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggleSection("summary")}
                >
                  <h3 className="text-lg font-medium">Résumé et points clés</h3>
                  {expandedSection === "summary" ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
                
                {expandedSection === "summary" && (
                  <div className="mt-4 space-y-3">
                    <p>Dans cette leçon, nous avons vu:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>La définition de la dérivée d&apos;une fonction en un point</li>
                      <li>L&apos;interprétation géométrique de la dérivée comme pente de la tangente</li>
                      <li>Les dérivées des fonctions élémentaires (constante, identité, puissance, exponentielle, logarithme)</li>
                      <li>Les règles de dérivation pour les opérations sur les fonctions (somme, produit, quotient, composée)</li>
                      <li>Des exemples de calcul de dérivées et d&apos;application à l&apos;étude des variations</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <GlassCard>
              <h3 className="text-lg font-medium mb-4">Progression</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progression de la leçon</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                
                <div className="py-3 border-t border-border/30">
                  <h4 className="font-medium mb-2">Sections à compléter</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                        <XCircle size={12} className="text-gray-400" />
                      </div>
                      <span>Introduction</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                        <XCircle size={12} className="text-gray-400" />
                      </div>
                      <span>Définition et interprétation</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                        <XCircle size={12} className="text-gray-400" />
                      </div>
                      <span>Règles de dérivation</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                        <XCircle size={12} className="text-gray-400" />
                      </div>
                      <span>Exemples et applications</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                        <XCircle size={12} className="text-gray-400" />
                      </div>
                      <span>Résumé et points clés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard>
              <h3 className="text-lg font-medium mb-4">Actions</h3>
              <div className="space-y-3">
                <Button className="w-full shadow-md hover:shadow-lg">
                  <BookOpen size={16} className="mr-2" />
                  Continuer la leçon suivante
                </Button>
                <Button variant="outline" className="w-full shadow-sm hover:shadow-md">
                  <PenTool size={16} className="mr-2" />
                  Faire les exercices
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;
