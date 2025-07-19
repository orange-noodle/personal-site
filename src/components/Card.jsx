import React from 'react';
import Button from './Button';

/**
 * Card component for projects or work.
 * Props:
 * - image: Image URL
 * - title: Card title
 * - description: Card description
 * - link: { label, href }
 * - children: Additional content
 */
const Card = ({ image, title, description, link, children }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full md:w-48 h-48 object-cover md:rounded-l-2xl md:rounded-r-none rounded-t-2xl md:rounded-t-none"
      />
    )}
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
      {link && (
        <Button as="a" href={link.href} className="mt-2" target="_blank" rel="noopener noreferrer">
          {link.label}
        </Button>
      )}
    </div>
  </div>
);

export default Card; 