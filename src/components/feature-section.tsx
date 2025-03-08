'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart2, Globe, Newspaper, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function FeatureSection() {
  const [activeTab, setActiveTab] = useState('web');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById('feature-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="feature-section" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                x1={i * 5}
                y1="0"
                x2={i * 5}
                y2="100"
                stroke="white"
                strokeWidth="0.1"
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 5}
                x2="100"
                y2={i * 5}
                stroke="white"
                strokeWidth="0.1"
              />
            ))}
          </svg>
        </div>
        <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 20}s infinite linear`,
            }}
          ></div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 transition-all">
            Powerful Features
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            See the Difference for{' '}
            <span className="relative inline-block">
              Yourself
              <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-400/80 rounded"></span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100/90">
            FactFlow transforms how you consume news, giving you clarity in a world of confusion
            with AI-powered insights and personalized content.
          </p>
        </motion.div>

        <Tabs
          defaultValue="web"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mx-auto max-w-5xl"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-blue-800/50 backdrop-blur-sm p-1 border border-blue-700/50">
              <TabsTrigger
                value="web"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-200"
              >
                <Globe className="mr-2 h-4 w-4" />
                Web Experience
              </TabsTrigger>
              <TabsTrigger
                value="bias"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-200"
              >
                <BarChart2 className="mr-2 h-4 w-4" />
                Bias Detection
              </TabsTrigger>
              <TabsTrigger
                value="digest"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-200"
              >
                <Newspaper className="mr-2 h-4 w-4" />
                Daily Digest
              </TabsTrigger>
            </TabsList>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? 'show' : 'hidden'}
            className="relative"
          >
            <TabsContent value="web" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div variants={item} className="order-2 md:order-1">
                  <Card className="bg-blue-800/20 backdrop-blur-md border-blue-700/50 text-white overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Globe className="h-5 w-5 text-blue-300 mr-2" />
                        <Badge
                          variant="outline"
                          className="bg-blue-500/20 text-blue-200 border-blue-500/30"
                        >
                          Web Experience
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold">Intuitive News Interface</CardTitle>
                      <CardDescription className="text-blue-200">
                        Designed for clarity and ease of use
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            Distraction-free reading environment with focus on content
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            Responsive design optimized for all devices
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            Customizable news categories and preferences
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={item} className="order-1 md:order-2 relative">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-blue-900/50 border border-blue-700/50 transform transition-all hover:scale-[1.02] duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src="/1.png"
                      width={800}
                      height={600}
                      alt="FactFlow Web Experience"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-900 to-transparent">
                      <p className="text-white text-sm">FactFlow's intuitive web interface</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Desktop & Mobile
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="bias" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div variants={item} className="order-2 md:order-1">
                  <Card className="bg-blue-800/20 backdrop-blur-md border-blue-700/50 text-white overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <BarChart2 className="h-5 w-5 text-blue-300 mr-2" />
                        <Badge
                          variant="outline"
                          className="bg-blue-500/20 text-blue-200 border-blue-500/30"
                        >
                          Bias Detection
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold">Visual Bias Indicators</CardTitle>
                      <CardDescription className="text-blue-200">
                        See how different outlets spin the same story
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            AI-powered analysis of political leaning and emotional tone
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            Side-by-side comparison of how outlets cover the same story
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            Historical bias tracking to identify patterns over time
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={item} className="order-1 md:order-2 relative">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-blue-900/50 border border-blue-700/50 transform transition-all hover:scale-[1.02] duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src="/2.png"
                      width={800}
                      height={600}
                      alt="FactFlow Bias Detection"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-900 to-transparent">
                      <p className="text-white text-sm">Visual bias indicators in action</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    AI-Powered
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="digest" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div variants={item} className="order-2 md:order-1">
                  <Card className="bg-blue-800/20 backdrop-blur-md border-blue-700/50 text-white overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Newspaper className="h-5 w-5 text-blue-300 mr-2" />
                        <Badge
                          variant="outline"
                          className="bg-blue-500/20 text-blue-200 border-blue-500/30"
                        >
                          Daily Digest
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold">
                        Personalized News Summary
                      </CardTitle>
                      <CardDescription className="text-blue-200">
                        Start your day with what truly matters
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            AI-curated content based on your interests and reading habits
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            Balanced viewpoints from across the political spectrum
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <Shield className="h-4 w-4 text-blue-300" />
                          </div>
                          <p className="text-blue-100">
                            Delivered via email, mobile app, or web interface
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={item} className="order-1 md:order-2 relative">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-blue-900/50 border border-blue-700/50 transform transition-all hover:scale-[1.02] duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src="/3.png"
                      width={800}
                      height={600}
                      alt="FactFlow Daily Digest"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-900 to-transparent">
                      <p className="text-white text-sm">Personalized daily news digest</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Personalized
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </motion.div>
        </Tabs>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <a href="#hero">
              Reserve Your Spot <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, 20px) rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
