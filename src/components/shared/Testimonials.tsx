'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function Testimonials({ testimonials, title, subtitle }: TestimonialsProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-lg text-foreground-muted">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-foreground-muted mb-6 italic relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-foreground-muted">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
