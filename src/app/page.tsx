import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ProblemStatmentSection } from '@/components/problem-statment-section';
import { SolutionSection } from '@/components/solution-section';
import { FeatureSection } from '@/components/feature-section';
import { Testimonials } from '@/components/testimonials';
import { NewHero } from '@/components/new-hero';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      {/* <Hero /> */}
      <NewHero />
      <ProblemStatmentSection />

      {/* Solution Section */}
      <SolutionSection />

      <FeatureSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700  text-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Being Manipulated. Start Being Informed.
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join thousands of critical thinkers who refuse to let media outlets control their
              worldview.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-6 text-xl"
            >
              <a href="#hero">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
