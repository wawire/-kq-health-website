import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium font-heading transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap border-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg hover:scale-105 active:scale-100',
        secondary:
          'bg-secondary text-white hover:bg-secondary-dark shadow-md hover:shadow-lg hover:scale-105 active:scale-100',
        accent:
          'bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg hover:scale-105 active:scale-100',
        outline:
          'border-2 border-secondary/20 text-secondary hover:border-secondary hover:text-secondary-dark bg-transparent',
        ghost: 'text-primary hover:text-primary-dark bg-transparent',
        link: 'text-primary hover:text-primary-dark bg-transparent p-0 h-auto font-normal',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg hover:scale-105 active:scale-100',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        default: 'h-11 px-6 py-2.5',
        lg: 'h-12 px-8 py-3 text-base',
        xl: 'h-14 px-10 py-4 text-lg',
        icon: 'h-10 w-10 p-0',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      children,
      href,
      external,
      loading,
      startIcon,
      endIcon,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const buttonClasses = cn(buttonVariants({ variant, size, fullWidth, className }));
    const isDisabled = disabled || loading;

    const buttonContent = (
      <>
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!loading && startIcon && <span className="mr-2">{startIcon}</span>}
        {children}
        {!loading && endIcon && <span className="ml-2">{endIcon}</span>}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
            aria-disabled={isDisabled ? 'true' : 'false'}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {buttonContent}
          </a>
        );
      }

      return (
        <Link href={href} className={buttonClasses} aria-disabled={isDisabled ? 'true' : 'false'}>
          {buttonContent}
        </Link>
      );
    }

    return (
      <button className={buttonClasses} ref={ref} disabled={isDisabled} type={type} {...props}>
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
