
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({
  hoverEffect = true,
  children,
  className,
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hoverEffect && "hover-scale",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
