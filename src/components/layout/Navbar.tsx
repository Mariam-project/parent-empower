
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogIn, BookOpen, Home, BarChart3, Book } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white shadow-subtle py-3" : "bg-white/95"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 animate-fade-in"
          >
            <span className="font-display font-bold text-xl text-blue-accent">
              EduNova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 animate-fade-in">
            <Link
              to="/"
              className={cn(
                "nav-link flex items-center space-x-1",
                isActive("/") && "bg-blue-pastel text-blue-800 font-semibold"
              )}
            >
              <Home size={18} />
              <span>Accueil</span>
            </Link>
            <Link
              to="/dashboard"
              className={cn(
                "nav-link flex items-center space-x-1",
                isActive("/dashboard") && "bg-yellow-soft/20 text-yellow-soft"
              )}
            >
              <BarChart3 size={18} />
              <span>Tableau de bord</span>
            </Link>
            <Link
              to="/courses"
              className={cn(
                "nav-link flex items-center space-x-1",
                isActive("/courses") && "bg-orange-soft/20 text-orange-soft"
              )}
            >
              <BookOpen size={18} />
              <span>Cours</span>
            </Link>
            <Link
              to="/journal"
              className={cn(
                "nav-link flex items-center space-x-1",
                isActive("/journal") && "bg-rose-soft/20 text-rose-soft"
              )}
            >
              <Book size={18} />
              <span>Carnet</span>
            </Link>
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-1"
            >
              <LogIn size={16} />
              <span>Connexion</span>
            </Button>
            <Button
              size="sm"
              className="flex items-center space-x-1 bg-blue-pastel text-blue-800 hover:bg-blue-pastel/90"
            >
              <User size={16} />
              <span>Inscription</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-foreground animate-fade-in" />
            ) : (
              <Menu size={24} className="text-foreground animate-fade-in" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-scale-in">
            <div className="flex flex-col space-y-3 px-4">
              <Link
                to="/"
                className={cn(
                  "nav-link flex items-center space-x-2",
                  isActive("/") && "bg-blue-pastel text-blue-800 font-semibold"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Home size={18} />
                <span>Accueil</span>
              </Link>
              <Link
                to="/dashboard"
                className={cn(
                  "nav-link flex items-center space-x-2",
                  isActive("/dashboard") && "bg-yellow-soft/20 text-yellow-soft"
                )}
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 size={18} />
                <span>Tableau de bord</span>
              </Link>
              <Link
                to="/courses"
                className={cn(
                  "nav-link flex items-center space-x-2",
                  isActive("/courses") && "bg-orange-soft/20 text-orange-soft"
                )}
                onClick={() => setIsOpen(false)}
              >
                <BookOpen size={18} />
                <span>Cours</span>
              </Link>
              <Link
                to="/journal"
                className={cn(
                  "nav-link flex items-center space-x-2",
                  isActive("/journal") && "bg-rose-soft/20 text-rose-soft"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Book size={18} />
                <span>Carnet</span>
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn size={16} className="mr-2" />
                  <span>Connexion</span>
                </Button>
                <Button
                  className="w-full justify-start bg-blue-pastel text-blue-800 hover:bg-blue-pastel/90"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={16} className="mr-2" />
                  <span>Inscription</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
