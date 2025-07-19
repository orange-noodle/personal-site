import React from 'react';

/**
 * SectionHeading for section titles.
 * Props:
 * - children: Heading text
 * - className: Additional classes
 */
const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${className}`}>
    {children}
  </h2>
);

export default SectionHeading; 