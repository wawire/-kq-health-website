'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Phone, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface HeroData {
  id: number;
  image: string;
  video?: string;
  imageAlt: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryCta: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  trustElement?: {
    text: string;
    icon?: React.ReactNode;
  };
}

interface ModernHeroProps {
  className?: string;
  autoplayInterval?: number;
}

interface ImageLoadingState {
  [key: number]: 'loading' | 'loaded' | 'error';
}

// ============================================================================
// ANIMATION VARIANTS - Properly typed for Framer Motion
// ============================================================================

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const backgroundImageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.05,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

// ============================================================================
// DATA
// ============================================================================

const heroData: HeroData[] = [
  {
    id: 1,
    image: '/images/hero/medical-excellence.jpg',
    imageAlt: 'Professional medical team at KQ Medical Centre providing world-class healthcare',
    headline: 'Medical Excellence, Aviation Standards',
    subheadline:
      'Experience healthcare delivered with the precision and care that defines Kenya Airways — your trusted partner in health and wellness.',
    primaryCta: {
      text: 'Book Appointment',
      href: '/book-appointment',
      icon: <Calendar className="w-4 h-4" />,
    },
    secondaryCta: {
      text: 'Our Services',
      href: '/services',
      icon: <ArrowRight className="w-4 h-4" />,
    },
    trustElement: {
      text: 'Ministry of Health Registered',
      icon: <Shield className="w-4 h-4" />,
    },
  },
  {
    id: 2,
    image: '/images/hero/travel-health.jpg',
    video: '/videos/hero/travel-health.mp4',
    imageAlt: 'Travel health consultation and medical clearance for international passengers',
    headline: 'Travel With Confidence',
    subheadline:
      'Complete pre-travel health services, MEDIF clearance, and medical support for your journey — ensuring you fly safely, anywhere.',
    primaryCta: {
      text: 'Get Travel Clearance',
      href: '/services/travel-health',
      icon: <Calendar className="w-4 h-4" />,
    },
    secondaryCta: {
      text: 'Learn More',
      href: '/services/travel-health',
      icon: <ArrowRight className="w-4 h-4" />,
    },
    trustElement: {
      text: 'ICAO Compliant Services',
      icon: <Shield className="w-4 h-4" />,
    },
  },
  {
    id: 3,
    image: '/images/hero/emergency-care.jpg',
    imageAlt: 'Emergency medical team providing immediate healthcare response',
    headline: '24/7 Emergency Response',
    subheadline:
      'Advanced emergency care when every second counts — equipped with modern ambulances and expert medical teams ready to serve.',
    primaryCta: {
      text: 'Emergency Services',
      href: '/services/emergency',
      icon: <Phone className="w-4 h-4" />,
    },
    secondaryCta: {
      text: 'Call Emergency',
      href: 'tel:+254734104747',
      icon: <Phone className="w-4 h-4" />,
    },
    trustElement: {
      text: 'Level 3 Healthcare Facility',
      icon: <Shield className="w-4 h-4" />,
    },
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

const ModernHero: React.FC<ModernHeroProps> = ({ className = '', autoplayInterval = 7000 }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [imageLoadingStates, setImageLoadingStates] = useState<ImageLoadingState>({});
  const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const stopAutoplay = useCallback((): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  const startProgress = useCallback((): void => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);

    if (!isHovered && allImagesLoaded) {
      const step = 100 / (autoplayInterval / 100);
      progressRef.current = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + step));
      }, 100);
    }
  }, [isHovered, autoplayInterval, allImagesLoaded]);

  const startAutoplay = useCallback((): void => {
    startProgress();
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
      }, autoplayInterval);
    }
  }, [isHovered, autoplayInterval, startProgress]);

  const handleImageLoad = useCallback(
    (heroId: number): void => {
      setImageLoadingStates((prev) => {
        const newState = { ...prev, [heroId]: 'loaded' as const };
        const allLoaded = heroData.every((hero) => newState[hero.id] === 'loaded');
        if (allLoaded && !allImagesLoaded) {
          setAllImagesLoaded(true);
          setTimeout(() => {
            if (!isHovered) {
              startAutoplay();
            }
          }, 500);
        }
        return newState;
      });
    },
    [isHovered, allImagesLoaded, startAutoplay]
  );

  const handleImageError = useCallback(
    (heroId: number): void => {
      console.error(`Failed to load hero image for slide ${heroId}`);
      setImageLoadingStates((prev) => ({ ...prev, [heroId]: 'error' as const }));
      setTimeout(() => {
        handleImageLoad(heroId);
      }, 100);
    },
    [handleImageLoad]
  );

  const preloadImages = useCallback((): void => {
    heroData.forEach((hero) => {
      setImageLoadingStates((prev) => ({ ...prev, [hero.id]: 'loading' as const }));
      const img = document.createElement('img');
      img.onload = () => handleImageLoad(hero.id);
      img.onerror = () => handleImageError(hero.id);
      img.src = hero.image;
    });
  }, [handleImageLoad, handleImageError]);

  const goToNext = useCallback((): void => {
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
    stopAutoplay();
    startProgress();
  }, [stopAutoplay, startProgress]);

  const goToPrevious = useCallback((): void => {
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
    stopAutoplay();
    startProgress();
  }, [stopAutoplay, startProgress]);

  const goToSlide = useCallback(
    (index: number): void => {
      setCurrentSlide(index);
      stopAutoplay();
      startProgress();
    },
    [stopAutoplay, startProgress]
  );

  useEffect(() => {
    preloadImages();
    return () => {
      stopAutoplay();
    };
  }, [preloadImages, stopAutoplay]);

  useEffect(() => {
    if (isHovered) {
      stopAutoplay();
    } else if (allImagesLoaded) {
      startAutoplay();
    }
  }, [isHovered, allImagesLoaded, startAutoplay, stopAutoplay]);

  useEffect(() => {
    const currentHero = heroData[currentSlide];
    if (currentHero.video) {
      const videoRef = videoRefs.current[currentHero.id];
      if (videoRef) {
        videoRef.play().catch((err) => {
          console.warn('Video autoplay failed:', err);
        });
      }
    }
  }, [currentSlide]);

  const currentHero = heroData[currentSlide];
  const isCurrentImageLoaded = imageLoadingStates[currentHero.id] === 'loaded';

  return (
    <section
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Hero carousel"
    >
      {!allImagesLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-pulse z-0" />
      )}

      <div className="absolute inset-0 z-0">
        {heroData.map((hero, index) => (
          <motion.div
            key={hero.id}
            className="absolute inset-0"
            initial="initial"
            animate={index === currentSlide ? 'animate' : 'initial'}
            exit="exit"
            variants={backgroundImageVariants}
          >
            {hero.video && index === currentSlide ? (
              <video
                ref={(el) => {
                  videoRefs.current[hero.id] = el;
                }}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label={`Video: ${hero.imageAlt}`}
              >
                <source src={hero.video} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                onLoad={() => handleImageLoad(hero.id)}
                onError={() => handleImageError(hero.id)}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-5" />

      {isCurrentImageLoaded && (
        <div className="relative z-10 h-full">
          <div className="container mx-auto h-full flex items-center justify-center sm:justify-start px-[var(--space-4)] sm:px-[var(--space-6)]">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
              <motion.div
                className="space-y-[var(--space-4)] sm:space-y-[var(--space-5)] text-center sm:text-left"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                key={`hero-content-${currentSlide}`}
              >
                {currentHero.trustElement && (
                  <motion.div
                    className="inline-flex items-center space-x-2 px-[var(--space-3)] py-[var(--space-2)] bg-white/10 backdrop-blur-sm border border-white/20 rounded-[var(--radius-2xl)] text-xs sm:text-sm"
                    variants={itemVariants}
                    style={{
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-[var(--color-primary)]/20 rounded-full">
                      {currentHero.trustElement.icon}
                    </div>
                    <span className="font-medium text-white/95 tracking-wide font-heading">
                      {currentHero.trustElement.text}
                    </span>
                  </motion.div>
                )}

                <motion.h1
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight font-brand"
                  variants={itemVariants}
                >
                  {currentHero.headline}
                </motion.h1>

                <motion.div
                  className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto sm:mx-0"
                  variants={itemVariants}
                >
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light font-body">
                    {currentHero.subheadline}
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-[var(--space-3)] pt-[var(--space-2)] items-center sm:items-start"
                  variants={itemVariants}
                >
                  <Link
                    href={currentHero.primaryCta.href}
                    className="group inline-flex items-center justify-center px-[var(--space-6)] py-[var(--space-3)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-sm rounded-[var(--radius-lg)] transition-all duration-[var(--transition-base)] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/50 w-full sm:w-auto min-w-[160px] min-h-[48px] font-heading"
                    style={{
                      boxShadow: 'var(--shadow-kq)',
                    }}
                  >
                    <span className="mr-2">{currentHero.primaryCta.text}</span>
                    <span className="transition-transform duration-[var(--transition-base)] group-hover:translate-x-1">
                      {currentHero.primaryCta.icon}
                    </span>
                  </Link>

                  <Link
                    href={currentHero.secondaryCta.href}
                    className="group inline-flex items-center justify-center px-[var(--space-6)] py-[var(--space-3)] bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-[var(--radius-lg)] border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-[var(--transition-base)] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 w-full sm:w-auto min-w-[160px] min-h-[48px] font-heading"
                    style={{
                      boxShadow: 'var(--shadow-base)',
                    }}
                  >
                    <span className="mr-2">{currentHero.secondaryCta.text}</span>
                    <span className="transition-transform duration-[var(--transition-base)] group-hover:translate-x-1">
                      {currentHero.secondaryCta.icon}
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {heroData.length > 1 && allImagesLoaded && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div
            className={`transition-opacity duration-[var(--transition-slow)] ${
              isHovered ? 'opacity-100' : 'opacity-70'
            }`}
          >
            <button
              onClick={goToPrevious}
              className="absolute left-[var(--space-3)] sm:left-[var(--space-6)] top-1/2 -translate-y-1/2 p-[10px] bg-white/15 hover:bg-[var(--color-primary)]/20 backdrop-blur-md rounded-full text-white transition-all duration-[var(--transition-base)] transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 pointer-events-auto"
              style={{
                boxShadow: 'var(--shadow-lg)',
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-[var(--space-3)] sm:right-[var(--space-6)] top-1/2 -translate-y-1/2 p-[10px] bg-white/15 hover:bg-[var(--color-primary)]/20 backdrop-blur-md rounded-full text-white transition-all duration-[var(--transition-base)] transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 pointer-events-auto"
              style={{
                boxShadow: 'var(--shadow-lg)',
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      )}

      {heroData.length > 1 && allImagesLoaded && (
        <div className="absolute bottom-[var(--space-4)] sm:bottom-[var(--space-6)] left-1/2 -translate-x-1/2 z-20">
          <div
            className="flex items-center space-x-2 px-[var(--space-3)] py-[var(--space-2)] bg-white/10 backdrop-blur-md rounded-[var(--radius-2xl)] border border-white/20"
            style={{
              boxShadow: 'var(--shadow-base)',
            }}
          >
            {heroData.map((hero, index) => {
              const isLoaded = imageLoadingStates[hero.id] === 'loaded';
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={!isLoaded}
                  className={`relative transition-all duration-[var(--transition-base)] focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full disabled:opacity-40 disabled:cursor-not-allowed ${
                    index === currentSlide
                      ? 'w-6 h-1.5 bg-white'
                      : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}${!isLoaded ? ' (loading)' : ''}`}
                >
                  {index === currentSlide && (
                    <div
                      className="absolute top-0 left-0 h-full bg-[var(--color-primary)] rounded-full transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {allImagesLoaded && (
        <div className="hidden md:block absolute bottom-[var(--space-4)] left-[var(--space-6)] z-20">
          <motion.div
            className="flex flex-col items-center space-y-1 text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-wider uppercase font-heading">
              Scroll
            </span>
            <div className="w-px h-4 bg-white/30">
              <motion.div
                className="w-full bg-[var(--color-primary)]"
                animate={{
                  height: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ModernHero;
