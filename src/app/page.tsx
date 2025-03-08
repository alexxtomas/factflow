import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import TestimonialCard from '../components/testimonial-card';
import { Hero } from '@/components/hero';
import { ProblemStatmentSection } from '@/components/problem-statment-section';
import { SolutionSection } from '@/components/solution-section';
import { MockupShowcase } from '@/components/mockup-showcase';
import { Marquee } from '@/components/magicui/marquee';
import { ReviewCard } from '@/components/review-card';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Hero />
      <ProblemStatmentSection />

      {/* Solution Section */}
      <SolutionSection />

      <MockupShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Invest in Your Intellectual Freedom
            </h2>
            <p className="text-xl text-gray-600">
              The cost of staying misinformed is far greater than the price of truth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price="$7.99"
              features={[
                'Daily news digest',
                'Basic bias detection',
                '5 personalized topics',
                'Mobile app access',
              ]}
              buttonText="Start Free Trial"
              popular={false}
            />
            <PricingCard
              title="Premium"
              price="$12.99"
              features={[
                'Everything in Basic',
                'Advanced bias analysis',
                'Unlimited personalized topics',
                'Breaking news alerts',
                'Ad-free experience',
              ]}
              buttonText="Start Free Trial"
              popular={true}
            />
            <PricingCard
              title="Family"
              price="$19.99"
              features={[
                'Everything in Premium',
                'Up to 5 user accounts',
                'Parental controls',
                'Educational resources',
                'Priority support',
              ]}
              buttonText="Start Free Trial"
              popular={false}
            />
          </div>
        </div>
      </section> */}

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

      {/* Newsletter */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gradient-to-r from-blue-900 to-blue-700  text-gray-400 py-12">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">FactFlow</h3>
              <p>Revolutionizing how people get informed with unbiased, verified news.</p>
            </div>
            <div>
              <h4 className="text-white text-md font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-md font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-md font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} FactFlow. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
