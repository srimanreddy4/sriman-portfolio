import React from 'react';
import AnimatedText from './AnimatedText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 'accenture',
      title: 'AEH Intern',
      company: 'Accenture India',
      link: '#',
      period: 'May 2025 - July 2025',
      location: 'Bangalore, India',
      technologies: ['Oracle HCM Cloud', 'HCM Data Loader', 'Oracle Fusion', 'PL/SQL', 'Oracle BI Publisher'],
      description: [
        'Implemented complete data migration of HR work structures and employee data into Oracle HCM Cloud using HDL processes, successfully resolving dependency issues while configuring automated user account creation workflows.',
        'Gained hands-on experience with Oracle BI Publisher for workforce data extraction and developed foundational skills in PL/SQL for database operations and data manipulation within the Oracle HCM environment.'
      ]
    },
    {
      id: 'ayudh',
      title: 'Python Developer',
      company: 'Ayudh AI',
      link: '#',
      period: 'May 2024 - July 2024',
      location: 'Remote',
      technologies: ['Python', 'Gradio', 'H2OGPT', 'LangChain', 'LangGraph', 'AutoGPT', 'Autogen', 'RAG', 'Local LLMs'],
      description: [
        'Streamlined the GUI of the open-source H2OGPT which used gradio and enhanced the system to provide highlighted RAG documents detailing the model\'s reasoning alongside the LLM\'s response.',
        'Evaluated agents like AutoGPT, Autogen for lengthy documents using local LLMs, integrating the optimal solution.',
        'Developed agentic system using LangGraph and prompt engineering for document editing tasks on long documents.'
      ]
    },
    {
      id: 'blithchron',
      title: 'Flutter Developer',
      company: 'Blithchron, IIT Gandhinagar',
      link: '#',
      period: 'June 2023 - Nov 2023',
      location: 'Gandhinagar, India',
      technologies: ['Flutter', 'Real-time Location Tracking', 'Mobile Development'],
      description: [
        'Contributed as a Flutter developer by implementing dynamic real-time location tracking and event directions, while also identifying and fixing bugs to enhance user experience.',
        'Part of the technical team for Blithchron, IIT Gandhinagar\'s cultural festival application.'
      ]
    }
  ];

  const researchExperiences = [
    {
      id: 'huggingface',
      title: 'Hugging Face Models Audit for Text Classification',
      company: 'IIT Gandhinagar',
      link: 'https://arxiv.org/abs/2503.15222',
      period: 'Nov 2023 - June 2024',
      location: 'Gandhinagar, India',
      role: 'Second Author, Publication at ICWSM',
      advisor: 'Prof. Mayank Singh',
      description: [
        'Contributed key findings on the correlation between the comprehensiveness of model documentation (80,000 annotations of top 500 models) with the popularity and performance (claimed and real-world).',
        'Conducted in-domain and out-domain analysis, which included direct inference and finetuning on the top 500 downloaded models of sentiment analysis task, utilizing three prominent datasets.'
      ]
    },
    {
      id: 'multimodal',
      title: 'Multimodal Summarisation Models Architecture Research',
      company: 'IIT Gandhinagar',
      link: '#',
      period: 'Current',
      location: 'Gandhinagar, India',
      role: 'Research Assistant',
      advisor: 'Prof. Sriparna Saha',
      description: [
        'Currently working on architectures of multimodal summarisation models under the guidance of Prof. Sriparna Saha.',
        'Exploring novel approaches to combine textual and visual information for enhanced document summarization.'
      ]
    },
    {
      id: 'fsil',
      title: 'Volunteer Research Assistant',
      company: 'FSIL - Georgia Institute of Technology',
      link: '#',
      period: 'Current',
      location: 'Remote',
      role: 'Research Assistant',
      advisor: 'Financial Services Innovation Lab',
      description: [
        'Contributing to research initiatives at the Financial Services Innovation Lab, Georgia Institute of Technology.',
        'Working on innovative solutions for financial technology and services.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">
            <span className="text-neon-blue font-mono mr-2">02.</span> Where I've Worked
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-blue to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Professional Experience */}
          <div>
            <h3 className="text-xl font-bold text-neon-green mb-6 font-sans">Professional Experience</h3>
            <Tabs defaultValue="accenture" className="w-full">
              <TabsList className="grid md:grid-cols-3 grid-cols-2 gap-2 bg-tech-800/50 p-2 mb-8 rounded-lg">
                {experiences.map((exp) => (
                  <TabsTrigger
                    key={exp.id}
                    value={exp.id}
                    className="interactive-element font-sans data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue transition-all duration-200"
                  >
                    {exp.company}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {experiences.map((exp) => (
                <TabsContent key={exp.id} value={exp.id} className="bg-tech-800/20 p-6 rounded-lg border border-border">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold flex flex-wrap items-center gap-2 font-sans">
                        {exp.title} 
                        <span className="text-neon-blue">@</span>
                        <span className="text-neon-blue">{exp.company}</span>
                      </h3>
                      <p className="text-gray-400 font-mono text-sm">
                        {exp.period} | {exp.location}
                      </p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start font-sans">
                          <span className="text-neon-blue inline-block mr-3 mt-1.5">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-3">
                      <span className="text-sm text-gray-500 font-sans">Link not available</span>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Research Experience */}
          <div>
            <h3 className="text-xl font-bold text-neon-green mb-6 font-sans">Research Experience</h3>
            <Tabs defaultValue="huggingface" className="w-full">
              <TabsList className="grid md:grid-cols-3 grid-cols-2 gap-2 bg-tech-800/50 p-2 mb-8 rounded-lg">
                {researchExperiences.map((exp) => (
                  <TabsTrigger
                    key={exp.id}
                    value={exp.id}
                    className="interactive-element font-sans data-[state=active]:bg-neon-green/20 data-[state=active]:text-neon-green transition-all duration-200"
                  >
                    {exp.id === 'huggingface' ? 'HF Models Audit' : exp.id === 'multimodal' ? 'Multimodal Research' : 'FSIL'}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {researchExperiences.map((exp) => (
                <TabsContent key={exp.id} value={exp.id} className="bg-tech-800/20 p-6 rounded-lg border border-border">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-sans">
                        {exp.title}
                      </h3>
                      <p className="text-neon-green font-sans">{exp.role}</p>
                      <p className="text-gray-400 font-mono text-sm">
                        {exp.period} | {exp.location}
                      </p>
                      <p className="text-gray-300 text-sm font-sans">
                        Advisor: {exp.advisor}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start font-sans">
                          <span className="text-neon-green inline-block mr-3 mt-1.5">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-3">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive-element text-sm text-neon-green hover:underline inline-flex items-center gap-1 font-sans"
                      >
                        Paper Link
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
