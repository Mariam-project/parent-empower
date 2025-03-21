import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import {
  CheckCircle,
  BookOpen,
  Users,
  FileText,
  BarChart2,
  Award,
  BrainCircuit,
  Bell,
  MessageSquare,
  Shield,
  ArrowRight,
  MapPin
} from "lucide-react";

const Index = () => {
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (solutionsRef.current) observer.observe(solutionsRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (solutionsRef.current) observer.unobserve(solutionsRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 bg-gradient-to-br from-blue-pastel/40 to-background"
        ref={heroRef}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-up">
              <span className="text-black">Apprendre ensemble,</span>
              <br />
              <span className="text-blue-500">réussir ensemble</span>
            </h1>
            <p
              className="text-muted-foreground text-lg mb-8 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Une plateforme éducative interactive et inclusive qui rapproche élèves,
              parents et enseignants dans les lycées d'Île-de-France pour une expérience d'apprentissage optimale.
            </p>
            <div
              className="space-x-4 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <Link to="/courses">
                <Button size="lg" className="bg-blue-pastel text-blue-800 hover:bg-blue-pastel/90">
                  Commencer maintenant <ArrowRight className="h-5 w-5 ml-1" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Explorer les cours
              </Button>
            </div>
            
            {/* Removed first logos section */}
          </div>
        </div>
      </section>

      {/* Solutions section */}
      <section className="pt-20 pb-16 md:py-24" ref={solutionsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
              Une solution pour chacun
            </h2>
            <p
              className="text-muted-foreground animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              EduNova s'adapte à tous les acteurs de l'éducation des lycées franciliens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard
              className="p-8 flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: "200ms" }}
              variant="primary"
            >
              <div className="h-14 w-14 rounded-full bg-blue-pastel/20 flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-5">
                Pour les élèves
              </h3>
              <ul className="space-y-3 mb-8 text-left w-full">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Cours interactifs engageants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Système de gamification motivant</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Fiches personnalisées par IA</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Certification pour Parcoursup</span>
                </li>
              </ul>
              <Link to="/dashboard" className="mt-auto w-full">
                <Button className="w-full bg-blue-pastel/30 text-blue-800 hover:bg-blue-pastel/40">
                  Espace élève
                </Button>
              </Link>
            </GlassCard>

            <GlassCard
              className="p-8 flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: "400ms" }}
              variant="primary"
            >
              <div className="h-14 w-14 rounded-full bg-yellow-soft/30 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-yellow-soft" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-5">
                Pour les parents
              </h3>
              <ul className="space-y-3 mb-8 text-left w-full">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-soft mr-2 flex-shrink-0" />
                  <span>Suivi simplifié des progrès</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-soft mr-2 flex-shrink-0" />
                  <span>Notifications positives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-soft mr-2 flex-shrink-0" />
                  <span>Guides pour comprendre le numérique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-soft mr-2 flex-shrink-0" />
                  <span>Communication avec les enseignants</span>
                </li>
              </ul>
              <Link to="/parent-dashboard" className="mt-auto w-full">
                <Button className="w-full bg-yellow-soft/30 text-orange-soft/90 hover:bg-yellow-soft/40">
                  Espace parent
                </Button>
              </Link>
            </GlassCard>

            <GlassCard
              className="p-8 flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: "600ms" }}
              variant="primary"
            >
              <div className="h-14 w-14 rounded-full bg-orange-soft/20 flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-orange-soft" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-5">
                Pour les professeurs
              </h3>
              <ul className="space-y-3 mb-8 text-left w-full">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-soft mr-2 flex-shrink-0" />
                  <span>Suivi des élèves en temps réel</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-soft mr-2 flex-shrink-0" />
                  <span>Création de ressources pédagogiques</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-soft mr-2 flex-shrink-0" />
                  <span>Communication facilitée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-soft mr-2 flex-shrink-0" />
                  <span>Statistiques d'apprentissage</span>
                </li>
              </ul>
              <Link to="/professor-dashboard" className="mt-auto w-full">
                <Button className="w-full bg-orange-soft/30 text-orange-soft hover:bg-orange-soft/40">
                  Espace professeur
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features Section - "Une plateforme complète pour tous" */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-blue-pastel/10" ref={featuresRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
              Une plateforme complète pour tous
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
              Découvrez les fonctionnalités qui transforment l'apprentissage en une expérience enrichissante 
              dans les lycées d'Île-de-France
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Cours interactifs */}
            <GlassCard 
              className="p-6 animate-fade-up"
              style={{ animationDelay: "200ms" }}
              variant="primary"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-blue-pastel/20 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Cours interactifs</h3>
              <p className="text-muted-foreground mb-4">
                Accédez à des vidéos, quiz et fiches personnalisables pour un apprentissage engageant et efficace.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Vidéos explicatives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Quiz interactifs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Fiches de révision</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 2 - Suivi des progrès */}
            <GlassCard 
              className="p-6 animate-fade-up"
              style={{ animationDelay: "300ms" }}
              variant="primary"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-yellow-soft/20 flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-yellow-soft" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Suivi des progrès</h3>
              <p className="text-muted-foreground mb-4">
                Visualisez vos progrès avec un carnet numérique et des tableaux de bord intuitifs.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Tableaux de bord personnalisés</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Statistiques détaillées</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Objectifs personnels</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 3 - Gamification */}
            <GlassCard 
              className="p-6 animate-fade-up"
              style={{ animationDelay: "400ms" }}
              variant="primary"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-orange-soft/20 flex items-center justify-center">
                <Award className="h-6 w-6 text-orange-soft" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Gamification</h3>
              <p className="text-muted-foreground mb-4">
                Restez motivé avec un système de défis, badges et récompenses pour valoriser vos efforts.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Badges de progression</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Défis hebdomadaires</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Certification Parcoursup</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 4 - Assistance IA */}
            <GlassCard 
              className="p-6 animate-fade-up"
              style={{ animationDelay: "500ms" }}
              variant="primary"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-blue-pastel/20 flex items-center justify-center">
                <BrainCircuit className="h-6 w-6 text-blue-pastel" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Assistance IA</h3>
              <p className="text-muted-foreground mb-4">
                Créez des fiches personnalisées assistées par l'intelligence artificielle pour optimiser vos révisions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-pastel mr-2 flex-shrink-0" />
                  <span className="text-sm">Fiches personnalisées</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-pastel mr-2 flex-shrink-0" />
                  <span className="text-sm">Suggestions intelligentes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-pastel mr-2 flex-shrink-0" />
                  <span className="text-sm">Adaptation au rythme d'apprentissage</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 5 - Pour les parents */}
            <GlassCard 
              className="p-6 animate-fade-up"
              style={{ animationDelay: "600ms" }}
              variant="primary"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-rose-soft/20 flex items-center justify-center">
                <Bell className="h-6 w-6 text-rose-soft" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Pour les parents</h3>
              <p className="text-muted-foreground mb-4">
                Suivez la progression de votre enfant et accédez à des ressources pour l'accompagner efficacement.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-rose-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Tableau de bord simplifié</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-rose-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Notifications positives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-rose-soft mr-2 flex-shrink-0" />
                  <span className="text-sm">Ressources pédagogiques</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 6 - Communication */}
            <GlassCard 
              className="p-6 animate-fade-up"
              style={{ animationDelay: "700ms" }}
              variant="primary"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-blue-light/20 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-blue-light" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Communication</h3>
              <p className="text-muted-foreground mb-4">
                Facilitez les échanges entre élèves, parents et enseignants dans les lycées d'Île-de-France.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-light mr-2 flex-shrink-0" />
                  <span className="text-sm">Messagerie intégrée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-light mr-2 flex-shrink-0" />
                  <span className="text-sm">Partage de ressources</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-light mr-2 flex-shrink-0" />
                  <span className="text-sm">Communication sécurisée</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section - "Prêt à transformer l'expérience éducative ?" */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-pastel/10 to-background" ref={ctaRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6 animate-fade-up">
              <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full shadow-sm">
                <MapPin className="h-4 w-4 text-idf-red" />
                <span className="text-sm font-medium">Disponible dans tous les lycées d'Île-de-France</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
              Prêt à transformer l'expérience éducative ?
            </h2>
            <p className="text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Rejoignez notre plateforme et découvrez une nouvelle façon d'apprendre, d'enseigner et 
              d'accompagner les lycéens d'Île-de-France vers la réussite.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" className="bg-blue-pastel text-blue-800 hover:bg-blue-pastel/90">
                Commencer gratuitement <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Nous contacter
              </Button>
            </div>
            
            {/* Removed second logos section */}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;
