'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null); 

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Check your environment variables.');
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey
      );

      console.log('SUCCESS!', response.status, response.text);

      if (response.status === 200) {
        setSubmissionResult('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setSubmissionResult('error');
        console.error('EmailJS error:', response);
      }


    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmissionResult('error');

    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <section className="py-20 px-20">
        <h2 className="text-4xl font-bold"><span className="special">Contact</span> Us</h2>
        <p className="text-lg mt-5">Please fill out the form below</p>

        {submissionResult === 'success' && (
          <div className="text-green-500">Thank you! Your message has been sent.</div>
        )}

        {submissionResult === 'error' && (
          <div className="text-red-500">An error occurred. Please try again.</div>
        )}


        <form className="flex flex-col gap-10 mt-10" onSubmit={handleSubmit}>
          <div className="w-[90%] flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-[#ccc] w-full px-4 py-2 rounded"
              required 
            />
          </div>

          <div className="w-[90%] flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#ccc] w-full px-4 py-2 rounded"
              required 
            />
          </div>

          <div className="w-[90%] flex flex-col gap-2">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-[#ccc] h-52 rounded w-full px-4 py-2"
              required 
            />
          </div>

          <button
            type="submit"
            className="border w-fit py-2 px-4 text-center bg-[#333] text-white cursor-pointer rounded-[10px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </section>
    </div>
  );
}