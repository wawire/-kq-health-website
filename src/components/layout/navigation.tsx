'use client';

import { Building2, ChevronDown, HeartPulse, Plane, Stethoscope, Users } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface NavigationProps {
  isMobile?: boolean;
  className?: string;
  onLinkClick?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  description?: string;
}

// Loading state interface for better type safety
interface LoadingState {
  [href: string]: boolean;
}

const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'KQ Medical Clinics',
        href: '/medical-clinics',
        icon: <Stethoscope className="h-5 w-5" />,
        description: 'Comprehensive medical care at our clinics',
      },
      {
        label: 'Travel Health Advisory',
        href: '/travel-health',
        icon: <Plane className="h-5 w-5" />,
        description: 'Pre-travel consultations and vaccinations',
      },
      {
        label: 'Medical Tourism & Air Medical',
        href: '/medical-tourism',
        icon: <Building2 className="h-5 w-5" />,
        description: 'Medical tourism and air ambulance services',
      },
      {
        label: 'Corporate Health Solutions',
        href: '/corporate-health',
        icon: <Users className="h-5 w-5" />,
        description: 'Workplace health programs and employee wellness',
      },
      {
        label: 'Medical & Special Needs Assistance',
        href: '/medical-special-needs',
        icon: <HeartPulse className="h-5 w-5" />,
        description: 'Personalized medical support and specialized assistance programs',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Navigation: React.FC<NavigationProps> = ({
  isMobile = false,
  className = '',
  onLinkClick,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [loadingStates, setLoadingStates] = useState<LoadingState>({});
  const pathname = usePathname();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadingTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

  /**
   * Clear all loading states when pathname changes
   * This ensures loading indicators are removed when navigation completes
   */
  useEffect(() => {
    setLoadingStates({});
    // Clear any pending loading timeouts
    Object.values(loadingTimeoutRef.current).forEach((timeout) => {
      clearTimeout(timeout);
    });
    loadingTimeoutRef.current = {};
  }, [pathname]);

  /**
   * Cleanup timeouts on component unmount
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      Object.values(loadingTimeoutRef.current).forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  /**
   * Handle dropdown interactions for desktop
   */
  const handleMouseEnter = useCallback(
    (label: string) => {
      if (!isMobile) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setOpenDropdown(label);
      }
    },
    [isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 150);
    }
  }, [isMobile]);

  /**
   * Handle dropdown toggle for mobile
   */
  const handleClick = useCallback(
    (label: string, hasChildren: boolean, e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (isMobile && hasChildren) {
        setOpenDropdown(openDropdown === label ? null : label);
      }
    },
    [isMobile, openDropdown]
  );

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, label: string, hasChildren: boolean) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(label, hasChildren);
      }
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    },
    [handleClick]
  );

  /**
   * Enhanced link click handler with robust loading state management
   */
  const handleLinkClick = useCallback(
    (href: string, e?: React.MouseEvent) => {
      // Prevent default if we want to handle navigation programmatically
      if (e) {
        e.preventDefault();
      }

      try {
        // Set loading state for this specific href
        setLoadingStates((prev) => ({ ...prev, [href]: true }));

        // Set a timeout to clear loading state in case navigation fails or is slow
        const loadingTimeout = setTimeout(() => {
          setLoadingStates((prev) => {
            const newState = { ...prev };
            delete newState[href];
            return newState;
          });
        }, 5000); // Clear after 5 seconds max

        loadingTimeoutRef.current[href] = loadingTimeout;

        // Navigate using Next.js router for better control
        router.push(href);

        // Call the optional callback (for mobile menu close, etc.)
        if (onLinkClick) {
          onLinkClick();
        }
      } catch (error) {
        console.error('Navigation error:', error);
        // Clear loading state on error
        setLoadingStates((prev) => {
          const newState = { ...prev };
          delete newState[href];
          return newState;
        });
      }
    },
    [router, onLinkClick]
  );

  /**
   * Check if a link is currently active
   */
  const isActiveLink = useCallback(
    (href: string): boolean => {
      if (href === '/') {
        return pathname === '/';
      }
      return pathname.startsWith(href);
    },
    [pathname]
  );

  /**
   * Check if a link is currently loading
   */
  const isLinkLoading = useCallback(
    (href: string): boolean => {
      return Boolean(loadingStates[href]);
    },
    [loadingStates]
  );

  /**
   * Loading spinner component
   */
  const LoadingSpinner: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
    <div
      className={`${className} animate-spin rounded-full border border-current border-t-transparent`}
      role="status"
      aria-label="Loading"
    />
  );

  // Mobile Navigation Render
  if (isMobile) {
    return (
      <nav className={`space-y-1 ${className}`} role="navigation" aria-label="Mobile navigation">
        {navigationItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={(e) => handleClick(item.label, true, e)}
                  onKeyDown={(e) => handleKeyDown(e, item.label, true)}
                  className={`w-full flex items-center justify-between px-4 py-4 text-base rounded-xl transition-all duration-300 ${
                    isActiveLink(item.href)
                      ? 'text-primary bg-primary/5 font-semibold'
                      : 'text-gray-800 hover:text-primary hover:bg-gray-50 font-medium'
                  }`}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  type="button"
                >
                  <span className="flex items-center space-x-3">
                    {item.icon}
                    <span className="font-heading">{item.label}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openDropdown === item.label ? 'rotate-180 text-primary' : 'text-gray-400'
                    }`}
                  />
                </button>
                <div
                  className={`ml-4 mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                    openDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.children.map((child) => (
                    <button
                      key={child.href}
                      onClick={(e) => handleLinkClick(child.href, e)}
                      disabled={isLinkLoading(child.href)}
                      className={`w-full flex items-start space-x-3 px-4 py-4 rounded-lg transition-all duration-300 group disabled:opacity-60 ${
                        isActiveLink(child.href)
                          ? 'text-primary bg-primary/8 font-medium'
                          : 'text-gray-700 hover:text-primary hover:bg-gray-50 font-normal'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isActiveLink(child.href)
                            ? 'text-primary bg-primary/15'
                            : 'text-gray-500 group-hover:text-primary bg-gray-100 group-hover:bg-primary/10'
                        }`}
                      >
                        {child.icon}
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center">
                          <div className="font-heading text-sm leading-tight truncate">
                            {child.label}
                          </div>
                          {isLinkLoading(child.href) && (
                            <div className="ml-2 flex-shrink-0">
                              <LoadingSpinner className="h-3 w-3" />
                            </div>
                          )}
                        </div>
                        {child.description && (
                          <div className="text-sm text-gray-600 mt-1 leading-tight">
                            {child.description}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <button
                onClick={(e) => handleLinkClick(item.href, e)}
                disabled={isLinkLoading(item.href)}
                className={`w-full flex items-center justify-between px-4 py-4 text-base rounded-xl transition-all duration-300 disabled:opacity-60 ${
                  isActiveLink(item.href)
                    ? 'text-primary bg-primary/5 font-semibold'
                    : 'text-gray-800 hover:text-primary hover:bg-gray-50 font-medium'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="font-heading">{item.label}</span>
                </div>
                {isLinkLoading(item.href) && <LoadingSpinner />}
              </button>
            )}
          </div>
        ))}
      </nav>
    );
  }

  // Desktop Navigation Render
  return (
    <nav
      className={`flex items-center space-x-6 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          {item.children ? (
            <>
              <button
                onClick={(e) => handleClick(item.label, true, e)}
                onKeyDown={(e) => handleKeyDown(e, item.label, true)}
                className={`flex items-center space-x-1 px-4 py-3 text-sm rounded-lg transition-all duration-300 ${
                  isActiveLink(item.href)
                    ? 'text-primary font-semibold bg-primary/5'
                    : 'text-gray-800 hover:text-primary hover:bg-gray-50 font-medium'
                }`}
                aria-expanded={openDropdown === item.label}
                aria-haspopup="true"
                type="button"
              >
                <span className="font-heading">{item.label}</span>
                <ChevronDown className="h-4 w-4 opacity-60" />
              </button>

              {openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-6 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-6 pb-4 mb-2 border-b border-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-900 font-heading">
                        Healthcare Services
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 px-2">
                    {item.children.map((child) => (
                      <button
                        key={child.href}
                        onClick={(e) => handleLinkClick(child.href, e)}
                        disabled={isLinkLoading(child.href)}
                        className={`w-full flex items-start space-x-4 px-4 py-4 transition-all duration-300 rounded-lg group text-left disabled:opacity-60 ${
                          isActiveLink(child.href)
                            ? 'text-primary bg-primary/8'
                            : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                        }`}
                      >
                        <div
                          className={`p-2.5 rounded-lg transition-colors duration-300 ${
                            isActiveLink(child.href)
                              ? 'bg-primary/15 text-primary'
                              : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                          }`}
                        >
                          {child.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <div
                              className={`font-heading text-sm leading-tight ${
                                isActiveLink(child.href) ? 'font-semibold' : 'font-medium'
                              }`}
                            >
                              {child.label}
                            </div>
                            {isLinkLoading(child.href) && (
                              <div className="ml-2 flex-shrink-0">
                                <LoadingSpinner className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                          {child.description && (
                            <div className="text-sm text-gray-600 mt-1 leading-relaxed pr-2">
                              {child.description}
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <button
              onClick={(e) => handleLinkClick(item.href, e)}
              disabled={isLinkLoading(item.href)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm rounded-lg transition-all duration-300 disabled:opacity-60 ${
                isActiveLink(item.href)
                  ? 'text-primary font-semibold bg-primary/5'
                  : 'text-gray-800 hover:text-primary hover:bg-gray-50 font-medium'
              }`}
            >
              <span className="font-heading">{item.label}</span>
              {isLinkLoading(item.href) && (
                <div className="ml-1 flex-shrink-0">
                  <LoadingSpinner className="h-3 w-3" />
                </div>
              )}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
