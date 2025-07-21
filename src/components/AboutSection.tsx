import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-3/5">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">
                <span className="text-neon-blue font-mono mr-2">01.</span> About Me
              </h2>
              <div className="h-px bg-gradient-to-r from-neon-blue to-transparent flex-grow ml-4"></div>
            </div>
            
            <AnimatedText
              text="Hello! I'm Sriman Reddy, a senior undergraduate in Computer Science and Engineering at IIT Gandhinagar with a passion for leveraging technology to build robust solutions for complex, real-world problems."
              className="mb-4 text-lg font-sans"
              highlight={true}
              highlightWords={["Computer Science and Engineering", "robust solutions", "real-world problems"]}
              delay={300}
            />
            
            <AnimatedText 
              text="My experience is diverse, spanning from developing agentic AI systems and contributing to published research on Hugging Face models, to working with enterprise-level database systems. I am driven by a desire to apply my skills in machine learning, software development, and large-scale database management."
              className="mb-4 font-sans"
              highlight={true}
              highlightWords={["agentic AI systems", "published research", "machine learning", "database management"]}
              delay={500}
            />
            
            <AnimatedText 
              text="Beyond my formal projects, I am an active open-source contributor and enjoy exploring the latest in AI through my blog and hands-on mini-projects. I'm always looking for the next challenging problem to solve and create impactful, efficient software solutions."
              className="mb-4 font-sans"
              highlight={true}
              highlightWords={["open-source contributor", "challenging problem"]}
              delay={700}
            />
            
            <AnimatedText
              text=""
              className="font-sans"
              highlight={false}
              delay={900}
            />
            
            <div className="mt-6 reveal" style={{ transitionDelay: '1100ms' }}>
              <h3 className="text-lg font-mono text-neon-blue mb-3">Education</h3>
              <div className="p-4 bg-tech-800/50 border border-border rounded-lg neon-border card-hover">
                <h4 className="font-bold font-sans">Indian Institute of Technology (IIT), Gandhinagar</h4>
                <p className="text-muted-foreground font-sans">Bachelor of Technology in Computer Science and Engineering</p>
                <div className="flex justify-between mt-2 font-sans">
                  <span className="text-neon-green">Senior Undergraduate</span>
                  <span className="text-gray-400">Current</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-10 md:mt-20">
            <div className={`relative mx-auto w-64 h-64 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              {/* Profile image with tech-themed overlay */}
              <div className="absolute inset-0 bg-tech-700/30 rounded-lg"></div>
              
              <div className="absolute inset-4 border-2 border-neon-blue rounded-lg transform rotate-6 opacity-40"></div>
              
              <div className="absolute inset-0 bg-tech-800 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-tech-900 to-tech-700 flex items-center justify-center">
                  {/* Replace with actual image if available */}
                  <span className="text-5xl font-bold text-gradient font-sans">Sriman</span>
                </div>
                
                {/* Tech pattern overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                
                {/* Code snippet overlay */}
                <pre className="absolute bottom-4 left-4 text-[0.6rem] text-neon-blue opacity-50 font-mono">
                  <code>
                    {`const developer = {
  name: "Sriman",
  skills: ["AI", "ML", "DB"],
  passion: "Solving problems"
};`}
                  </code>
                </pre>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-br-lg border-r-2 border-b-2 border-neon-purple"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-tr-lg border-t-2 border-r-2 border-neon-green"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
