"use client"

import type React from "react"

import { useState } from "react"

const CTASection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
      setEmail("")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="cta" className="f-section-large">
      <div className="f-container-regular">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="target-card investor">
            <div className="text-center">
              <div className="f-margin-bottom-135">
                <h2 className="f-h2-heading">Interested to get access?</h2>
              </div>
              <div className="f-margin-bottom-48">
                <p className="f-paragraph-large">Request access by providing your email below</p>
              </div>
              <div className="max-w-md mx-auto">
                {isSubmitted ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-md">
                    <p>Thank you! Your submission has been received!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                    <input
                      className={`f-input-outlined flex-1 ${error ? "border-red-500" : ""}`}
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="f-form-button" disabled={isSubmitting}>
                      {isSubmitting ? "Please wait..." : "Request Access"}
                    </button>
                  </form>
                )}
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </div>
          </div>
          <div className="target-card company">
            <div className="text-center">
              <div className="f-margin-bottom-135">
                <h2 className="f-h2-heading">Ready to fill the form?</h2>
              </div>
              <div className="f-margin-bottom-48">
                <p className="f-paragraph-large">Provide your key information to be included in our database</p>
              </div>
              <div className="flex justify-center">
                <a href="/company-form" className="f-button-primary fill-form">
                  <div>Fill Company Form</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection

