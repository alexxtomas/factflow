'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function HeroEmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 flex items-center">
          <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
          <p className="text-blue-800">Thanks! You're on the list.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className={`w-full h-12 px-4 ${
                  error ? 'border-red-500 focus:ring-red-500' : 'border-blue-200'
                }`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                disabled={isSubmitting}
              />
              {error && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>{error}</span>
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold h-12 px-6"
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
                <span className="flex items-center">
                  Join the waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              )}
            </Button>
          </div>
          <p className="text-xs text-blue-100 mt-3">
            Join our unbiased news revolution. No spam, only important updates about the launch.
          </p>
        </form>
      )}
    </div>
  );
}
