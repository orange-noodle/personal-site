import React, { useState } from 'react';

/**
 * Navbar component for site navigation.
 * Props:
 * - logo: React node or string for the logo/name
 * - links: Array of { label, href }
 * - profileImg: Optional profile image URL
 */
const Navbar = ({ logo = 'Michael Vereb', links = [], profileImg }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3 font-bold text-xl tracking-tight text-gray-900">
          {profileImg && (
            <img
              src={profileImg}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-[#CFE8C9]"
            />
          )}
          <span>{logo}</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-green-800 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-green-800 font-medium py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 