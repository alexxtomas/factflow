"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setError(true)
      return
    }

    setError(false)
    setSubmitted(true)
    // In a real app, you would submit to your API here
  }

  return (
    <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Stay Informed, Not Influenced</h3>
        <p className="text-gray-600">
          Get a free weekly digest of the most important news, analyzed for bias and factual accuracy.
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
          <p className="text-green-800">Thank you! Check your inbox to confirm your subscription.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <Input
                type="email"
                placeholder="Enter your email"
                className={`w-full ${error ? "border-red-500 focus:ring-red-500" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>Please enter a valid email address</span>
                </div>
              )}
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      )}
    </div>
  )
}

