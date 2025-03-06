import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, Zap, Shield, ArrowRight } from 'lucide-react';
import NewsComparisonMockup from '@/components/news-comparison-mockup';
import TestimonialCard from '../components/testimonial-card';
import PricingCard from '../components/pricing-card';
import NewsletterSignup from '../components/newsletter-signup';
import HeroEmailForm from '../components/hero-email-form';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <header id="header" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 max-w-screen-xl ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-2">
                THE TRUTH REVOLUTION
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stop Being <span className="text-yellow-400">Manipulated</span> By Biased Media
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Get informed quickly with news that's verified, balanced, and free from ideological
                manipulation.
              </p>
              <div className="pt-4 w-full">
                <HeroEmailForm />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-400 rounded-lg"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="News app dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Statement Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4  max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Media Is <span className="text-red-600">Lying</span> To You
            </h2>
            <p className="text-xl text-gray-600">
              Every day, you're bombarded with news designed to manipulate your emotions and push
              hidden agendas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fake News Epidemic</h3>
              <p className="text-gray-600">
                73% of Americans say they regularly encounter fake news. The media profits from your
                confusion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Extreme Bias</h3>
              <p className="text-gray-600">
                News outlets don't report facts—they push narratives designed to keep you in your
                ideological bubble.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Information Overload</h3>
              <p className="text-gray-600">
                The average person is exposed to 10,000+ headlines per day, making it impossible to
                know what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              THE SOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Introducing FactFlow: News Without the Manipulation
            </h2>
            <p className="text-xl text-gray-600">
              Our advanced AI analyzes thousands of news sources to deliver the most accurate,
              balanced information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <NewsComparisonMockup />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cross-Reference Technology</h3>
                  <p className="text-gray-600">
                    Our AI compares how the same story is covered across the political spectrum,
                    exposing bias and revealing the complete picture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fact-Check Engine</h3>
                  <p className="text-gray-600">
                    Every story is automatically verified against trusted sources, flagging
                    misinformation before it reaches you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Digest</h3>
                  <p className="text-gray-600">
                    Get only the news that matters to you, without the clickbait and sensationalism
                    designed to hijack your attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup Showcase */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See the Difference for Yourself</h2>
            <p className="text-xl text-blue-200">
              FactFlow transforms how you consume news, giving you clarity in a world of confusion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mobile app mockup"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Experience</h3>
              <p className="text-blue-200">
                Get balanced news on the go with our intuitive mobile interface.
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
                See exactly how different outlets spin the same story with our visual bias
                indicators.
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              People Are Breaking Free from Media Manipulation
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who've discovered what it means to be truly informed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I was tired of feeling manipulated by the news. FactFlow showed me how much bias I was consuming daily. Now I finally feel informed, not influenced."
              author="Michael K."
              role="Marketing Executive"
            />
            <TestimonialCard
              quote="As a teacher, I needed a reliable news source to discuss current events with my students. FactFlow provides the balanced perspective I've been searching for."
              author="Sarah J."
              role="High School Teacher"
            />
            <TestimonialCard
              quote="I was shocked to see how differently the same story was covered across media outlets. FactFlow has completely changed how I understand world events."
              author="David T."
              role="Software Engineer"
            />
          </div>
        </div>
      </section>

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
              <a href="#header">
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
