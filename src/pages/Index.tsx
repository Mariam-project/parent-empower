
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import {
  CheckCircle,
  BookOpen,
  Users,
  FileText
} from "lucide-react";

const Index = () => {
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);

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

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (solutionsRef.current) observer.unobserve(solutionsRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 bg-gradient-to-br from-blue-light/30 to-background"
        ref={heroRef}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 text-center">
              <span className="bg-blue-pastel/30 text-blue-pastel-foreground px-4 py-1.5 rounded-full text-sm inline-block">
                Nouvelle plateforme éducative
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-up">
              <span className="text-black">Apprendre ensemble,</span>
              <br />
              <span className="text-blue-pastel">réussir ensemble</span>
            </h1>
            <p
              className="text-muted-foreground text-lg mb-8 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Une plateforme éducative interactive et inclusive qui rapproche élèves,
              parents et enseignants pour une expérience d'apprentissage optimale.
            </p>
            <div
              className="space-x-4 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <Link to="/courses">
                <Button size="lg" className="bg-blue-pastel hover:bg-blue-pastel/90">
                  Commencer maintenant <span className="ml-1">→</span>
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Explorer les cours
              </Button>
            </div>
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
              EduNova s'adapte à tous les acteurs de l'éducation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard
              className="p-8 flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="h-14 w-14 rounded-full bg-blue-pastel/20 flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-blue-pastel" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-5">
                Pour les élèves
              </h3>
              <ul className="space-y-3 mb-8 text-left w-full">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Cours interactifs engageants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Système de gamification motivant</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Fiches personnalisées par IA</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Certification pour Parcoursup</span>
                </li>
              </ul>
              <Link to="/dashboard" className="mt-auto w-full">
                <Button className="w-full bg-blue-pastel/30 text-blue-pastel-foreground hover:bg-blue-pastel/40">
                  Espace élève
                </Button>
              </Link>
            </GlassCard>

            <GlassCard
              className="p-8 flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="h-14 w-14 rounded-full bg-blue-pastel/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-blue-pastel" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-5">
                Pour les parents
              </h3>
              <ul className="space-y-3 mb-8 text-left w-full">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Suivi simplifié des progrès</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Notifications positives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Guides pour comprendre le numérique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Communication avec les enseignants</span>
                </li>
              </ul>
              <Link to="/parent-dashboard" className="mt-auto w-full">
                <Button className="w-full bg-blue-pastel/30 text-blue-pastel-foreground hover:bg-blue-pastel/40">
                  Espace parent
                </Button>
              </Link>
            </GlassCard>

            <GlassCard
              className="p-8 flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: "600ms" }}
            >
              <div className="h-14 w-14 rounded-full bg-blue-pastel/20 flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-blue-pastel" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-5">
                Pour les professeurs
              </h3>
              <ul className="space-y-3 mb-8 text-left w-full">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Suivi des élèves en temps réel</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Création de ressources pédagogiques</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Communication facilitée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-pastel mr-2 flex-shrink-0" />
                  <span>Statistiques d'apprentissage</span>
                </li>
              </ul>
              <Link to="/professor-dashboard" className="mt-auto w-full">
                <Button className="w-full bg-blue-pastel/30 text-blue-pastel-foreground hover:bg-blue-pastel/40">
                  Espace professeur
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
