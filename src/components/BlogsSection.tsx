import React, { useRef } from 'react';
import AnimatedText from './AnimatedText';

const BlogCard = ({ 
  title, 
  description, 
  date,
  readTime,
  tags,
  link, 
  index 
}: { 
  title: string; 
  description: string; 
  date: string;
  readTime: string;
  tags: string[];
  link: string; 
  index: number; 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    const rotateX = y * -5;
    const rotateY = x * 5;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div 
      ref={cardRef}
      className="interactive-element bg-tech-800/50 border border-tech-700 rounded-lg p-6 transition-all duration-300 hover:border-neon-purple group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDuration: '0.2s' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-neon-purple/10 text-neon-purple font-mono text-sm">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            {date} • {readTime}
          </div>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </a>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 hover:text-neon-purple transition-colors duration-300 group-hover:text-neon-purple">
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      </h3>
      
      <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className="text-xs px-3 py-1 rounded-full bg-tech-700 text-neon-purple font-mono border border-neon-purple/20"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-tech-700">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-neon-purple hover:underline inline-flex items-center gap-1 font-mono"
        >
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  const blogs = [
    {
      title: 'Agent Building using LangGraph for Document Editing',
      description: 'A comprehensive guide to building intelligent agents using LangGraph for document editing tasks. Covering my experience developing agentic systems that can understand, process, and edit lengthy documents with advanced prompt engineering techniques.',
      date: 'Jul 2024',
      readTime: '12 min read',
      tags: ['LangGraph', 'AI Agents', 'Document Processing', 'LLMs'],
      link: 'https://medium.com/@kondam.reddy/agent-building-using-langgraph-for-document-editing-fb519e65e389'
    },
    {
      title: 'Build Your Own GPT Model from Scratch',
      description: 'Step-by-step implementation of a GPT model from the ground up, inspired by Andrej Karpathy\'s teachings. This hands-on tutorial covers transformer architecture, attention mechanisms, and training processes to help understand the fundamentals of large language models.',
      date: 'May 2024',
      readTime: '15 min read',
      tags: ['GPT', 'Transformers', 'Deep Learning', 'PyTorch'],
      link: 'https://medium.com/@kondam.reddy/build-your-own-gpt-model-from-scratch-be73bd38bcb7'
    }
  ];

  return (
    <section id="blogs" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-neon-purple font-mono mr-2">04.</span> Recent Thoughts & Insights
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-purple to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {blogs.map((blog, index) => (
            <div key={index}>
              <BlogCard 
                title={blog.title} 
                description={blog.description} 
                date={blog.date}
                readTime={blog.readTime}
                tags={blog.tags}
                link={blog.link} 
                index={index}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://medium.com/@kondam.reddy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive-element inline-flex items-center gap-2 px-6 py-3 border border-neon-purple text-neon-purple rounded-md hover:bg-neon-purple/10 transition-all duration-300"
          >
            <span>View All Articles</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
