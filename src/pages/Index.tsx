
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import { 
  BookOpen, 
  Users, 
  Award, 
  Brain, 
  Check, 
  ArrowRight,
  BarChart3,
  Bell,
  BookOpenCheck,
  FileText,
  Lightbulb,
  ShieldCheck
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 animate-fade-in">
              <span>Nouvelle plateforme éducative</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight animate-fade-up">
              Apprendre ensemble, <br />
              <span className="text-primary">réussir ensemble</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: "100ms" }}>
              Une plateforme éducative interactive et inclusive qui rapproche élèves, parents et enseignants pour une expérience d'apprentissage optimale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Link to="/dashboard">
                <Button size="lg" className="button-primary">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="lg" className="button-secondary">
                  Explorer les cours
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-20 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>
      
      {/* User Types Section - MOVED HIGHER */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 animate-fade-up">
              Une solution pour chacun
            </h2>
            <p className="text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              ParentEmpower s'adapte à tous les acteurs de l'éducation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students */}
            <GlassCard className="text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BookOpenCheck size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Pour les élèves</h3>
              <ul className="space-y-3 text-left mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Cours interactifs engageants</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Système de gamification motivant</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Fiches personnalisées par IA</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Certification pour Parcoursup</span>
                </li>
              </ul>
              <Link to="/dashboard">
                <Button className="w-full">Espace élève</Button>
              </Link>
            </GlassCard>
            
            {/* Parents */}
            <GlassCard className="text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Pour les parents</h3>
              <ul className="space-y-3 text-left mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Suivi simplifié des progrès</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Notifications positives</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Guides pour comprendre le numérique</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Communication avec les enseignants</span>
                </li>
              </ul>
              <Link to="/parent-dashboard">
                <Button className="w-full">Espace parent</Button>
              </Link>
            </GlassCard>
            
            {/* Teachers */}
            <GlassCard className="text-center animate-fade-up" style={{ animationDelay: "400ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Pour les professeurs</h3>
              <ul className="space-y-3 text-left mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Suivi des élèves en temps réel</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Création de ressources pédagogiques</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Communication facilitée</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Statistiques d'apprentissage</span>
                </li>
              </ul>
              <Link to="/teacher-dashboard">
                <Button className="w-full">Espace professeur</Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Features Section - MOVED LOWER */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 animate-fade-up">
              Une plateforme complète pour tous
            </h2>
            <p className="text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              Découvrez les fonctionnalités qui transforment l'apprentissage en une expérience enrichissante
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <GlassCard className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Cours interactifs</h3>
              <p className="text-muted-foreground mb-4">
                Accédez à des vidéos, quiz et fiches personnalisables pour un apprentissage engageant et efficace.
              </p>
              <ul className="space-y-2">
                {["Vidéos explicatives", "Quiz interactifs", "Fiches de révision"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            
            {/* Feature 2 */}
            <GlassCard className="animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Suivi des progrès</h3>
              <p className="text-muted-foreground mb-4">
                Visualisez vos progrès avec un carnet numérique et des tableaux de bord intuitifs.
              </p>
              <ul className="space-y-2">
                {["Tableaux de bord personnalisés", "Statistiques détaillées", "Objectifs personnels"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            
            {/* Feature 3 */}
            <GlassCard className="animate-fade-up" style={{ animationDelay: "400ms" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Gamification</h3>
              <p className="text-muted-foreground mb-4">
                Restez motivé avec un système de défis, badges et récompenses pour valoriser vos efforts.
              </p>
              <ul className="space-y-2">
                {["Badges de progression", "Défis hebdomadaires", "Certification Parcoursup"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            
            {/* Feature 4 */}
            <GlassCard className="animate-fade-up" style={{ animationDelay: "500ms" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Assistance IA</h3>
              <p className="text-muted-foreground mb-4">
                Créez des fiches personnalisées assistées par l'intelligence artificielle pour optimiser vos révisions.
              </p>
              <ul className="space-y-2">
                {["Fiches personnalisées", "Suggestions intelligentes", "Adaptation au rythme"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            
            {/* Feature 5 */}
            <GlassCard className="animate-fade-up" style={{ animationDelay: "600ms" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-6">
                <Bell size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Pour les parents</h3>
              <p className="text-muted-foreground mb-4">
                Suivez la progression de votre enfant et accédez à des ressources pour l'accompagner efficacement.
              </p>
              <ul className="space-y-2">
                {["Tableau de bord simplifié", "Notifications positives", "Guides pédagogiques"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            
            {/* Feature 6 */}
            <GlassCard className="animate-fade-up" style={{ animationDelay: "700ms" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Communication</h3>
              <p className="text-muted-foreground mb-4">
                Facilitez les échanges entre élèves, parents et enseignants pour un suivi optimal.
              </p>
              <ul className="space-y-2">
                {["Messagerie intégrée", "Partage de ressources", "Retours personnalisés"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 animate-fade-up">
              Prêt à transformer l'expérience éducative ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Rejoignez notre plateforme et découvrez une nouvelle façon d'apprendre, 
              d'enseigner et d'accompagner les lycéens vers la réussite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Link to="/dashboard">
                <Button size="lg" className="button-primary">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="button-secondary">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-0">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Index;
