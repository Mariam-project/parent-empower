
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
        "bg-white rounded-xl shadow-sm border p-6",
        hoverEffect && "hover-scale",
        variant === "primary" && "border-blue-pastel text-blue-800", 
        variant === "secondary" && "border-blue-pastel-light text-blue-800",
        variant === "accent" && "border-blue-light text-blue-800",
        variant === "green" && "border-green-mint text-green-accent",
        variant === "yellow" && "border-yellow-soft text-yellow-soft/90",
        variant === "orange" && "border-orange-soft text-orange-soft",
        variant === "rose" && "border-rose-soft text-rose-soft",
        variant === "neutral" && "border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
