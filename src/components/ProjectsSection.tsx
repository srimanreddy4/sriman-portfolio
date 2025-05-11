
import React, { useRef } from 'react';
import AnimatedText from './AnimatedText';

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  link, 
  index 
}: { 
  title: string; 
  description: string; 
  tech: string[]; 
  link: string; 
  index: number; 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    const rotateX = y * -10;
    const rotateY = x * 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div 
      ref={cardRef}
      className="interactive-element bg-tech-800/50 border border-tech-700 rounded-lg p-6 transition-all duration-300 hover:border-neon-blue"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDuration: '0.2s' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neon-blue/10 text-neon-blue font-mono">
          0{index + 1}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-neon-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </a>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 hover:text-neon-blue transition-colors duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      </h3>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((item, i) => (
          <span 
            key={i} 
            className="text-xs px-2 py-1 rounded-full bg-tech-700 text-neon-blue font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Travelling Postman',
      description: 'AI-driven mail routing solution that won 1st place in SIH 2024, calculating safety indexes for 700+ cities with 98% accuracy.',
      tech: ['Python', 'Next.js', 'PostgreSQL', 'IBM Watsonx'],
      link: 'https://travelling-postman-3hl4.vercel.app/'
    },
    {
      title: 'Medicine Prescriber',
      description: 'Java-based prescription system that reduces diagnosis time by 25% and enhances accuracy for up to 10 diseases.',
      tech: ['Java', 'JavaFX', 'Maven', 'MySQL'],
      link: 'https://github.com/K-Svayam05/Medicine-Prescriber'
    },
    {
      title: 'Company\'s Profit Prediction Model',
      description: 'ML model with 96% accuracy for financial forecasting, saving 50+ hours/month in analysis with better decision-making.',
      tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      link: 'https://github.com/K-Svayam05/ML--Company-s-Profit-Prediction/tree/main'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-neon-blue font-mono mr-2">03.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-blue to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedText key={index} text="" className="h-full" delay={index * 200}>
              <ProjectCard 
                title={project.title} 
                description={project.description} 
                tech={project.tech} 
                link={project.link} 
                index={index}
              />
            </AnimatedText>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/K-Svayam05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive-element inline-flex items-center gap-2 px-6 py-3 border border-neon-blue text-neon-blue rounded-md hover:bg-neon-blue/10 transition-all duration-300"
          >
            <span>View More on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
