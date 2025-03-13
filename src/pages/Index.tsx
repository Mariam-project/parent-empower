import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import {
  User,
  HeartHandshake,
  GraduationCap,
  CheckCircle,
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
        className="relative py-24 md:py-32 bg-gradient-to-br from-blue-light/30 to-background"
        ref={heroRef}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up">
                L'éducation réinventée pour le monde moderne
              </h1>
              <p
                className="text-muted-foreground text-lg mb-8 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                EduNova est la plateforme d'apprentissage en ligne qui vous
                offre des cours interactifs, un suivi personnalisé et une
                communauté engagée.
              </p>
              <div
                className="space-x-4 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <Link to="/courses">
                  <Button size="lg">Découvrir les cours</Button>
                </Link>
                <Button variant="outline" size="lg">
                  En savoir plus
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <img
                src="/hero-image.svg"
                alt="EduNova Hero Image"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions section */}
      <section className="pt-20 pb-16 md:py-24">
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
              className="flex flex-col justify-between animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div>
                <div className="h-14 w-14 rounded-full bg-blue-pastel flex items-center justify-center mb-6">
                  <User className="h-7 w-7 text-blue-pastel-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  Élèves
                </h3>
                <p className="text-muted-foreground mb-6">
                  Apprenez à votre rythme avec des cours interactifs, suivez vos
                  progrès et connectez-vous avec vos enseignants.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                    <span>Cours interactifs personnalisés</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                    <span>Suivi des progrès détaillé</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                    <span>Carnet d'apprentissage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                    <span>Exercices adaptatifs</span>
                  </li>
                </ul>
              </div>
              <Link to="/dashboard">
                <Button className="w-full">Espace élève</Button>
              </Link>
            </GlassCard>

            <GlassCard
              className="animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="h-14 w-14 rounded-full bg-green-mint flex items-center justify-center mb-6">
                <HeartHandshake className="h-7 w-7 text-green-mint-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Parents
              </h3>
              <p className="text-muted-foreground mb-6">
                Suivez les progrès de vos enfants, communiquez avec les
                enseignants et restez impliqués dans leur parcours éducatif.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                  <span>Suivi en temps réel</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                  <span>Messagerie avec les enseignants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                  <span>Calendrier des devoirs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                  <span>Notifications importantes</span>
                </li>
              </ul>
              <Link to="/parent-dashboard">
                <Button className="w-full">Espace parent</Button>
              </Link>
            </GlassCard>

            <GlassCard
              className="animate-fade-up"
              style={{ animationDelay: "600ms" }}
            >
              <div className="h-14 w-14 rounded-full bg-blue-light flex items-center justify-center mb-6">
                <GraduationCap className="h-7 w-7 text-blue-light-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Professeurs
              </h3>
              <p className="text-muted-foreground mb-6">
                Créez des cours engageants, suivez la progression de vos élèves
                et communiquez facilement avec les parents.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                  <span>Création de contenu pédagogique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                  <span>Suivi personnalisé des élèves</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                  <span>Communication simplifiée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-mint mr-2" />
                  <span>Statistiques d'apprentissage</span>
                </li>
              </ul>
              <Link to="/professor-dashboard">
                <Button className="w-full">Espace professeur</Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" ref={featuresRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
              Fonctionnalités clés
            </h2>
            <p
              className="text-muted-foreground animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Découvrez ce qui rend EduNova unique et comment nous pouvons vous
              aider à atteindre vos objectifs d'apprentissage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard
              className="p-6 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-blue-pastel flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-pastel-foreground"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 9.505a1.5 1.5 0 10-2.975-0.499 1.5 1.5 0 002.975 0.499zm8.25 0a1.5 1.5 0 10-2.975-0.499 1.5 1.5 0 002.975 0.499zm4.5 3.75a3 3 0 11-6 0 3 3 0 016 0zm-13.5 3a3 3 0 11-6 0 3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Cours interactifs
              </h3>
              <p className="text-muted-foreground">
                Des leçons engageantes avec des vidéos, des quiz et des
                exercices pratiques pour un apprentissage actif.
              </p>
            </GlassCard>

            <GlassCard
              className="p-6 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-green-mint flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-green-mint-foreground"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 3a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25a2.25 2.25 0 00-2.25-2.25H3.75zm8.25 10.5a7.5 7.5 0 00-7.5 7.5H6a9 9 0 019-9v1.5zm3 0a7.5 7.5 0 017.5 7.5H18a9 9 0 00-9-9v1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Suivi personnalisé
              </h3>
              <p className="text-muted-foreground">
                Un tableau de bord intuitif pour suivre vos progrès, identifier
                vos points forts et vos axes d'amélioration.
              </p>
            </GlassCard>

            <GlassCard
              className="p-6 animate-fade-up"
              style={{ animationDelay: "600ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-blue-light flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-light-foreground"
                >
                  <path d="M6 13.5a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0zm4.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-13.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0.375 2.25A0.75 0.75 0 011.125 1.5h21.75a0.75 0.75 0 010.75 0.75v19.5a0.75 0.75 0 01-0.75 0.75H1.125a0.75 0.75 0 01-0.75-0.75V2.25zM2.25 4.5v15h19.5V4.5H2.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Communauté engagée
              </h3>
              <p className="text-muted-foreground">
                Rejoignez des forums de discussion, échangez avec d'autres
                apprenants et collaborez sur des projets passionnants.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-secondary"
        ref={ctaRef}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-up">
                Prêt à transformer votre façon d'apprendre ?
              </h2>
              <p
                className="text-muted-foreground text-lg mb-8 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                Inscrivez-vous dès aujourd'hui et commencez à explorer un monde
                de connaissances illimitées.
              </p>
              <div
                className="space-x-4 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <Link to="/courses">
                  <Button size="lg">Commencer maintenant</Button>
                </Link>
                <Button variant="outline" size="lg">
                  Découvrir EduNova
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in hidden md:block">
              <img
                src="/cta-image.svg"
                alt="EduNova CTA Image"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
