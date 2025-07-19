import React from 'react';

/**
 * Footer component for site footer.
 * Props:
 * - year: Copyright year
 * - name: Name or brand
 * - links: Array of { label, href, icon }
 */
const Footer = ({
  year = new Date().getFullYear(),
  name = 'Michael Vereb',
  links = [],
}) => (
  <footer className="w-full bg-white border-t py-6 mt-12">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
      <div className="text-gray-500 text-sm">© {year} {name}</div>
      <div className="flex gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-400 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon || link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer; 