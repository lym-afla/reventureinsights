"use client"

import type React from "react"

import { useState } from "react"

const steps = [
  "Company details (1/2)",
  "Company details (2/2)",
  "Financials",
  "Credentials",
  "Portfolio",
  "Team",
  "Rounds",
]

const CompanyFormComponent = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    primarySector: "",
    secondarySector: "",
    companyType: "",
    propcoStrategy: "",
    website: "",
    yearFounded: "",
    employeeCount: "",
    developmentCapability: "",
    aum: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would submit the form data to your backend
    alert("Form submitted successfully!")
  }

  return (
    <div className="company-form-wrapper">
      <form onSubmit={handleSubmit} className="f-contact-form">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center border-b border-gray-300 pb-5 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <button
                type="button"
                onClick={() => setCurrentStep(index)}
                className={`text-sm font-medium ${index === currentStep ? "text-primary font-bold" : "text-gray-500"}`}
              >
                {step}
              </button>
              {index < steps.length - 1 && (
                <div className="mx-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Company Details (1/2) */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name*
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Enter your full company name"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Company description
              </label>
              <textarea
                id="companyDescription"
                name="companyDescription"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Provide brief description of your company and its main activities"
                value={formData.companyDescription}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="primarySector" className="block text-sm font-medium text-gray-700 mb-1">
                Primary sector*
              </label>
              <select
                id="primarySector"
                name="primarySector"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                value={formData.primarySector}
                onChange={handleInputChange}
              >
                <option value="">Select one...</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Hotels">Hotels</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Leisure">Leisure</option>
                <option value="Office">Office</option>
                <option value="Residential">Residential</option>
                <option value="Retail">Retail</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* More fields would go here */}

            <div className="text-xs text-gray-500">* Required fields</div>

            <div className="flex justify-end">
              <button type="button" onClick={handleNext} className="f-button-primary">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2-7: Other form steps would go here */}
        {currentStep > 0 && currentStep < 6 && (
          <div className="space-y-6">
            <p className="text-lg">
              This is step {currentStep + 1}: {steps[currentStep]}
            </p>
            <p>Form fields for this step would go here.</p>

            <div className="text-xs text-gray-500">* Required fields</div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
              <button type="button" onClick={handleNext} className="f-button-primary">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Final Step: Submit */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <p className="text-lg">This is the final step: {steps[currentStep]}</p>
            <p>Form fields for this step would go here.</p>

            <div className="text-xs text-gray-500">* Required fields</div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
              <button type="submit" className="f-button-primary">
                Submit form
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default CompanyFormComponent