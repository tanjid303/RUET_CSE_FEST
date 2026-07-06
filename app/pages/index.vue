<template>
  <div class="relative overflow-hidden min-h-screen bg-grid-texture animate-grid-scan">
    <!-- Hero Ambient Glows (Animated Aurora Loop) -->
    <div class="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-fest-cyan/[0.07] to-transparent blur-[140px] pointer-events-none animate-aurora-cyan"></div>
    <div class="absolute top-[5%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-fest-amber/[0.05] to-transparent blur-[140px] pointer-events-none animate-aurora-amber"></div>

    <!-- Hero Section -->
    <section class="relative z-10 overflow-hidden pt-2 pb-16 sm:pt-4 md:pt-6 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <InteractiveBackground />

      <!-- Sponsor Lockup -->
      <div class="mx-auto mb-4 inline-flex max-w-full flex-col items-center gap-2 rounded-2xl border border-fest-border bg-white/90 px-3 py-3 text-center shadow-card backdrop-blur-xl sm:flex-row sm:gap-4 sm:rounded-full sm:px-4 sm:text-left sm:py-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl border border-fest-cyan/15 bg-fest-surface text-fest-cyan shadow-sm">
          <span class="font-display text-lg font-bold">R</span>
        </div>
        <div>
          <p class="text-[10px] font-mono uppercase tracking-[0.32em] text-fest-muted">Department of CSE, RUET presents</p>
          <p class="text-sm font-semibold tracking-wide text-fest-text sm:text-base">RUET CSE FEST 2026</p>
        </div>
      </div>

      <!-- Headline (Fluid Typography) -->
      <h1 class="hero-headline mb-4 font-display font-bold text-fluid-hero leading-none tracking-tight sm:mb-6">
        <span class="hero-outline inline-block">RUET</span>
        <span class="hero-solid inline-block mx-2 sm:mx-4">CSE</span>
        <span class="hero-outline inline-block">FEST</span>
        <span class="block text-[0.34em] font-mono tracking-[0.48em] text-fest-cyan mt-4">2K26</span>
      </h1>

      <!-- Tagline (Fluid Typography) -->
      <p class="max-w-2xl mx-auto mb-8 font-sans text-fluid-tagline leading-relaxed text-fest-muted sm:mb-10">
        A week-long national stage for Bangladesh's sharpest programmers, hardware designers, and innovative builders.
      </p>

      <!-- Mini Terminal Card -->
      <div class="mx-auto mb-6 w-full max-w-sm overflow-hidden rounded-xl border border-slate-800 bg-[#0B0F19] text-left font-mono text-xs shadow-[0_8px_30px_rgba(11,15,25,0.28)] sm:mb-8 sm:max-w-md sm:text-sm">
        <div class="flex items-center justify-between px-4 py-2.5 border-b border-slate-950 bg-[#161B2B]">
          <div class="flex space-x-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
          </div>
          <span class="text-[10px] sm:text-xs text-slate-400 font-bold">bash - csefest@ruet</span>
        </div>
        <div class="p-4 space-y-2.5 text-slate-100">
          <div class="flex items-center gap-2">
            <span class="text-[#38BDF8] font-bold">$</span>
            <span class="text-slate-200">npx csefest-2026 --status</span>
          </div>
          <div class="text-slate-400 pl-4">
            Initializing competitive environment...
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[#38BDF8] font-bold">$</span>
            <span class="text-slate-200">npm run start-countdown</span>
          </div>
          <div class="text-[#38BDF8] pl-4 font-semibold">
            &gt; Ready for input. Waiting for connection...
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-[#38BDF8] font-bold">$</span>
            <span class="w-1.5 h-3.5 bg-[#38BDF8] animate-cursor-blink"></span>
          </div>
        </div>
      </div>

      <!-- Blinking cursor next to a short phrase for waiting for input -->
      <div class="mb-8 flex flex-wrap items-center justify-center gap-1.5 px-2 text-center font-mono text-[11px] text-fest-cyan sm:mb-10 sm:text-xs">
        <span>$ awaiting connection: ping -c 1 ruet-cse-fest-2026</span>
        <span class="w-2 h-3.5 bg-fest-cyan animate-cursor-blink"></span>
      </div>

      <!-- Details Strip -->
      <div class="mb-10 flex flex-col items-center justify-center gap-3 text-center font-mono text-xs text-fest-muted sm:mb-12 sm:flex-row sm:flex-wrap sm:gap-8 sm:text-sm">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-fest-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span>10 – 17 April 2026</span>
        </div>
        <div class="hidden sm:block text-fest-border">•</div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-fest-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span>RUET Campus, Rajshahi</span>
        </div>
      </div>

      <!-- Countdown -->
      <div class="mb-14">
        <CountdownTimer />
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink
          to="/register"
          class="w-full sm:w-auto px-8 py-4 rounded-xl bg-fest-cyan text-white font-bold tracking-wide shadow-btn hover:-translate-y-0.5 transition-all duration-300"
        >
          Register for Events
        </NuxtLink>
        <NuxtLink
          to="/sponsors"
          class="w-full sm:w-auto px-8 py-4 rounded-xl border border-fest-border bg-white hover:border-fest-cyan/40 hover:bg-fest-surface text-fest-cyan font-bold tracking-wide transition-all duration-300 shadow-sm"
        >
          Become a Sponsor
        </NuxtLink>
      </div>
    </section>

    <!-- Sponsor Marquee -->
    <SponsorMarquee />

    <!-- Stats Bar (Optimized for 375px responsive grids) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <div v-for="stat in stats" :key="stat.label" class="glass-panel rounded-2xl p-4 sm:p-6 text-center reveal-fade-up">
          <span class="block font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-fest-cyan mb-2">{{ stat.value }}</span>
          <span class="text-[10px] sm:text-xs uppercase tracking-widest text-fest-muted font-semibold">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Event Highlights Teaser Grid -->
    <div class="w-full py-16">
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 reveal-fade-up">
          <div>
            <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Competitive Arena</span>
            <h2 class="font-display font-bold text-fluid-section text-fest-text">Flagship Competitions</h2>
          </div>
          <NuxtLink
            to="/events"
            class="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-fest-cyan hover:underline group"
          >
            <span>View all 10 events</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="event in teaserEvents" :key="event.id">
            <EventCard :event="event" dark-mode />
          </div>
        </div>
      </section>
    </div>

    <!-- Prize Pool Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <!-- Glow behind -->
      <div class="absolute inset-0 bg-gradient-to-r from-fest-cyan/[0.04] to-fest-amber/[0.04] rounded-3xl blur-2xl -z-10 pointer-events-none"></div>

      <div class="glass-panel border-fest-amber/15 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden reveal-fade-up">
        <div class="absolute -top-12 -left-12 w-24 h-24 bg-fest-amber/[0.06] rounded-full blur-xl pointer-events-none"></div>

        <span class="text-xs font-mono uppercase tracking-widest text-fest-amber mb-3 block">Participant Acquisition</span>
        <h2 class="font-display font-bold text-fluid-section text-fest-text mb-4">
          Total Prize Pool
        </h2>
        <div class="font-mono text-5xl sm:text-7xl font-extrabold text-fest-amber my-6">
          550,000+ BDT
        </div>
        <p class="max-w-xl mx-auto text-sm sm:text-base text-fest-muted mb-8 leading-relaxed">
          Distributed across major competitive tracks, featuring cash rewards, trophies, certificates, and potential sponsorship support for hardware projects.
        </p>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-fest-border max-w-2xl mx-auto text-left font-mono">
          <div>
            <span class="text-[10px] text-fest-muted uppercase block mb-1">IUPC</span>
            <span class="text-sm font-bold text-fest-text">1,50,000 BDT</span>
          </div>
          <div>
            <span class="text-[10px] text-fest-muted uppercase block mb-1">Hackathon</span>
            <span class="text-sm font-bold text-fest-text">1,20,000 BDT</span>
          </div>
          <div>
            <span class="text-[10px] text-fest-muted uppercase block mb-1">VLSI-thon</span>
            <span class="text-sm font-bold text-fest-text">80,000 BDT</span>
          </div>
          <div>
            <span class="text-[10px] text-fest-muted uppercase block mb-1">CTF</span>
            <span class="text-sm font-bold text-fest-text">60,000 BDT</span>
          </div>
          <div>
            <span class="text-[10px] text-fest-muted uppercase block mb-1">Datathon</span>
            <span class="text-sm font-bold text-fest-text">50,000 BDT</span>
          </div>
          <div>
            <span class="text-[10px] text-fest-muted uppercase block mb-1">GameJam</span>
            <span class="text-sm font-bold text-fest-text">50,000 BDT</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3-Step Timeline Section -->
    <div class="w-full py-16">
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal-fade-up">
          <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">The Journey</span>
          <h2 class="font-display font-bold text-fluid-section text-fest-text">Roadmap to Fest Week</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div v-for="(phase, index) in phases" :key="index" class="roadmap-card rounded-2xl p-8 relative reveal-fade-up">
            <!-- Step Counter -->
            <div class="absolute -top-4 left-6 w-10 h-10 rounded-lg bg-fest-amber text-white font-mono font-bold flex items-center justify-center shadow-btn">
              0{{ index + 1 }}
            </div>
            <h3 class="font-display font-bold text-lg text-white mt-2 mb-3">{{ phase.title }}</h3>
            <p class="text-sm text-slate-300 leading-relaxed">{{ phase.desc }}</p>
            <span class="block mt-4 text-xs font-mono text-fest-amber">{{ phase.date }}</span>
          </div>
        </div>
      </section>
    </div>

    <!-- Sponsorship Teaser Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16 text-center">
      <div class="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden reveal-fade-up">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fest-cyan/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Partnership Opportunities</span>
        <h2 class="font-display font-bold text-fluid-section mb-4">Elevate Your Brand</h2>
        <p class="max-w-xl mx-auto text-sm text-fest-muted mb-8 leading-relaxed">
          Position your company in front of 10,000+ top tech students, developers, and industry leaders from across Bangladesh.
        </p>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-left mb-8">
          <div v-for="tier in tiers" :key="tier.name" class="p-4 rounded-xl bg-fest-surface border border-fest-border">
            <span class="text-[10px] font-mono text-fest-cyan block mb-1 uppercase">{{ tier.slots }}</span>
            <h4 class="font-display font-bold text-base text-fest-text">{{ tier.name }}</h4>
            <span class="font-mono text-sm text-fest-amber block mt-1 font-bold">{{ tier.price }}</span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/sponsors"
            class="w-full sm:w-auto px-6 py-3 rounded-lg bg-fest-cyan text-white text-sm font-semibold tracking-wide shadow-btn hover:-translate-y-0.5 transition-all"
          >
            Explore Sponsorship Benefits
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Past Fest Strips / Gallery teaser -->
    <section class="bg-fest-surface border-t border-fest-border py-20 text-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-fade-up">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Legacy of Tech</span>
        <h2 class="font-display font-bold text-fluid-section mb-12">Decades of Technical Excellence</h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div v-for="img in [1, 2, 3, 4]" :key="img" class="aspect-[4/3] rounded-xl bg-white border border-fest-border shadow-card relative overflow-hidden group reveal-fade-up">
            <div class="absolute inset-0 bg-gradient-to-t from-fest-text/80 via-fest-text/20 to-transparent z-10 flex items-end justify-start p-4">
              <span class="font-mono text-xs text-white font-bold">CSE FEST Past Edition</span>
            </div>
            <!-- Mock Grid lines for visual tech style -->
            <div class="absolute inset-0 flex items-center justify-center z-0 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <line x1="0" y1="50" x2="100" y2="50" stroke-width="0.5" />
                <line x1="50" y1="0" x2="50" y2="100" stroke-width="0.5" />
                <circle cx="50" cy="50" r="20" stroke-width="0.5" />
              </svg>
            </div>
          </div>
        </div>

        <div class="mt-10">
          <NuxtLink to="/gallery" class="text-sm font-semibold text-fest-cyan hover:underline">
            Browse Event Gallery →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { events } from '~/utils/eventsData'

// Pull out 3 marquee events to show on homepage
const teaserEvents = computed(() => {
  return events.filter(e => ['iupc', 'hackathon', 'ctf'].includes(e.slug))
})

const stats = [
  { label: 'Estimated Attendees', value: '10,000+' },
  { label: 'Technical Events', value: '10' },
  { label: 'Fiesta Days', value: '8 Days' },
  { label: 'Universities Invited', value: '50+' }
]

const phases = [
  {
    title: 'Registration Phase',
    desc: 'Teams and individuals from all across the nation sign up for their preferred competition tracks.',
    date: 'February 15 – March 30, 2026'
  },
  {
    title: 'National Arena (Fest Week)',
    desc: 'Intense programming battles, hackathon code-sprints, hardware prototyping, game design, and expert seminars.',
    date: 'April 10 – April 17, 2026'
  },
  {
    title: 'Closing Gala & Feast',
    desc: 'The official award ceremony honoring outstanding tech achievements, followed by a cultural rock concert.',
    date: 'April 17, 2026'
  }
]

const tiers = [
  { name: 'Title Sponsor', slots: '1 Available', price: 'BDT 10,00,000' },
  { name: 'Powered By', slots: '1 Available', price: 'BDT 8,00,000' },
  { name: 'Gold Sponsor', slots: '2 Available', price: 'BDT 6,00,000' },
  { name: 'Silver Sponsor', slots: '2 Available', price: 'BDT 3,00,000' }
]

useSeoMeta({
  title: 'RUET CSE FEST 2026 | Department of CSE, RUET',
  description: 'Welcome to the official website of RUET CSE FEST 2026. A week-long tech extravaganza presenting programming contests, hackathons, VLSI challenges, and cultural nights.'
})
</script>
