'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const FEATURES = [
  {
    title: 'Cross-Reference Technology',
    description:
      'Our AI compares how the same story is covered across the political spectrum, exposing bias and revealing the complete picture.',
  },
  {
    title: 'Fact-Check Engine',
    description:
      'Every story is automatically verified against trusted sources, flagging misinformation before it reaches you.',
  },
  {
    title: 'Personalized Digest',
    description:
      'Get only the news that matters to you, without the clickbait and sensationalism designed to hijack your attention.',
  },
];

export function SolutionSection() {
  const [selectedTab, setSelectedTab] = useState('analysis');
  const controls = useAnimation();
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
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

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 1 + i * 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-[1000px] w-[1000px] rounded-full bg-blue-100/30 blur-3xl -top-[500px] -right-[500px]" />
        <div className="absolute h-[800px] w-[800px] rounded-full bg-blue-100/30 blur-3xl -bottom-[400px] -left-[400px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100/80">
              THE SOLUTION
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Introducing FactFlow: News Without the{' '}
            <span className="relative inline-block">
              Manipulation
              <motion.span
                className="absolute bottom-0 left-0 h-[6px] w-full rounded-full bg-blue-200"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-3xl text-lg text-gray-600 md:text-xl"
          >
            Our advanced AI analyzes thousands of news sources to deliver the most accurate,
            balanced information.
          </motion.p>

          <motion.div
            variants={cardVariants}
            className="mx-auto mb-16 max-w-3xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-100"
          >
            <div className="mb-4 space-y-2">
              <h3 className="text-lg font-semibold">Breaking News: Economic Policy Change</h3>
              <p className="text-sm text-gray-500">
                See how different outlets cover the same story
              </p>
            </div>

            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-3">
                <TabsTrigger value="left">Left-Leaning</TabsTrigger>
                <TabsTrigger value="analysis">FactFlow Analysis</TabsTrigger>
                <TabsTrigger value="right">Right-Leaning</TabsTrigger>
              </TabsList>
              <TabsContent value="left" className="p-4">
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800">Progressive Times</h4>
                    <p className="text-sm">
                      Government Expands Social Safety Net with Historic Investment
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">
                    The administration's bold new economic policy represents a long-overdue
                    investment in working families. Experts praise the move as a step toward
                    reducing inequality.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-red-700">
                      Bias Alert: Emotionally charged language, omits potential economic concerns
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analysis" className="p-4">
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800">FactFlow Balanced View</h4>
                    <p className="text-sm">
                      New Economic Policy Introduces Changes to Social Programs and Tax Structure
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">
                    The administration has introduced a new economic policy that increases funding
                    for social programs by $200B while adjusting corporate tax rates. Economists
                    have mixed views on the long-term impact, with some highlighting benefits for
                    lower-income households and others expressing concerns about potential effects
                    on business growth.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-700">
                      Verified Facts: Policy details cross-checked with official documents and
                      expert analysis
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="right" className="p-4">
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                    <h4 className="font-bold text-red-800">Conservative Herald</h4>
                    <p className="text-sm">
                      Government Spending Spree Threatens Economic Stability
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">
                    The administration's reckless new policy will burden taxpayers and job creators.
                    Business leaders warn of dire consequences for economic growth and inflation.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-red-700">
                      Bias Alert: Uses fear-based language, omits potential benefits for certain
                      groups
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* <motion.div initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                <Card className="border-0 shadow-none">
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-4">
                      <h4 className="mb-2 font-semibold text-blue-900">Progressive Times</h4>
                      <p className="text-blue-800">
                        Government Expands Social Safety Net with Historic Investment
                      </p>
                    </div>
                    <p className="text-gray-600">
                      The administration's bold new economic policy represents a long-overdue
                      investment in working families. Experts praise the move as a step toward
                      reducing inequality.
                    </p>
                    <div className="rounded-lg bg-red-50 p-3">
                      <p className="text-sm text-red-600">
                        Bias Alert: Emotionally charged language, omits potential economic concerns
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t pt-4">
                      <span className="text-sm text-gray-500">AI Analysis: 62% bias detected</span>
                      <Button variant="link" className="text-blue-600 hover:text-blue-700">
                        Read Full Analysis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div> */}
            </Tabs>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                className="flex items-start space-x-4"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
