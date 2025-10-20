'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Phone, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

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

// Image loading state management
interface ImageLoadingState {
  [key: number]: 'loading' | 'loaded' | 'error';
}

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

const ModernHero: React.FC<ModernHeroProps> = ({ className = '', autoplayInterval = 7000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageLoadingStates, setImageLoadingStates] = useState<ImageLoadingState>({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  /**
   * Enhanced image loading handler with error recovery
   */
  const handleImageLoad = useCallback(
    (heroId: number) => {
      setImageLoadingStates((prev) => {
        const newState = { ...prev, [heroId]: 'loaded' as const };

        // Check if all images are now loaded
        const allLoaded = heroData.every((hero) => newState[hero.id] === 'loaded');
        if (allLoaded && !allImagesLoaded) {
          setAllImagesLoaded(true);
          // Start autoplay only after all images are loaded
          setTimeout(() => {
            if (isAutoplay && !isHovered) {
              startAutoplay();
            }
          }, 500);
        }

        return newState;
      });
    },
    [isAutoplay, isHovered, allImagesLoaded]
  );

  /**
   * Handle image loading errors with fallback
   */
  const handleImageError = useCallback(
    (heroId: number) => {
      console.error(`Failed to load hero image for slide ${heroId}`);
      setImageLoadingStates((prev) => ({ ...prev, [heroId]: 'error' as const }));

      // Still mark as "loaded" to prevent blocking the carousel
      setTimeout(() => {
        handleImageLoad(heroId);
      }, 100);
    },
    [handleImageLoad]
  );

  /**
   * Preload all hero images on component mount
   */
  const preloadImages = useCallback(() => {
    heroData.forEach((hero) => {
      setImageLoadingStates((prev) => ({ ...prev, [hero.id]: 'loading' as const }));

      // Create image element for preloading
      const img = document.createElement('img');
      img.onload = () => handleImageLoad(hero.id);
      img.onerror = () => handleImageError(hero.id);
      img.src = hero.image;
    });
  }, [handleImageLoad, handleImageError]);

  // Progress tracking
  const startProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);

    if (isAutoplay && !isHovered && allImagesLoaded) {
      const step = 100 / (autoplayInterval / 100);
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + step;
        });
      }, 100);
    }
  }, [isAutoplay, isHovered, autoplayInterval, allImagesLoaded]);

  // Enhanced autoplay management
  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (isAutoplay && !isHovered && allImagesLoaded) {
      startProgress();
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
      }, autoplayInterval);
    }
  }, [isAutoplay, isHovered, autoplayInterval, startProgress, allImagesLoaded]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  // Enhanced navigation with loading checks
  const goToSlide = useCallback(
    (index: number) => {
      const targetHero = heroData[index];
      const isImageLoaded = imageLoadingStates[targetHero.id] === 'loaded';

      // Only navigate if the target image is loaded
      if (isImageLoaded || imageLoadingStates[targetHero.id] === 'error') {
        setCurrentSlide(index);
        setProgress(0);
        stopAutoplay();
        setTimeout(() => startAutoplay(), 200);
      } else {
        // If image not loaded, try to load it first
        console.log(`Image for slide ${index} not ready, attempting to load...`);
      }
    },
    [imageLoadingStates, startAutoplay, stopAutoplay]
  );

  const goToPrevious = useCallback(() => {
    goToSlide((currentSlide - 1 + heroData.length) % heroData.length);
  }, [currentSlide, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide((currentSlide + 1) % heroData.length);
  }, [currentSlide, goToSlide]);

  // Event handlers
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    stopAutoplay();
  }, [stopAutoplay]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (allImagesLoaded) {
      startAutoplay();
    }
  }, [startAutoplay, allImagesLoaded]);

  /**
   * Handle video loading and playback
   */
  const handleVideoLoad = useCallback((heroId: number, videoElement: HTMLVideoElement) => {
    videoRefs.current[heroId] = videoElement;
    videoElement.addEventListener('loadeddata', () => {
      console.log(`Video loaded for hero ${heroId}`);
    });
  }, []);

  // Effects
  useEffect(() => {
    preloadImages();
    return () => {
      stopAutoplay();
    };
  }, [preloadImages, stopAutoplay]);

  useEffect(() => {
    if (allImagesLoaded) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay, allImagesLoaded]);

  useEffect(() => {
    if (allImagesLoaded) {
      startProgress();
    }
  }, [currentSlide, startProgress, allImagesLoaded]);

  // Manage video playback based on current slide
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([heroIdStr, video]) => {
      const heroId = parseInt(heroIdStr);
      if (video) {
        if (heroData[currentSlide].id === heroId) {
          video.play().catch(console.error);
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const currentHero = heroData[currentSlide];
  const isCurrentImageLoaded = imageLoadingStates[currentHero.id] === 'loaded';

  // Animation variants with Kenya Airways timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      className={`relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] min-h-[400px] sm:min-h-[500px] max-h-[650px] overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="banner"
      aria-label="Kenya Airways Health Services - Professional Healthcare Excellence"
    >
      {/* Loading Overlay - Show while images are loading */}
      {!allImagesLoaded && (
        <div className="absolute inset-0 z-30 bg-gray-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
            <p className="text-white/80 text-sm font-medium">Loading experience...</p>
          </div>
        </div>
      )}

      {/* Background Images/Videos with KQ Brand Gradient */}
      <div className="absolute inset-0">
        {heroData.map((hero, index) => (
          <div
            key={hero.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide && isCurrentImageLoaded
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-[1.02]'
            }`}
          >
            {hero.video ? (
              <>
                {/* Video Element */}
                <video
                  ref={(el) => el && handleVideoLoad(hero.id, el)}
                  src={hero.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoadStart={() => console.log(`Video loading started for hero ${hero.id}`)}
                  onLoadedData={() => console.log(`Video loaded for hero ${hero.id}`)}
                />
                {/* Fallback Image */}
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  priority={index <= 1} // Prioritize first two images
                  className="absolute inset-0 object-cover transition-transform duration-1000 ease-out"
                  sizes="100vw"
                  quality={90}
                  onLoad={() => handleImageLoad(hero.id)}
                  onError={() => handleImageError(hero.id)}
                  style={{
                    opacity: imageLoadingStates[hero.id] === 'loaded' ? 1 : 0,
                  }}
                />
              </>
            ) : (
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority={index <= 1} // Prioritize first two images
                className="object-cover transition-transform duration-1000 ease-out"
                sizes="100vw"
                quality={90}
                onLoad={() => handleImageLoad(hero.id)}
                onError={() => handleImageError(hero.id)}
                style={{
                  opacity: imageLoadingStates[hero.id] === 'loaded' ? 1 : 0,
                }}
              />
            )}

            {/* Kenya Airways Brand Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gray-900)]/85 via-[var(--color-gray-900)]/60 to-[var(--color-gray-900)]/40 sm:from-[var(--color-gray-900)]/75 sm:via-[var(--color-gray-900)]/50 sm:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gray-900)]/70 via-transparent to-transparent sm:from-[var(--color-gray-900)]/50" />
            {/* KQ Red accent gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Content - Only show when current image is loaded */}
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
                {/* Trust Badge */}
                {currentHero.trustElement && (
                  <motion.div
                    className="inline-flex items-center space-x-2 px-[var(--space-3)] py-[var(--space-2)] bg-white/10 backdrop-blur-sm border border-white/20 rounded-[var(--radius-2xl)] text-xs sm:text-sm"
                    variants={itemVariants}
                    style={{
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-[var(--color-primary)]/20 rounded-full">
                      <span className="text-white text-xs">
                        {React.cloneElement(currentHero.trustElement.icon as React.ReactElement, {
                          className: 'w-3 h-3 sm:w-4 sm:h-4',
                        })}
                      </span>
                    </div>
                    <span className="font-medium text-white/95 tracking-wide font-heading">
                      {currentHero.trustElement.text}
                    </span>
                  </motion.div>
                )}

                {/* Headline */}
                <motion.h1
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight font-brand"
                  variants={itemVariants}
                >
                  {currentHero.headline}
                </motion.h1>

                {/* Subheadline */}
                <motion.div
                  className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto sm:mx-0"
                  variants={itemVariants}
                >
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light font-body">
                    {currentHero.subheadline}
                  </p>
                </motion.div>

                {/* CTA Buttons */}
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
                      {React.cloneElement(currentHero.primaryCta.icon as React.ReactElement, {
                        className: 'w-4 h-4',
                      })}
                    </span>
                    -+
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
                      {React.cloneElement(currentHero.secondaryCta.icon as React.ReactElement, {
                        className: 'w-4 h-4',
                      })}
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Controls - Only show when images are loaded */}
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

      {/* Slide Indicators - Enhanced with loading states */}
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

      {/* Scroll Indicator - KQ Brand */}
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
