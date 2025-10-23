'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

interface ImageCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  buttonText?: string;
  buttonHref?: string;
  delay?: number;
}

export default function ImageCard({
  title,
  description,
  icon,
  image,
  buttonText,
  buttonHref,
  delay = 0,
}: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Background Image or Gradient */}
      <div className="absolute inset-0">
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/90 to-primary-dark/90" />
        )}
      </div>

      {/* Content */}
      <div className="relative p-8 min-h-[320px] flex flex-col justify-end">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 font-heading">{title}</h3>
        <p className="text-white/90 mb-6 line-clamp-3">{description}</p>
        {buttonText && buttonHref && (
          <Button href={buttonHref} variant="accent" size="sm" className="self-start">
            {buttonText}
          </Button>
        )}
      </div>
    </motion.div>
  );
}
