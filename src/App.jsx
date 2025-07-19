import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeading from './components/SectionHeading';
import Card from './components/Card';
import AboutSection from './components/AboutSection';
import Input from './components/Input';
import Modal from './components/Modal';
import Button from './components/Button';
import Footer from './components/Footer';

const demoLinks = [
  { label: 'Story', href: '#' },
  { label: 'Work', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Why me', href: '#' },
  { label: 'Connect', href: '#' },
];

const demoSocialLinks = [
  { label: 'LinkedIn', href: '#', icon: <span>in</span> },
  { label: 'Webflow', href: '#', icon: <span>W</span> },
  { label: 'Figma', href: '#', icon: <span>F</span> },
  { label: 'dribbble', href: '#', icon: <span>D</span> },
  { label: 'Behance', href: '#', icon: <span>B</span> },
  { label: 'X/Twitter', href: '#', icon: <span>X</span> },
  { label: 'Email', href: '#', icon: <span>@</span> },
];

const demoProjects = [
  {
    image: '',
    title: 'Arbor',
    description: 'Carbon accounting, made easy.',
    link: { label: 'View Project', href: '#' },
  },
  {
    image: '',
    title: 'MorgenLevering',
    description: 'Norway’s leading breakfast delivery app.',
    link: { label: 'View Project', href: '#' },
  },
];

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navbar logo="Michael Vereb" links={demoLinks} />
      <Hero
        heading="Web + Product Designer"
        subheading="Websites that convert, products people use"
        cta={{ label: 'Let’s connect', onClick: () => setModalOpen(true) }}
      />
      <main className="max-w-4xl mx-auto p-4 space-y-12 flex-1 w-full">
        <SectionHeading>Component Gallery</SectionHeading>
        <section className="space-y-8">
          <SectionHeading className="text-2xl mb-2">Project Card</SectionHeading>
          <div className="space-y-6">
            {demoProjects.map((proj) => (
              <Card key={proj.title} {...proj} />
            ))}
          </div>
        </section>
        <section>
          <SectionHeading className="text-2xl mb-2">About Section</SectionHeading>
          <AboutSection
            image=""
            bio="Design that works and converts."
            links={demoSocialLinks}
          />
        </section>
        <section>
          <SectionHeading className="text-2xl mb-2">Input Field</SectionHeading>
          <Input
            label="Your Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your name"
          />
        </section>
        <section>
          <SectionHeading className="text-2xl mb-2">Button Variants</SectionHeading>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </section>
        <section>
          <SectionHeading className="text-2xl mb-2">Modal Example</SectionHeading>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Contact">
            <p className="mb-4">This is a modal example. You can put any content here.</p>
            <Button onClick={() => setModalOpen(false)} variant="primary">Close</Button>
          </Modal>
        </section>
      </main>
      <Footer name="Michael Vereb" links={demoSocialLinks} />
    </div>
  );
};

export default App; 