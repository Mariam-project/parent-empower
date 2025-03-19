
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  BookOpen,
  Award,
  Users,
  ShieldCheck
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display font-bold text-xl text-primary">
                EduNova
              </span>
            </Link>
            <p className="text-muted-foreground">
              Une plateforme éducative interactive et inclusive permettant aux lycéens d'apprendre tout en offrant aux parents un espace dédié.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* For Students */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h3 className="font-medium text-lg">Pour les élèves</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Cours interactifs
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Carnet numérique
                </Link>
              </li>
              <li>
                <Link to="/badges" className="text-muted-foreground hover:text-primary transition-colors">
                  Badges et défis
                </Link>
              </li>
              <li>
                <Link to="/ai-tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Fiches assistées par IA
                </Link>
              </li>
            </ul>
          </div>

          {/* For Parents */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-medium text-lg">Pour les parents</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/parent-dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Tableau de bord parental
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Ressources officielles
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-muted-foreground hover:text-primary transition-colors">
                  Guides pédagogiques
                </Link>
              </li>
              <li>
                <Link to="/communication" className="text-muted-foreground hover:text-primary transition-colors">
                  Communication
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <h3 className="font-medium text-lg">Support & Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b">
          <div className="flex flex-col items-center text-center space-y-2 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
              <BookOpen size={24} />
            </div>
            <h4 className="font-medium">Cours interactifs</h4>
            <p className="text-sm text-muted-foreground">Vidéos, quiz et fiches personnalisables</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2 animate-fade-up" style={{ animationDelay: "500ms" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
              <Award size={24} />
            </div>
            <h4 className="font-medium">Gamification</h4>
            <p className="text-sm text-muted-foreground">Défis, badges et motivation continue</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
              <Users size={24} />
            </div>
            <h4 className="font-medium">Communication</h4>
            <p className="text-sm text-muted-foreground">Entre élèves, parents et professeurs</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2 animate-fade-up" style={{ animationDelay: "700ms" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-medium">Sécurité</h4>
            <p className="text-sm text-muted-foreground">Confidentialité et protection des données</p>
          </div>
        </div>

        {/* Logos section before Copyright */}
        <div className="mt-8 flex justify-center mb-6">
          <div className="flex items-center gap-6 bg-white shadow-sm px-6 py-3 rounded-lg">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/6aa9fd0c-a5ac-4aa5-97de-296e78cb61d6.png" 
                alt="Région Île-de-France" 
                className="h-10"
              />
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/eccb1831-d7b1-4430-a4d3-acc282e1b3ec.png" 
                alt="CY École de Design" 
                className="h-8"
              />
            </div>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EduNova. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
