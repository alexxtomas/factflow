'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { toast } from 'sonner';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      setIsVisible(true);
    }
  }, [isInView, controls]);

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

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  const highlightVariants = {
    initial: { backgroundSize: '0% 100%' },
    animate: {
      backgroundSize: '100% 100%',
      transition: { duration: 0.8, delay: 1.2 },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      // Call our API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      // Success!

      toast.success('You are now on the list, we will notify you when we launch! 🚀');

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      toast.error('Something went wrong, please try again later');

      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 py-16 md:py-24 lg:min-h-screen lg:py-32"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-96 w-96 rounded-full bg-blue-400 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-96 w-96 rounded-full bg-blue-300 blur-3xl bottom-20 right-20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block rounded-full bg-blue-800 px-4 py-1.5 text-sm font-medium text-white mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                FACTFLOW NEWS - THE TRUTH REVOLUTION
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl"
            >
              Stop Being{' '}
              <motion.span
                className="text-yellow-400 bg-gradient-to-r from-blue-500 to-blue-700 bg-no-repeat bg-bottom rounded-lg"
                style={{ backgroundSize: '0% 6px' }}
                variants={highlightVariants}
                initial="initial"
                animate="animate"
              >
                Manipulated By
              </motion.span>{' '}
              Biased Media
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[600px] text-lg text-blue-100 md:text-xl"
            >
              Get informed quickly with news that's verified, balanced, and free from ideological
              manipulation.
            </motion.p>

            {submitted ? (
              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                <p className="text-blue-800">Thanks! You're on the list.</p>
              </div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className={`h-12 bg-white/10 border-white/20 text-white placeholder:text-blue-200/70 pr-4 ${
                      error ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                    disabled={isSubmitting}
                  />
                  {error && (
                    <div className="flex items-center mt-2 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{error}</span>
                    </div>
                  )}
                  <AnimatePresence>
                    {email && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-green-400"
                      />
                    )}
                  </AnimatePresence>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="h-12 bg-yellow-400 text-blue-900 hover:bg-yellow-500 px-6 font-medium"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Subscribing...
                      </span>
                    ) : (
                      <>
                        <span>Join the waitlist</span>
                        <motion.div
                          animate={{ x: isHovered ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            )}

            <motion.p variants={itemVariants} className="text-sm text-blue-200/80">
              Join our unbiased news revolution. No spam, only important updates about the launch.
            </motion.p>
          </motion.div>

          <motion.div variants={imageVariants} className="relative">
            <motion.div
              initial="initial"
              animate="animate"
              // @ts-ignore
              variants={floatAnimation}
              className="relative z-10 rounded-lg shadow-2xl overflow-hidden border border-white/10 bg-white"
            >
              <div className="h-6 w-full bg-gray-100 flex items-center px-2">
                <div className="flex space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              <Image
                src="/mockup.png"
                width={600}
                height={500}
                alt="News analysis dashboard"
                className="w-full object-cover"
                priority
              />
            </motion.div>

            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-yellow-400 blur-2xl opacity-50"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-blue-400 blur-2xl opacity-50"></div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="h-full bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400"></div>
      </motion.div>

      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex items-center text-sm text-white/70"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 5, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'loop',
            }}
            className="ml-2"
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
