
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlight?: boolean;
  highlightWords?: string[];
  children?: React.ReactNode;
  as?: React.ElementType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  highlight = false,
  highlightWords = [],
  children,
  as: Component = 'div'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  // Split text into words
  const words = text.split(' ');
  
  // Check if a word should be highlighted
  const shouldHighlight = (word: string): boolean => {
    if (!highlight) return false;
    
    // If specific highlightWords are provided, use those
    if (highlightWords.length > 0) {
      return highlightWords.some(hw => 
        word.toLowerCase().includes(hw.toLowerCase()) || 
        hw.toLowerCase().includes(word.toLowerCase())
      );
    }
    
    // Default highlighting logic (every 3rd word)
    return highlight && words.indexOf(word) % 3 === 0;
  };
  
  return (
    <Component className={`${className} font-sans`} ref={containerRef}>
      <div className="reveal" style={{ transitionDelay: `${delay}ms` }}>
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-2 mb-1">
            {shouldHighlight(word) ? (
              <span className="text-gradient font-semibold">{word} </span>
            ) : (
              <span>{word} </span>
            )}
          </span>
        ))}
        {children}
      </div>
    </Component>
  );
};

export default AnimatedText;
