'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import InteractiveGrid from './components/InteractiveGrid';
import SectionGrid from './components/SectionGrid';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import chatAnimation from '../public/chat-with-us.json';
import helloAnimation from '../public/Hello.json';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Home() {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const calendlyInitialized = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (calendlyInitialized.current) return;

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      // Initialize Calendly widget after script loads
      const embedElement = document.getElementById('calendly-embed');
      if (window.Calendly && embedElement && !calendlyInitialized.current) {
        calendlyInitialized.current = true;
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/stacydonnaj/15min',
          parentElement: embedElement,
          resize: true,
          prefill: {},
          utm: {},
          hideGdprBanner: true
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
            className="inline-flex border border-transparent items-center justify-center rounded-md bg-[#C3B1FA] px-6 py-2 font-medium text-gray-900 hover:bg-[#B39EF7]"
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
              <div className="items-center px-3 py-1 rounded-full bg-white/70 text-sm dark:bg-white/10 inline-flex gap-2">
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
                className="inline-flex border border-transparent items-center justify-center rounded-md bg-[#C3B1FA] px-8 py-3 font-medium text-gray-900 hover:bg-[#B39EF7] shadow-lg shadow-purple-500/20"
              >
                Book Free Founder Audit
              </button>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: document.getElementById('example-work')?.offsetTop || 0, behavior: 'smooth' })}
                className="inline-flex hover:bg-gray-50 dark:hover:bg-neutral-800 dark:bg-neutral-900 items-center justify-center rounded-md bg-white px-8 py-3 font-medium"
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
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#5E50A0]/20 via-[#AF97F8]/10 to-[#C3B1FA]/20 flex flex-col">
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
          <div className="group relative pt-8 cursor-pointer" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
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
          <div className="group relative pt-8 cursor-pointer" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
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
          <div className="group relative pt-8 cursor-pointer" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
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
          <div className="group relative pt-8 cursor-pointer" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="relative h-[200px] p-6 rounded-3xl bg-gradient-to-br from-[#5E50A0]/20 via-[#AF97F8]/10 to-[#C3B1FA]/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[8px_8px_0px_0px_#C3B1FA]">
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
              Build an MVP for a new product idea in a week, enabling the founder to validate with 100 users before hiring engineers.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Growth & GTM</div>
            <h4 className="font-semibold">AI-Powered Pricing Experiment</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Design and launch an AI-powered pricing experiment, driving major conversion lift.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">AI Automation</div>
            <h4 className="font-semibold">Workflow Automation</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Audit a founder&apos;s workflow and automate weekly reporting and outreach.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Operations</div>
            <h4 className="font-semibold">Investor Update Automation</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Automated investor update summaries using AI, reducing prep time from 4 hours to 30 minutes.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Content & Marketing</div>
            <h4 className="font-semibold">AI Content Generator</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Create a GPT-based content generator for founders&apos; LinkedIn & newsletter posts.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 dark:bg-white/5 space-y-3">
            <div className="text-sm font-medium text-[#AF97F8]">Design & Dev</div>
            <h4 className="font-semibold">Landing Page Rebuild</h4>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Rebuild landing pages with no-code AI tooling, cutting delivery time from 3 weeks to 3 days.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Transparent Pricing</h2>
          <p className="text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
            Flexible hourly rates based on project complexity. No hidden fees, no long-term contracts.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="max-w-2xl w-full p-8 rounded-2xl bg-white/50 dark:bg-white/5 space-y-4">
            <div className="space-y-2">
              <div className="text-4xl font-bold">$130-$180<span className="text-xl font-normal text-gray-600 dark:text-neutral-400">/hr</span></div>
              <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">Rate varies based on project complexity and type of work</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <li className="flex gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AI implementation & workflow design</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Product strategy & MVP development</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GTM planning & growth experiments</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ops cleanup & coordination</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Research & data analysis</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pitch deck polish & documentation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl w-full grid md:grid-cols-2 gap-4">
            {/* Left card - Pricing info */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#5E50A0]/20 via-[#AF97F8]/10 to-[#C3B1FA]/20 space-y-2">
              <div className="font-semibold text-lg">
                Trial Week:<br />
                20 hours ($2,000-3,000)
              </div>
              <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
                Most founders continue after seeing results in week 1.
              </p>
            </div>

            {/* Right card - Checklist */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#5E50A0]/20 via-[#AF97F8]/10 to-[#C3B1FA]/20">
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Long-Term Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Start with 1 Week Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D7CBFC' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel Anytime</span>
                </div>
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
          <div ref={textAreaRef} className="columns-1 md:columns-2 gap-6 space-y-6">
            {/* Photo Card */}
            <div className="break-inside-avoid mb-6">
              <div className="flex justify-center">
                <div ref={photoRef} className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/mai.jpeg"
                    alt="Mai - Fractional Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Intro Card */}
            <div className="break-inside-avoid mb-6">
              <div className="bg-white dark:bg-neutral-900/50 rounded-2xl p-8 text-gray-800 dark:text-neutral-100">
                <div className="text-lg">
                  Hi, I&apos;m <span className="group relative inline-block">
                    <strong style={{ color: '#AF97F8' }} className="border-b-2 border-dotted border-[#AF97F8]/30 hover:border-[#AF97F8]">Mai</strong>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-50">
                      <div className="w-32">
                        <Lottie animationData={helloAnimation} loop={true} />
                      </div>
                    </span>
                  </span> — a founder, engineer, and growth strategist who turns vague ideas into scalable systems.
                </div>
              </div>
            </div>

            {/* Background Card */}
            <div className="break-inside-avoid mb-6">
              <div className="bg-white dark:bg-neutral-900/50 rounded-2xl p-8 text-gray-800 dark:text-neutral-100 space-y-4">
                <div>
                  I&apos;ve built products from scratch, scaled them to millions of users, and operated across engineering, design, and growth.
                </div>
                <div>
                  As co-founder and CEO of <span className="group relative inline-block">
                    <strong style={{ color: '#AF97F8' }} className="border-b-2 border-dotted border-[#AF97F8]/30">HeyMint</strong>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-50">
                      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden w-80">
                        <img src="/HeyMint.png" alt="HeyMint" className="w-full h-40 object-cover object-top" />
                        <div className="p-4 space-y-2">
                          <div className="font-semibold text-gray-900 dark:text-white">HeyMint</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">No-code NFT platform for creators</div>
                          <div className="text-xs text-gray-400">heymint.xyz</div>
                        </div>
                      </div>
                    </span>
                  </span>, I led a no-code NFT platform that served <strong style={{ color: '#AF97F8' }}>1M+ users</strong> (including MasterCard and Ubisoft), generated <strong style={{ color: '#AF97F8' }}>$2M+ revenue</strong>, raised <strong style={{ color: '#AF97F8' }}>$3.4M</strong> in venture funding, and was acquired by <span className="group relative inline-block">
                    <strong style={{ color: '#AF97F8' }} className="border-b-2 border-dotted border-[#AF97F8]/30">Alchemy</strong>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-50">
                      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden w-80">
                        <img src="/Alchemy.png" alt="Alchemy" className="w-full h-40 object-cover object-top" />
                        <div className="p-4 space-y-2">
                          <div className="font-semibold text-gray-900 dark:text-white">Alchemy</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">Leading web3 development platform</div>
                          <div className="text-xs text-gray-400">alchemy.com</div>
                        </div>
                      </div>
                    </span>
                  </span>, one of the fastest-growing unicorns.
                </div>
              </div>
            </div>

            {/* Previous Experience Card */}
            <div className="break-inside-avoid mb-6">
              <div className="bg-white dark:bg-neutral-900/50 rounded-2xl p-8 text-gray-800 dark:text-neutral-100">
                <div>
                  Before that, I was a Senior Software Engineer at <span className="group relative inline-block">
                    <strong style={{ color: '#AF97F8' }} className="border-b-2 border-dotted border-[#AF97F8]/30">Gusto</strong>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-50">
                      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden w-80">
                        <img src="/Gusto.png" alt="Gusto" className="w-full h-40 object-cover object-top" />
                        <div className="p-4 space-y-2">
                          <div className="font-semibold text-gray-900 dark:text-white">Gusto</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">Modern payroll & HR platform</div>
                          <div className="text-xs text-gray-400">gusto.com</div>
                        </div>
                      </div>
                    </span>
                  </span>, leading top-of-funnel growth initiatives, and earlier Head of Marketing at a Series-B startup where my campaign sold 10,000 translation devices in 3 days.
                </div>
              </div>
            </div>

            {/* Product Skill Card */}
            <div className="break-inside-avoid mb-6">
              <div className="bg-[#362B6B] rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">Product / Design / Engineering</h4>
                <p className="text-sm text-gray-200">
                  I can turn abstract ideas into working prototypes.
                  <br />
                  Example: <a href="https://pawgrammer.com" target="_blank" rel="noopener noreferrer" className="text-[#C3B1FA] hover:underline font-medium">Pawgrammer.com</a> — built entirely from scratch.
                </p>
              </div>
            </div>

            {/* Marketing Skill Card */}
            <div className="break-inside-avoid mb-6">
              <div className="bg-[#362B6B] rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">Marketing / Growth / GTM</h4>
                <p className="text-sm text-gray-200">
                  I combine creativity and technical automation to scale efficiently — from building custom growth tools to optimizing entire user funnels.
                </p>
              </div>
            </div>

            {/* Final Statement Card */}
            <div className="break-inside-avoid mb-6">
              <div className="bg-white dark:bg-neutral-900/50 rounded-2xl p-8 text-gray-800 dark:text-neutral-100">
                <p className="text-lg font-medium">
                  Now, I help other founders move faster — by building, automating, and simplifying what they don&apos;t have time to do.
                </p>
              </div>
            </div>

            {/* Social Links - 2 Column Grid */}
            <div className="break-inside-avoid mb-6">
              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn Card */}
                <a href="https://www.linkedin.com/in/mai-akiyoshi-97234533/" target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-neutral-900/50 rounded-xl p-6 text-[#AF97F8] hover:text-[#C3B1FA] transition-colors">
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>

                {/* X/Twitter Card */}
                <a href="https://x.com/mai_on_chain" target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-neutral-900/50 rounded-xl p-6 text-[#AF97F8] hover:text-[#C3B1FA] transition-colors">
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-[#5E50A0]/10 to-[#9b87f5]/10 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Stop Running Your Company Alone</h2>
              <p className="text-gray-700/80 dark:text-neutral-300/80 text-lg">
                Get a partner who builds with you. Book a free founder audit and let&apos;s identify what&apos;s holding you back.
              </p>
              {/* Lottie Animation */}
              <div className="max-w-sm mx-auto md:mx-0">
                <Lottie animationData={chatAnimation} loop={true} />
              </div>
            </div>

            {/* Right column - Calendly widget */}
            <div id="calendly-embed" className="rounded-2xl overflow-hidden" style={{ minWidth: '320px', height: '630px', colorScheme: 'dark' }}></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-900/50 mt-16">
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
          <div className="pt-8">
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
