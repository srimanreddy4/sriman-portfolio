import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillItem = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-tech-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const SkillPoint = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center mb-3">
      <span className="text-neon-blue mr-2">▹</span>
      <span className="font-medium">{name}</span>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      type: 'points',
      skills: [
        'C/C++',
        'Python',
        'JavaScript',
        'HTML/CSS',
        'Dart',
        'MYSQL',
        'Matlab',
        'Verilog'
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      type: 'bars',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Flask', level: 85 },
        { name: 'Flutter', level: 80 },
        { name: 'PyTorch', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Langchain', level: 85 },
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      type: 'points',
      skills: [
        'Git',
        'Hugging Face',
        'Numpy',
        'Pandas',
        'Matplotlib',
        'Scikit-learn',
        'TRL',
        'Autogen',
        'LaTeX',
        'VLLM',
        'Docx',
        'PyPDF',
        'Autodesk Inventor Professional',
        'Laser Cutting',
        '3D Printing'
      ]
    },
    {
      id: 'achievements',
      title: 'Achievements',
      type: 'achievements',
      skills: [
        'Recipient of the Reliance Foundation Undergraduate scholarship for exemplary academic performance',
        'Designated as a KVPY scholar based on the All-India KVPY examination 2021 with an AIR rank of 821',
        'Secured AIR (All India Rank) of 1203 in JEE Advanced 2022 and scored 342/390 in BITSAT 2022',
        'Felicitated with the prestigious Dean\'s List Award for all Semesters (I to II) for securing a SPI of >= 8.5/10',
        'Selected as the volunteer research assistant for FSIL(Financial Services Innovation Lab) at Georgia Institute of Technology'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-neon-blue/10 rounded-full filter blur-[80px] animate-blob"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-neon-blue font-mono mr-2">05.</span> Skills & Achievements
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-blue to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-tech-800/50 p-2 mb-8 rounded-lg">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="interactive-element data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue transition-all duration-200"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="p-1">
                <div className="bg-tech-800/20 p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                  
                  {category.type === 'points' && (
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-8">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <SkillPoint name={skill} />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {category.type === 'bars' && (
                    <div className="grid md:grid-cols-2 gap-x-8">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <SkillItem name={skill.name} level={skill.level} />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {category.type === 'achievements' && (
                    <div className="space-y-4">
                      {category.skills.map((achievement, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-neon-green mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M8.21 13.89L7 23l7-4 7 4-1.21-9.11"></path>
                              <path d="M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                            </svg>
                          </span>
                          <p className="text-gray-300">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <span className="text-neon-blue mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 7h.01"></path>
                <path d="M10 7h7"></path>
                <path d="M7 12h.01"></path>
                <path d="M10 12h7"></path>
                <path d="M7 17h.01"></path>
                <path d="M10 17h3"></path>
              </svg>
            </span>
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Machine Learning Specalizarion by Andrew NG,(Courseera)',
              'Game Development with Unity and C# (Coursera)',
              'AI in medicine (Coursera)',
              'Deep Learning Specialization by Andrew NG,(Coursera)',
              'Introduction to AI Fundamentals (Coursera)',
              'CyberSecurity (Intern Learning)'
            ].map((cert, index) => (
              <div key={index} className="bg-tech-800/20 p-4 rounded-lg border border-tech-700">
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p>{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
