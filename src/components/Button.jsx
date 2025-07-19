import React from 'react';

/**
 * Button component for actions and CTAs.
 * Props:
 * - children: Button label
 * - onClick: Click handler
 * - variant: 'primary' | 'secondary'
 * - type: 'button' | 'submit' | 'reset'
 * - className: Additional classes
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) => {
  const base =
    'inline-block px-6 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  const variants = {
    primary:
      'bg-[#1E3A34] text-white hover:bg-green-900 focus:ring-[#1E3A34]',
    secondary:
      'bg-[#CFE8C9] text-[#1E3A34] hover:bg-green-100 focus:ring-[#CFE8C9]',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 