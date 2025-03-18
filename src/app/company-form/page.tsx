'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CompanyForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    foundedYear: '',
    sector: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    fundingStage: '',
    teamSize: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: '',
    });

    try {
      // This would be an API endpoint you create
      const response = await fetch('/api/company-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: 'Your company profile has been submitted successfully!',
        });
        
        // Reset form after success
        setFormData({
          companyName: '',
          website: '',
          foundedYear: '',
          sector: '',
          description: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          fundingStage: '',
          teamSize: '',
        });
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit company profile');
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  return (
    <div className="f-section-large">
      <div className="f-container-regular">
        <div className="f-margin-bottom-32">
          <h1 className="f-h1-heading">Company Profile Form</h1>
          <p className="f-paragraph-large">
            Fill in your company details to be included in our database. This information will be 
            used to connect you with potential investors.
          </p>
        </div>

        {formStatus.isSuccess ? (
          <div className="target-card">
            <h3 className="f-h3-heading">Thank you!</h3>
            <p className="f-paragraph-large">{formStatus.message}</p>
            <div className="f-margin-bottom-24"></div>
            <Link href="/" className="f-button-primary">
              <div>Return to Home</div>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="target-card">
            <div className="f-margin-bottom-24">
              <h3 className="f-h3-heading">Company Information</h3>
            </div>
            
            <div className="f-margin-bottom-16">
              <label htmlFor="companyName" className="f-paragraph-small">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="f-input-outlined w-input"
              />
            </div>
            
            <div className="f-margin-bottom-16">
              <label htmlFor="website" className="f-paragraph-small">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="f-input-outlined w-input"
              />
            </div>
            
            <div className="f-margin-bottom-16">
              <label htmlFor="foundedYear" className="f-paragraph-small">
                Year Founded
              </label>
              <input
                type="number"
                id="foundedYear"
                name="foundedYear"
                value={formData.foundedYear}
                onChange={handleChange}
                min="1900"
                max={new Date().getFullYear()}
                className="f-input-outlined w-input"
              />
            </div>
            
            <div className="f-margin-bottom-16">
              <label htmlFor="sector" className="f-paragraph-small">
                Sector/Industry *
              </label>
              <input
                type="text"
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                required
                className="f-input-outlined w-input"
              />
            </div>
            
            <div className="f-margin-bottom-24">
              <label htmlFor="description" className="f-paragraph-small">
                Company Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="f-input-outlined w-input"
              ></textarea>
            </div>
            
            <div className="f-margin-bottom-24">
              <h3 className="f-h3-heading">Contact Information</h3>
            </div>
            
            <div className="f-margin-bottom-16">
              <label htmlFor="contactName" className="f-paragraph-small">
                Contact Name *
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="f-input-outlined w-input"
              />
            </div>
            
            <div className="f-margin-bottom-16">
              <label htmlFor="contactEmail" className="f-paragraph-small">
                Contact Email *
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
                className="f-input-outlined w-input"
              />
            </div>
            
            <div className="f-margin-bottom-16">
              <label htmlFor="contactPhone" className="f-paragraph-small">
                Contact Phone
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="f-input-outlined w-input"
              />
            </div>
            
            <div className="f-margin-bottom-24">
              <h3 className="f-h3-heading">Additional Details</h3>
            </div>
            
            <div className="f-margin-bottom-16">
              <label htmlFor="fundingStage" className="f-paragraph-small">
                Current Funding Stage
              </label>
              <select
                id="fundingStage"
                name="fundingStage"
                value={formData.fundingStage}
                onChange={handleChange}
                className="f-input-outlined w-input"
              >
                <option value="">Select funding stage</option>
                <option value="Pre-seed">Pre-seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="Series C+">Series C+</option>
                <option value="Profitable">Profitable</option>
              </select>
            </div>
            
            <div className="f-margin-bottom-32">
              <label htmlFor="teamSize" className="f-paragraph-small">
                Team Size
              </label>
              <input
                type="number"
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                min="1"
                className="f-input-outlined w-input"
              />
            </div>
            
            {formStatus.isError && (
              <div className="f-margin-bottom-24 text-error">
                {formStatus.message}
              </div>
            )}
            
            <div className="f-button-wrapper">
              <button 
                type="submit" 
                className="f-button-primary" 
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? 'Submitting...' : 'Submit Company Profile'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 