'use client';

import { useRef } from 'react';
import InteractiveGrid from './components/InteractiveGrid';
import SectionGrid from './components/SectionGrid';

export default function Home() {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 relative isolate antialiased">
      {/* Hero Background Pattern */}
      <div className="absolute inset-x-0 top-0 h-[800px] -z-10 overflow-hidden">
        <InteractiveGrid />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Fractional Founder</div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: document.getElementById('cta')?.offsetTop || 0, behavior: 'smooth' })}
            className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-[#C3B1FA] px-6 py-2 font-medium text-gray-900 hover:bg-[#B39EF7]"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto px-8 relative z-20 max-w-7xl">
        <div className="lg:py-24 items-center py-16">
          <div className="space-y-12 max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <div className="items-center px-3 py-1 rounded-full bg-white/70 text-sm dark:bg-white/10 inline-flex gap-2 border border-zinc-300/70 dark:border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  style={{ color: '#5E50A0' }}
                >
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 22.5l-.394-1.933a2.25 2.25 0 00-1.423-1.423L12.75 18.75l1.933-.394a2.25 2.25 0 001.423-1.423L16.5 15l.394 1.933a2.25 2.25 0 001.423 1.423l1.933.394-1.933.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">Fractional Founder Partner</span>
              </div>
              <h1 className="text-4xl font-medium leading-tight lg:text-6xl">
                Ship Faster, Scale Smarter—Without Burning Out
              </h1>
              <p className="text-lg text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
                I help founders move 3x faster by offloading busywork, prototyping MVPs in days, and automating with AI.
              </p>
            </div>
            <div className="sm:flex-row flex flex-col gap-4 justify-center">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: document.getElementById('cta')?.offsetTop || 0, behavior: 'smooth' })}
                className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-[#C3B1FA] px-8 py-3 font-medium text-gray-900 hover:bg-[#B39EF7] shadow-lg shadow-purple-500/20"
              >
                Book Free Founder Audit
              </button>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: document.getElementById('example-work')?.offsetTop || 0, behavior: 'smooth' })}
                className="inline-flex transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 dark:bg-neutral-900 items-center justify-center rounded-md bg-white px-8 py-3 font-medium"
              >
                See Example Work
              </button>
            </div>
            {/* Trust Badges */}
            <div className="items-center pt-12 flex flex-wrap justify-center gap-8 lg:gap-12">
              <div className="flex items-center gap-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>1M+ Users Served</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>$3.4M Raised</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Acquired by Alchemy</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* What I Do Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">What I Do</h2>
          <p className="text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
            Most founders are drowning in busywork — investor updates, ops cleanup, hiring coordination, and figuring out AI implementation. I help you move faster by being your strategic right-hand.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-[#5E50A0]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" style={{ color: '#5E50A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Offload What Slows You</h3>
            <p className="text-gray-700/80 dark:text-neutral-300/80 mb-4">
              Free up 15-20 hours/week by delegating research, ops cleanup, pitch deck polish, investor updates, hiring coordination, and team planning.
            </p>
            <div className="text-sm text-gray-600 dark:text-neutral-400 italic mt-auto">
              All handled, so you can focus on what only you can do.
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-[#5E50A0]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" style={{ color: '#5E50A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Prototype Vague Ideas Quickly</h3>
            <p className="text-gray-700/80 dark:text-neutral-300/80 mb-4">
              Got an idea that&apos;s not yet scoped? I&apos;ll turn it into a working draft, build MVP, set up analytics, create GTM strategy, and run experiments.
            </p>
            <div className="text-sm text-gray-600 dark:text-neutral-400 italic mt-auto">
              From concept to validated prototype in days, not months.
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-[#5E50A0]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" style={{ color: '#5E50A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">AI-Powered Workflow Automation</h3>
            <p className="text-gray-700/80 dark:text-neutral-300/80 mb-4">
              I audit your marketing, sales, and ops workflows, then design and implement AI automations using GPT/Claude that reduce staffing costs by 40-60%.
            </p>
            <div className="text-sm text-gray-600 dark:text-neutral-400 italic mt-auto">
              Cut reporting time from 4 hours → 30 minutes. Automate outreach and content generation.
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <p className="text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
            Simple, flexible engagement model designed for founders who need to move fast
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group relative pt-8">
            <div className="relative h-[200px] p-6 rounded-3xl bg-white dark:bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[8px_8px_0px_0px_#C3B1FA]">
              <div className="absolute -top-8 left-6 w-12 h-12 rounded-full bg-[#C3B1FA] border-8 border-white dark:border-neutral-950 flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">1</span>
              </div>
              <div className="flex flex-col h-full justify-between gap-2 pt-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Discovery Call (Free)</h3>
                </div>
                <p className="text-sm text-gray-700/80 dark:text-neutral-300/80 leading-relaxed">
                  30-minute call to discuss your biggest bottlenecks and identify 2-3 high-impact areas to help with
                </p>
              </div>
            </div>
          </div>
          <div className="group relative pt-8">
            <div className="relative h-[200px] p-6 rounded-3xl bg-white dark:bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[8px_8px_0px_0px_#C3B1FA]">
              <div className="absolute -top-8 left-6 w-12 h-12 rounded-full bg-[#C3B1FA] border-8 border-white dark:border-neutral-950 flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">2</span>
              </div>
              <div className="flex flex-col h-full justify-between gap-2 pt-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Trial Week (20 hours)</h3>
                </div>
                <p className="text-sm text-gray-700/80 dark:text-neutral-300/80 leading-relaxed">
                  Work together for one week. See results, test our collaboration, and evaluate if it&apos;s a good fit
                </p>
              </div>
            </div>
          </div>
          <div className="group relative pt-8">
            <div className="relative h-[200px] p-6 rounded-3xl bg-white dark:bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[8px_8px_0px_0px_#C3B1FA]">
              <div className="absolute -top-8 left-6 w-12 h-12 rounded-full bg-[#C3B1FA] border-8 border-white dark:border-neutral-950 flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">3</span>
              </div>
              <div className="flex flex-col h-full justify-between gap-2 pt-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Evaluate Fit</h3>
                </div>
                <p className="text-sm text-gray-700/80 dark:text-neutral-300/80 leading-relaxed">
                  No pressure. If it&apos;s working, we continue. If not, no hard feelings
                </p>
              </div>
            </div>
          </div>
          <div className="group relative pt-8">
            <div className="relative h-[200px] p-6 rounded-3xl bg-white dark:bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[8px_8px_0px_0px_#C3B1FA]">
              <div className="absolute -top-8 left-6 w-12 h-12 rounded-full bg-[#C3B1FA] border-8 border-white dark:border-neutral-950 flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">4</span>
              </div>
              <div className="flex flex-col h-full justify-between gap-2 pt-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Ongoing Partnership</h3>
                </div>
                <p className="text-sm text-gray-700/80 dark:text-neutral-300/80 leading-relaxed">
                  Flexible hours, weekly or monthly engagement based on your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Work Section */}
      <section id="example-work" className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Example Work</h2>
          <p className="text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
            Real projects, real results — here&apos;s what founders have asked me to build
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Product Development</div>
            <h4 className="font-semibold">MVP in One Week</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Built MVP for fintech startup → validated with 127 beta users → founders raised $1.2M seed round 3 weeks later
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Growth & GTM</div>
            <h4 className="font-semibold">AI-Powered Pricing Experiment</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Designed and launched AI-powered pricing test for SaaS startup → 34% conversion lift → $47K additional MRR in month 1
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">AI Automation</div>
            <h4 className="font-semibold">Workflow Automation</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Audited founder&apos;s workflow and automated weekly reporting → reduced prep time from 4 hours to 30 minutes
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Operations</div>
            <h4 className="font-semibold">Investor Update Automation</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Created GPT-based system for investor update summaries → saved founder 3.5 hours every week
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Content & Marketing</div>
            <h4 className="font-semibold">AI Content Generator</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Built GPT-based content generator for founder&apos;s LinkedIn & newsletter → 10x content output with same quality
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Design & Dev</div>
            <h4 className="font-semibold">Landing Page Rebuild</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Rebuilt landing page with no-code AI tooling → cut delivery time from 3 weeks to 3 days → 22% conversion improvement
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Transparent Pricing</h2>
          <p className="text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
            Simple hourly rates based on the type of work. No hidden fees, no long-term contracts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-[#AF97F8]">Strategic Work</div>
              <div className="text-4xl font-bold">$150<span className="text-xl font-normal text-gray-600 dark:text-neutral-400">/hr</span></div>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AI implementation & workflow design</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Product strategy & MVP development</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GTM planning & growth experiments</span>
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-[#AF97F8]">Execution Work</div>
              <div className="text-4xl font-bold">$100<span className="text-xl font-normal text-gray-600 dark:text-neutral-400">/hr</span></div>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ops cleanup & coordination</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Research & data analysis</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pitch deck polish & documentation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-r from-[#5E50A0]/10 to-[#9b87f5]/10">
          <div className="text-center space-y-2">
            <div className="font-semibold text-lg">Trial Week: 20 hours ($2,000-3,000)</div>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Most founders continue after seeing results in week 1.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Start with 1 Week Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <SectionGrid textAreaRef={textAreaRef} photoRef={photoRef} />
        </div>
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Who I Am</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center">
              <div ref={photoRef} className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
                <img
                  src="/mai.jpeg"
                  alt="Mai - Fractional Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div ref={textAreaRef} className="md:col-span-2">
              <div className="bg-white dark:bg-neutral-900/50 rounded-2xl p-8 space-y-6 text-gray-800 dark:text-neutral-100">
                {/* Bio paragraphs */}
                <p className="text-lg">
                  Hi, I&apos;m <strong>Mai</strong> — a founder, engineer, and growth strategist who turns vague ideas into scalable systems.
                </p>
                <p>
                  I&apos;ve built products from scratch, scaled them to millions of users, and operated across engineering, design, and growth.
                </p>
                <p>
                  As co-founder and CEO of <strong>HeyMint</strong>, I led a no-code NFT platform that served <strong>1M+ users</strong> (including MasterCard and Ubisoft), generated <strong>$2M+ revenue</strong>, raised <strong>$3.4M</strong> in venture funding, and was acquired by <strong>Alchemy</strong>, one of the fastest-growing unicorns.
                </p>
                <p>
                  Before that, I was a Senior Software Engineer at <strong>Gusto</strong>, leading top-of-funnel growth initiatives, and earlier Head of Marketing at a Series-B startup where my campaign sold 10,000 translation devices in 3 days.
                </p>

                {/* Bento-style skill cards */}
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#362B6B] rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3">Product / Design / Engineering</h4>
                    <p className="text-sm text-gray-200">
                      I can turn abstract ideas into working prototypes. Example: <a href="https://pawgrammer.com" target="_blank" rel="noopener noreferrer" className="text-[#C3B1FA] hover:underline font-medium">Pawgrammer.com</a> — built entirely from scratch.
                    </p>
                  </div>
                  <div className="bg-[#362B6B] rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3">Marketing / Growth / GTM</h4>
                    <p className="text-sm text-gray-200">
                      I combine creativity and technical automation to scale efficiently — from building custom growth tools to optimizing entire user funnels.
                    </p>
                  </div>
                </div>

                <p className="pt-2 text-lg font-medium">
                  Now, I help other founders move faster — by building, automating, and simplifying what they don&apos;t have time to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="max-w-4xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-[#5E50A0]/10 to-[#9b87f5]/10 rounded-2xl p-12 text-center space-y-6 border border-zinc-200 dark:border-white/10">
          <h2 className="text-3xl font-semibold">Stop Running Your Company Alone</h2>
          <p className="text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto text-lg">
            Get a partner who builds with you. Book a free founder audit and let&apos;s identify what&apos;s holding you back.
          </p>
          <button
            type="button"
            className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-[#C3B1FA] px-10 py-4 text-lg font-medium text-gray-900 hover:bg-[#B39EF7] shadow-lg shadow-purple-500/30"
          >
            Book Free Founder Audit →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-900/50 mt-16 border-t border-zinc-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <div className="text-xl font-semibold">Fractional Founder</div>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Ship faster, scale smarter — without burning out.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-sm">Quick Links</div>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#example-work" className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  Example Work
                </a>
                <a href="https://pawgrammer.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  Portfolio
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-sm">Contact</div>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#cta" className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  Book Free Audit
                </a>
                <a href="mailto:hello@fractionalfounder.com" className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-center sm:text-left text-gray-600 dark:text-gray-400 text-sm">
                © 2025 Fractional Founder Partner. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
