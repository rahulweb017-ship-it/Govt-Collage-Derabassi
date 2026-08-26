import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ variant = 'primary', size = 'md', href, withArrow, children, className = '', ...rest }) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300';
  
  const variants = {
    primary: 'bg-saffron-500 text-white hover:bg-saffron-600 rounded-lg font-semibold',
    secondary: 'bg-navy-700 text-white hover:bg-navy-600 rounded-lg font-semibold',
    outline: 'border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold',
    outlineDark: 'border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white rounded-lg font-semibold',
    ghost: 'text-saffron-500 hover:text-saffron-600 underline-offset-4 hover:underline font-semibold'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = variant === 'ghost' ? '' : (sizes[size] || sizes.md);

  const classes = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};

export default Button;
