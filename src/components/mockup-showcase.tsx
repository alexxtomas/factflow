'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function MockupShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delay: 0.6 + i * 0.2,
      },
    }),
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0.5, 0.3, 0.5],
      scale: 1.2,
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };
  return (
    <section ref={ref} className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h1
            variants={itemVariants}
            className="relative mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            See the Difference for{' '}
            <span className="relative inline-block">
              Yourself
              <motion.span
                className="absolute bottom-0 left-0 h-[6px] w-full rounded-full bg-blue-400"
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-16 max-w-3xl text-lg text-blue-100 md:text-xl"
          >
            FactFlow transforms how you consume news, giving you clarity in a world of confusion.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-800 p-6 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <Image
                src="/mockup-2.png"
                alt="Mobile app mockup"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2"> Web Experience</h3>

            <p className="text-blue-200">
              Discover balanced news anytime, anywhere with our intuitive, desktop-optimized
              interface designed for seamless browsing.
            </p>
          </div>

          <div className="bg-blue-800 p-6 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bias detection feature"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Bias Detection</h3>
            <p className="text-blue-200">
              See exactly how different outlets spin the same story with our visual bias indicators.
            </p>
          </div>

          <div className="bg-blue-800 p-6 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Daily digest feature"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Daily Digest</h3>
            <p className="text-blue-200">
              Start your day with a personalized, balanced summary of what truly matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
