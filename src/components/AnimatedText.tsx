
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlight?: boolean;
  children?: React.ReactNode;
  as?: React.ElementType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  highlight = false,
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
  
  return (
    <Component className={`${className}`} ref={containerRef}>
      <div className="reveal" style={{ transitionDelay: `${delay}ms` }}>
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-2 mb-1">
            {highlight && index % 3 === 0 ? (
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
