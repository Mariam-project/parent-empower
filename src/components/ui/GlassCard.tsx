
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | "neutral" | "green" | "yellow" | "orange" | "rose";
}

const GlassCard = ({
  hoverEffect = true,
  children,
  className,
  variant = "neutral",
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hoverEffect && "hover-scale",
        variant === "primary" && "border-blue-pastel/30 bg-blue-pastel/10", // Changed from green-mint to blue-pastel
        variant === "secondary" && "border-blue-pastel-light/30 bg-blue-pastel-light/10",
        variant === "accent" && "border-blue-light/30 bg-blue-light/10",
        variant === "green" && "border-green-mint/30 bg-green-mint/10",
        variant === "yellow" && "border-yellow-soft/30 bg-yellow-soft/10",
        variant === "orange" && "border-orange-soft/30 bg-orange-soft/10",
        variant === "rose" && "border-rose-soft/30 bg-rose-soft/10",
        variant === "neutral" && "border-white/10 bg-white/70",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
