'use client';

import { Marquee } from './magicui/marquee';
import { ReviewCard } from './review-card';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Michael K.',
    username: 'Marketing Executive',
    body: 'I was tired of feeling manipulated by the news. FactFlow showed me how much bias I was consuming daily. Now I finally feel informed, not influenced.',
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Sarah J.',
    username: 'High School Teacher',
    body: "As a teacher, I needed a reliable news source to discuss current events with my students. FactFlow provides the balanced perspective I've been searching for.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'David T.',
    username: 'Software Engineer',
    body: 'I was shocked to see how differently the same story was covered across media outlets. FactFlow has completely changed how I understand world events.',
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Lisa M.',
    username: 'Freelance Writer',
    body: "As a writer, I need accurate, balanced news. FactFlow ensures I'm not misled by media spin, letting me form my own well-informed opinions.",
    img: 'https://avatar.vercel.sh/lisa',
  },
  {
    name: 'Carlos V.',
    username: 'Entrepreneur',
    body: 'Navigating the fast-paced business world means staying informed without the noise. FactFlow delivers clear, unbiased news that helps me make smart decisions.',
    img: 'https://avatar.vercel.sh/carlos',
  },
  {
    name: 'Nina P.',
    username: 'Activist',
    body: 'I demand transparency and honesty in media. FactFlow cuts through the clutter, letting me see what really matters and fueling my drive for change.',
    img: 'https://avatar.vercel.sh/nina',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function Testimonials() {
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
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            People Are Breaking Free from{' '}
            <span className="relative inline-block">
              Media Manipulation
              <motion.span
                className="absolute bottom-0 left-0 h-[6px] w-full rounded-full bg-red-400"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>{' '}
          </motion.h2>

          <p className="text-xl text-gray-600">
            Join thousands who've discovered what it means to be truly informed.
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
