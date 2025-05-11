
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const moveX = x * 20;
      const moveY = y * 20;
      
      // Apply the movement to elements with data-speed attribute
      Array.from(heroRef.current.querySelectorAll('[data-speed]')).forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        
        el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-16 overflow-hidden" ref={heroRef}>
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-neon-blue/20 rounded-full filter blur-[80px] animate-blob" data-speed="3"></div>
      <div className="absolute top-2/3 -right-20 w-72 h-72 bg-neon-purple/20 rounded-full filter blur-[80px] animate-blob animation-delay-2000" data-speed="2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-2">
            <h3 className="text-neon-blue font-mono text-lg md:text-xl tracking-wider animate-text-reveal">
              Hi there, my name is
            </h3>
          </div>
          
          <div className="overflow-hidden mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-text-reveal" style={{ animationDelay: '200ms' }}>
              <span className="text-white">Svayam </span>
              <span className="text-gradient">Kapadia</span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 animate-text-reveal" style={{ animationDelay: '400ms' }}>
              I build innovative web experiences
            </h2>
          </div>
          
          <AnimatedText 
            text="Frontend Web Developer specializing in creating exceptional digital experiences. Currently focused on building responsive and performant web applications that solve real-world problems."
            className="text-muted-foreground max-w-xl text-lg mb-8"
            delay={600}
          />
          
          <div className="overflow-hidden">
            <div className="animate-text-reveal" style={{ animationDelay: '800ms' }}>
              <a 
                href="#projects" 
                className="interactive-element mr-4 px-6 py-3 bg-neon-blue text-gray-900 font-medium rounded hover:bg-neon-blue/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,159,255,0.5)]"
              >
                View my work
              </a>
              <a 
                href="#contact" 
                className="interactive-element px-6 py-3 border border-neon-blue text-neon-blue rounded hover:bg-neon-blue/10 transition-all duration-300"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating shapes */}
      <div className="hidden md:block absolute right-10 bottom-10 w-40 h-40" data-speed="-2">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-12 h-12 border-2 border-neon-blue/30 rounded-lg transform rotate-45 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-2 border-neon-purple/30 rounded-md animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/2 w-8 h-8 bg-neon-green/10 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <div className="h-12 w-6 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-blue rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
