
import React from "react";

interface MathContentProps {
  formula: string;
}

const MathContent: React.FC<MathContentProps> = ({ formula }) => {
  // This is a simple component to display math formulas
  // In a real application, you might want to use a library like KaTeX or MathJax
  return (
    <div className="math-formula font-mono text-center">
      {formula}
    </div>
  );
};

export default MathContent;
