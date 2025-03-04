
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
      <GlassCard className="max-w-md w-full flex flex-col items-center text-center p-8 animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
          <span className="text-4xl font-bold">404</span>
        </div>
        <h1 className="text-2xl font-display font-bold mb-4">Page introuvable</h1>
        <p className="text-muted-foreground mb-8">
          Oups ! La page que vous recherchez semble ne pas exister.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            <span>Retour</span>
          </Button>
          <Button 
            className="flex items-center justify-center gap-2"
            onClick={() => navigate("/")}
          >
            <Home size={16} />
            <span>Accueil</span>
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default NotFound;
