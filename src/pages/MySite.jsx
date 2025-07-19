import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import AboutSection from '../components/AboutSection';
import Input from '../components/Input';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Footer from '../components/Footer';
import TopSkillsSection from '../components/TopSkillsSection';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Interview Series', href: '#interview-series' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Email', href: 'mailto:daltonhertel@gmail.com', icon: <span>@</span> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dalton-hertel/', icon: <span>in</span> },
  { label: 'Substack', href: 'https://daltonhertel.substack.com/', icon: <span>S</span> },
];

const projects = [
  {
    image: '',
    title: 'Climatebase',
    description: 'Helped build internal discovery tools to connect talent with climate orgs. Prototyped AI features for matching and insights.',
    link: { label: 'Learn More', href: '#' },
  },
  {
    image: '',
    title: 'GaeaStar',
    description: 'Developed product strategy for biodegradable cups. Led roadmap around ROI storytelling, referral programs, and product onboarding.',
    link: { label: 'Learn More', href: '#' },
  },
  {
    image: '',
    title: 'GreenerGatherings',
    description: 'Launched zero-waste event planning concept. Focused on customer research, emissions tracking, and behavior change.',
    link: { label: 'Learn More', href: '#' },
  },
];

const interviewSeries = [
  {
    image: '',
    title: 'Innovator 1: Jane Doe, CEO of GreenTech',
    description: 'Jane shares her journey building scalable carbon removal solutions and lessons for founders in climate tech.',
    link: { label: 'Read Interview', href: 'https://daltonhertel.substack.com/' },
  },
  {
    image: '',
    title: 'Innovator 2: John Smith, CTO of SolarNext',
    description: 'John discusses the future of solar innovation and how AI is accelerating deployment in emerging markets.',
    link: { label: 'Read Interview', href: 'https://daltonhertel.substack.com/' },
  },
  {
    image: '',
    title: 'Innovator 3: Priya Patel, Founder of EcoAI',
    description: 'Priya talks about using AI to optimize supply chains for sustainability and her advice for new climate tech leaders.',
    link: { label: 'Read Interview', href: 'https://daltonhertel.substack.com/' },
  },
];

const aboutBio = `I build 0→1 products fast using tools like ChatGPT, Cursor, and agentic workflows. I specialize in turning complex climate and financial challenges into simple, impactful software. I'm driven by a deep commitment to fighting the climate crisis and like working with early-stage, mission-driven teams.`;

const earthyBg = 'bg-[#F3F7F2]'; // light earthy green

const MySite = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={`min-h-screen text-gray-900 flex flex-col ${earthyBg}`}>
      <Navbar logo="Dalton Hertel" links={navLinks} profileImg="/profile-pic.png" />
      <section className="w-full py-16 bg-[#E6F4EA] text-center flex flex-col items-center">
        <span className="inline-block px-6 py-2 mb-8 rounded-full bg-[#1E3A34] text-white text-lg font-medium tracking-wide shadow-sm">• AI Native Product Manager •</span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">Building Software to Fight the Climate Crisis</h1>
        <p className="text-2xl md:text-3xl text-gray-500 mb-8 font-normal">Fast, focused, mission-driven</p>
      </section>
      <main className="max-w-4xl mx-auto p-4 space-y-12 flex-1 w-full">
        <section id="portfolio">
          <SectionHeading>Portfolio</SectionHeading>
          <div className="space-y-6">
            {projects.map((proj) => (
              <Card key={proj.title} {...proj} />
            ))}
          </div>
        </section>
        {/* Interview Series section with full-width background, placed between Portfolio and About */}
      </main>
      <section className="w-full bg-[#E6F4EA] py-16">
        <div id="interview-series" className="max-w-4xl mx-auto rounded-2xl text-center flex flex-col items-center px-4">
          <SectionHeading>Climate Tech Innovator Interview Series</SectionHeading>
          <div className="space-y-6 w-full">
            {interviewSeries.map((interview) => (
              <Card key={interview.title} {...interview} />
            ))}
          </div>
          <Button
            as="a"
            href="https://daltonhertel.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="mt-8"
          >
            View All Interviews on Substack
          </Button>
        </div>
      </section>
      <main className="max-w-4xl mx-auto p-4 space-y-12 flex-1 w-full">
        <section id="about">
          <SectionHeading>About</SectionHeading>
          <AboutSection
            image="/presenting.png"
            bio={aboutBio}
            links={socialLinks}
          />
        </section>
        <section id="top-skills">
          <SectionHeading>Top Skills</SectionHeading>
          <TopSkillsSection />
        </section>
        <section id="contact">
          <SectionHeading>Work with me</SectionHeading>
          <form className="space-y-4 max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <Input
                label="First Name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your first name"
                name="firstName"
              />
              <Input
                label="Last Name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your last name"
                name="lastName"
              />
            </div>
            <Input
              label="Email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your email"
              name="email"
              type="email"
            />
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="How can I help?"
              />
            </div>
            <Button variant="primary" type="submit">Submit Request</Button>
          </form>
        </section>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Contact Dalton">
          <p className="mb-4">Email: <a href="mailto:daltonhertel@gmail.com" className="text-green-900 underline">daltonhertel@gmail.com</a></p>
          <Button onClick={() => setModalOpen(false)} variant="primary">Close</Button>
        </Modal>
      </main>
      <Footer name="Dalton Hertel" links={socialLinks} />
    </div>
  );
};

export default MySite; 