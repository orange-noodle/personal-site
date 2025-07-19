import React from 'react';
import Button from './Button';

/**
 * Hero section component for prominent intro.
 * Props:
 * - heading: Main heading text
 * - subheading: Subheading/description text
 * - cta: { label, onClick }
 */
const Hero = ({
  heading = 'Web + Product Designer',
  subheading = 'Websites that convert, products people use',
  cta = { label: 'Let’s connect', onClick: () => {} },
}) => (
  <section className="w-full py-16 bg-white text-center flex flex-col items-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{heading}</h1>
    <p className="text-xl md:text-2xl text-gray-600 mb-8">{subheading}</p>
    <Button onClick={cta.onClick}>{cta.label}</Button>
  </section>
);

export default Hero; 