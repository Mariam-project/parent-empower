
import React from "react";

interface MathContentProps {
  formula: string;
}

const MathContent: React.FC<MathContentProps> = ({ formula }) => {
  // This is a simple component to display math formulas
  // In a real application, you might want to use a library like KaTeX or MathJax
  
  // Clean the formula to prevent JSX parsing issues
  const sanitizedFormula = formula
    .replace(/</g, "&lt;") 
    .replace(/>/g, "&gt;");
    
  return (
    <div className="math-formula font-mono text-center">
      {sanitizedFormula}
    </div>
  );
};

export default MathContent;
