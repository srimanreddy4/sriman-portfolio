
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }
      
      // Add a slight delay to the outline cursor for a trailing effect
      if (cursorOutlineRef.current) {
        setTimeout(() => {
          cursorOutlineRef.current!.style.left = `${clientX}px`;
          cursorOutlineRef.current!.style.top = `${clientY}px`;
        }, 50);
      }
    };

    const handleMouseDown = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = 'translate(-50%, -50%) scale(0.9)';
      }
    };

    const handleMouseUp = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const addLinkHoverClass = () => {
      const links = document.querySelectorAll('a, button, .interactive-element');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          cursorOutlineRef.current?.classList.add('link-hover');
        });
        
        link.addEventListener('mouseleave', () => {
          cursorOutlineRef.current?.classList.remove('link-hover');
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Call once to initially set up events for links
    addLinkHoverClass();
    
    // Set up a mutation observer to handle dynamically added links
    const observer = new MutationObserver(() => {
      addLinkHoverClass();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
