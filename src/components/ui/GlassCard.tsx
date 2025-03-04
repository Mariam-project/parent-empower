
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | "neutral";
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
        variant === "primary" && "border-blue-pastel/30 bg-blue-pastel/10",
        variant === "secondary" && "border-blue-pastel-light/30 bg-blue-pastel-light/10",
        variant === "accent" && "border-purple-light/30 bg-purple-light/10",
        variant === "neutral" && "border-yellow-soft/30 bg-white/70",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
