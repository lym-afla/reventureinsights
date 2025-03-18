'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.',
      });
      return;
    }
    
    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: '',
    });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Thank you! Your request has been submitted.',
        });
        setEmail('');
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  return (
    <div className="f-cta-form-block">
      {status.submitted ? (
        <div className="f-success-message">
          <p>{status.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="f-cta-form-wrapper">
          <input
            className={`f-input-outlined ${status.error ? 'error' : ''}`}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="f-form-button"
            disabled={status.submitting}
          >
            {status.submitting ? 'Submitting...' : 'Request Access'}
          </button>
        </form>
      )}
      
      {status.error && <div className="text-error">{status.message}</div>}
    </div>
  );
};

export default ContactForm; 