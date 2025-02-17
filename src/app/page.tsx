import { Blog } from '@/components/sections/blog';
import { Case } from '@/components/sections/case';
import { CTA } from '@/components/sections/cta';
import { Features1 } from '@/components/sections/features1';
import { Features2 } from '@/components/sections/features2';
import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Pricing } from '@/components/sections/pricing';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Case />
      <Features1 />
      <Features2 />
      <Testimonials />
      <Pricing />
      <Stats />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}
