'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
}

export default function GradientText({ text, className = '' }: GradientTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = textElement.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      textElement.style.setProperty('--x-position', `${x * 100}%`);
      textElement.style.setProperty('--y-position', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.h1
      ref={textRef}
      className={`relative bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: '200% 200%',
        backgroundPosition: 'var(--x-position, 0%) var(--y-position, 0%)',
      }}
      initial={{ backgroundPosition: '0% 0%' }}
      animate={{
        textShadow: [
          '0 0 8px rgba(255,255,255,0.1)',
          '0 0 16px rgba(255,255,255,0.2)',
          '0 0 8px rgba(255,255,255,0.1)',
        ],
      }}
      transition={{
        textShadow: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: 'easeInOut',
        },
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
