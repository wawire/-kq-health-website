// components/Contact/ContactForm.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const services = [
    'Medical Clearance (MEDIF)',
    'Travel Health Consultation',
    'Emergency Medical Services',
    'Corporate Health Programs',
    'General Inquiry',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="bg-white rounded-2xl p-8 border border-[var(--color-gray-200)]"
        style={{ boxShadow: 'var(--shadow-base)' }}
      >
        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-6 font-heading">
          Send Us a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2 font-heading">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-gray-400)]" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors duration-200 font-body"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2 font-heading">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-gray-400)]" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors duration-200 font-body"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2 font-heading">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-gray-400)]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors duration-200 font-body"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2 font-heading">
              Service Needed
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors duration-200 font-body"
            >
              <option value="">Select a service</option>
              {services.map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2 font-heading">
              Message *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[var(--color-gray-400)]" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-12 pr-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors duration-200 resize-none font-body"
                placeholder="Tell us about your medical needs, travel dates, or any specific requirements..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 font-heading"
            style={{ boxShadow: 'var(--shadow-base)' }}
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
