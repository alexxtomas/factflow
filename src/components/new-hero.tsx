'use client';

import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import ParticleBackground from './particle-background';
import GradientText from './gradient-text';
import { toast } from 'sonner';
import { Input } from './ui/input';

export function NewHero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

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
    <header
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-950/50" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="max-w-4xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: 'easeOut' },
              },
            }}
            className="mb-6"
          >
            <GradientText
              text={`
                Stop Being Manipulated.
                 <br /> 
                 Start Being Informed.`}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-[600px] text-lg text-blue-100 md:text-xl"
          >
            Get informed quickly with news that's verified, balanced, and free from ideological
            manipulation.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: 0.4,
                },
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
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
          </motion.div>
          <motion.p variants={itemVariants} className="text-sm text-blue-200/80 mt-4">
            Join our unbiased news revolution. No spam, only important updates about the launch.
          </motion.p>
        </motion.div>
      </div>

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
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="h-full bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400"></div>
      </motion.div>
    </header>
  );
}
