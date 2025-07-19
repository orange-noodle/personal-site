import React from 'react';

const TopSkillsSection = () => (
  <section className="flex flex-col md:flex-row items-center gap-8 py-12">
    <div className="flex-1 text-center md:text-left mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Product Column */}
        <div>
          <h4 className="text-lg font-bold mb-3 text-[#1E3A34]">Product</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              {/* Person Talking Icon for Voice of the Customer */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="10" r="4" stroke="currentColor" strokeWidth="2"/><path d="M12 14c-1.5-1-5.5-1-7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 9c1.5.5 2.5 2 2.5 3.5S16.5 16.5 15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 7c2.5 1 4 4 4 6s-1.5 5-4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Voice of the Customer
            </li>
            <li className="flex items-center gap-2">
              {/* Roadmap Icon for Product Strategy */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M6 9h3v3H6zM15 12h3v3h-3z" stroke="currentColor" strokeWidth="1.5"/><path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Product Strategy
            </li>
            <li className="flex items-center gap-2">
              {/* Target with Arrow Icon for Go to Market */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M17 7l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 7h-3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Go to Market
            </li>
          </ul>
        </div>
        {/* Climate Column */}
        <div>
          <h4 className="text-lg font-bold mb-3 text-[#1E3A34]">Climate</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              {/* Simple Dollar Sign Icon for Carbon Accounting */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><text x="12" y="16" textAnchor="middle" fontSize="18" fontFamily="Arial, Helvetica, sans-serif" fill="none" stroke="currentColor" strokeWidth="1.5">$</text></svg>
              Carbon Accounting
            </li>
            <li className="flex items-center gap-2">
              {/* Document/Policy Icon for Climate Policy */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Climate Policy
            </li>
            <li className="flex items-center gap-2">
              {/* Bar Chart Icon for Emissions Reporting */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="3" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="10.5" y="6" width="3" height="12" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="17" y="13" width="3" height="5" rx="1.5" stroke="currentColor" strokeWidth="2"/></svg>
              Emissions Reporting
            </li>
          </ul>
        </div>
        {/* AI Column */}
        <div>
          <h4 className="text-lg font-bold mb-3 text-[#1E3A34]">AI</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              {/* Chat Bubble Icon for Prompt Engineering */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M7 17v2a1 1 0 0 0 1.447.894L12 18l3.553 1.894A1 1 0 0 0 17 19v-2" stroke="currentColor" strokeWidth="1.5"/></svg>
              Prompt Engineering
            </li>
            <li className="flex items-center gap-2">
              {/* Code Brackets Icon for Vibe Coding */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><path d="M8 7L4 12l4 5M16 7l4 5-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Vibe Coding
            </li>
            <li className="flex items-center gap-2">
              {/* Gears Icon for Agentic Workflows */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#1E3A34]" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0 .33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15.4 9a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" stroke="currentColor" strokeWidth="1.5"/></svg>
              Agentic Workflows
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default TopSkillsSection; 