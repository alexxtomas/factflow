'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { AlertTriangle, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProblemStatmentSection() {
  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      // Start the title animation
      titleControls.start('visible');

      // Start the cards animation after a delay
      setTimeout(() => {
        cardsControls.start('visible');
      }, 1000);
    }
  }, [isInView, titleControls, cardsControls]);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const highlightVariants = {
    hidden: {
      color: '#000',
      textShadow: '0 0 0px rgba(239, 68, 68, 0)',
    },
    visible: {
      color: '#ef4444',
      textShadow: '0 0 15px rgba(239, 68, 68, 0.3)',
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.8,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconContainerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const cardInfo = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      iconBg: 'bg-red-100',
      title: 'Fake News Epidemic',
      description:
        '73% of Americans say they regularly encounter fake news. The media profits from your confusion.',
    },
    {
      icon: <Shield className="h-6 w-6 text-amber-500" />,
      iconBg: 'bg-amber-100',
      title: 'Extreme Bias',
      description:
        "News outlets don't report facts—they push narratives designed to keep you in your ideological bubble.",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      iconBg: 'bg-purple-100',
      title: 'Information Overload',
      description:
        'The average person is exposed to 10,000+ headlines per day, making it impossible to know what matters.',
    },
  ];

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden bg-white px-4 py-20 md:py-32">
      {/* Background subtle patterns */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute h-[800px] w-[800px] rounded-full border border-gray-200 left-[-400px] top-[-400px]"></div>
        <div className="absolute h-[600px] w-[600px] rounded-full border border-gray-200 right-[-300px] bottom-[-300px]"></div>
        <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-200 right-[10%] top-[20%]"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <motion.span variants={titleWordVariants}>The</motion.span>{' '}
            <motion.span variants={titleWordVariants}>Media</motion.span>{' '}
            <motion.span variants={titleWordVariants}>Is</motion.span>{' '}
            <motion.span variants={highlightVariants} className="relative inline-block">
              Lying
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] w-full bg-red-500"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.span>{' '}
            <motion.span variants={titleWordVariants}>To</motion.span>{' '}
            <motion.span variants={titleWordVariants}>You</motion.span>
          </h1>

          <motion.p
            variants={subtitleVariants}
            className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl"
          >
            Every day, you're bombarded with news designed to manipulate your emotions and push
            hidden agendas.
          </motion.p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={cardsContainerVariants}
          initial="hidden"
          animate={cardsControls}
        >
          {cardInfo.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="border-gray-100 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${card.iconBg}`}
                      variants={iconContainerVariants}
                      animate={hoveredCard === index ? 'hover' : 'visible'}
                    >
                      {card.icon}
                    </motion.div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
