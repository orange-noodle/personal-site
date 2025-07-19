import React from 'react';

/**
 * AboutSection component for personal bio and links.
 * Props:
 * - image: Profile image URL
 * - bio: Bio/description text
 * - links: Array of { label, href, icon }
 */
const AboutSection = ({
  image = '',
  bio = 'Design that works and converts.',
  links = [
    { label: 'LinkedIn', href: '#', icon: <span>in</span> },
    { label: 'Webflow', href: '#', icon: <span>W</span> },
    { label: 'Figma', href: '#', icon: <span>F</span> },
    { label: 'dribbble', href: '#', icon: <span>D</span> },
    { label: 'Behance', href: '#', icon: <span>B</span> },
    { label: 'X/Twitter', href: '#', icon: <span>X</span> },
    { label: 'Email', href: '#', icon: <span>@</span> },
  ],
}) => (
  <section className="flex flex-col md:flex-row items-center gap-8 py-12">
    {image && (
      <img
        src={image}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-md mb-4 md:mb-0"
      />
    )}
    <div className="flex-1 text-center md:text-left">
      <p className="text-lg text-gray-700 mb-4">{bio}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
            <span className="hidden sm:inline">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection; 