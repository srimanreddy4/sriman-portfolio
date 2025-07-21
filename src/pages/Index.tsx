import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import BlogsSection from '../components/BlogsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Add keyframes for robot waving animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes wave {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(20deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(15deg); }
      }
      
      @keyframes blob {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      
      .animation-delay-300 { animation-delay: 300ms; }
      .animation-delay-500 { animation-delay: 500ms; }
      .animation-delay-600 { animation-delay: 600ms; }
      .animation-delay-900 { animation-delay: 900ms; }
      .animation-delay-1200 { animation-delay: 1200ms; }
      .animation-delay-2000 { animation-delay: 2000ms; }
    `;
    document.head.appendChild(style);
    
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('reveal-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <CustomCursor />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
