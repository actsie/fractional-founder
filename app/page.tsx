'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 relative isolate antialiased">
      {/* Gradient Blobs Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="h-[60vh] w-[60vh] rounded-full absolute -top-32 -left-32 opacity-90 blur-3xl"
          style={{ background: 'linear-gradient(to bottom right, #fdf6ef, #fcf3fa)' }}
        />
        <div
          className="h-[40vh] w-[50vh] rounded-full absolute -bottom-20 right-10 opacity-90 blur-3xl"
          style={{ background: 'linear-gradient(to top right, #f9f1fc, #fcf3fa)' }}
        />
        <div
          className="h-[35vh] w-[45vh] rounded-full absolute top-28 left-1/4 opacity-90 blur-3xl"
          style={{ background: 'linear-gradient(to bottom, #f4eefc, #fcf3fa, #fdf6ef)' }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Fractional Founder</div>
          <button
            type="button"
            className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-neutral-900 px-6 py-2 font-medium text-neutral-100 hover:bg-[#5E50A0]"
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
                Your on-call cofounder to turn clarity into action
              </h1>
              <p className="text-lg text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
                Offload what slows you down. Prototype what&apos;s unclear. Automate what&apos;s repetitive.
              </p>
            </div>
            <div className="sm:flex-row flex flex-col gap-4 justify-center">
              <button
                type="button"
                className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-neutral-900 px-8 py-3 font-medium text-neutral-100 hover:bg-[#5E50A0]"
              >
                Book Free Founder Audit
              </button>
              <button
                type="button"
                className="inline-flex border border-zinc-300/70 dark:border-white/20 transition-colors hover:bg-black/5 dark:hover:bg-white/10 dark:bg-white/10 items-center justify-center rounded-md bg-white/70 px-8 py-3 font-medium"
              >
                Learn More
              </button>
            </div>
            <div className="items-center pt-12 flex flex-wrap justify-center gap-12 lg:gap-16">
              <div>
                <div className="text-2xl font-semibold">$100-$150</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">Hourly Rate</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">20 hours</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">Trial Period</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">1 Week</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">MVP Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#5E50A0]/10 flex items-center justify-center">
              <svg className="w-6 h-6" style={{ color: '#5E50A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Rapid Prototyping</h3>
            <p className="text-gray-700/80 dark:text-neutral-300/80">
              Turn ideas into working prototypes in days, not months. Get clarity through building.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#5E50A0]/10 flex items-center justify-center">
              <svg className="w-6 h-6" style={{ color: '#5E50A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Process Automation</h3>
            <p className="text-gray-700/80 dark:text-neutral-300/80">
              Identify repetitive tasks and build automation systems that save hours every week.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#5E50A0]/10 flex items-center justify-center">
              <svg className="w-6 h-6" style={{ color: '#5E50A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Strategic Guidance</h3>
            <p className="text-gray-700/80 dark:text-neutral-300/80">
              Get tactical advice from someone who&apos;s built products from zero to one.
            </p>
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
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5E50A0] text-white flex items-center justify-center mx-auto font-semibold">
              1
            </div>
            <h3 className="font-semibold">Free Audit</h3>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              30-minute call to understand your needs and bottlenecks
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5E50A0] text-white flex items-center justify-center mx-auto font-semibold">
              2
            </div>
            <h3 className="font-semibold">Trial Period</h3>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              20-hour trial to deliver immediate value and prove fit
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5E50A0] text-white flex items-center justify-center mx-auto font-semibold">
              3
            </div>
            <h3 className="font-semibold">Ongoing Support</h3>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Flexible hours based on your needs and priorities
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5E50A0] text-white flex items-center justify-center mx-auto font-semibold">
              4
            </div>
            <h3 className="font-semibold">Scale Up</h3>
            <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
              Increase hours as your business grows and needs evolve
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-[#5E50A0]/10 to-[#9b87f5]/10 rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Ready to move faster?</h2>
          <p className="text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
            Book a free founder audit and let&apos;s identify what&apos;s holding you back
          </p>
          <button
            type="button"
            className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-neutral-900 px-8 py-3 font-medium text-neutral-100 hover:bg-[#5E50A0]"
          >
            Book Free Founder Audit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left text-gray-600 dark:text-gray-400 text-sm">
              Fractional Founder Partner - Turn clarity into action
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
