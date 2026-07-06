<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glows -->
    <div class="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] bg-fest-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-fest-amber/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Page Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Partner With Us</span>
        <h1 class="font-display font-bold text-3xl sm:text-5xl">Sponsorship Opportunities</h1>
        <p class="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-fest-muted leading-relaxed">
          Position your brand at the center of innovation and connect with thousands of young developers, engineers, and designers across Bangladesh.
        </p>
      </div>

      <!-- Section: Why Sponsor Us -->
      <section class="mb-20">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-center mb-10">Why Sponsor RUET CSE FEST?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title" class="glass-panel rounded-2xl p-6 relative group hover:border-fest-cyan/35 transition-all">
            <div class="w-12 h-12 rounded-lg bg-fest-cyan/10 border border-fest-cyan/20 text-fest-cyan flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
              <!-- SVG Icons -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="benefit.icon"></svg>
            </div>
            <h3 class="font-display font-bold text-lg mb-2 text-fest-text">{{ benefit.title }}</h3>
            <p class="text-xs sm:text-sm text-fest-muted leading-relaxed">{{ benefit.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Section: Sponsorship Tiers (SaaS Style pricing cards) -->
      <section class="mb-20">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-center mb-4">Sponsorship Tiers</h2>
        <p class="text-xs sm:text-sm text-fest-muted text-center max-w-lg mx-auto mb-12">
          Select a tier that matches your organization's outreach objectives. Custom allocations are available.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="tier in tiers" :key="tier.name" class="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group border-t-4" :style="{ borderTopColor: tier.color }">
            <div class="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-5 blur-xl group-hover:opacity-10 transition-opacity" :style="{ backgroundColor: tier.color }"></div>

            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-fest-muted block mb-2">{{ tier.slots }} slot available</span>
              <h3 class="font-display font-bold text-xl mb-4 text-fest-text">{{ tier.name }}</h3>
              <div class="font-mono text-2xl sm:text-3xl font-bold text-fest-amber mb-6">
                {{ tier.price === 'TBA' ? 'TBA' : tier.price + ' BDT' }}
              </div>
              <ul class="space-y-3 mb-8">
                <li v-for="feature in tier.features" :key="feature" class="flex items-start space-x-2 text-xs sm:text-sm text-fest-muted">
                  <svg class="w-4 h-4 text-fest-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <a href="#inquiry" class="block w-full text-center py-2.5 rounded-lg border border-fest-cyan/20 hover:border-fest-cyan/50 hover:bg-fest-cyan/5 font-semibold text-xs sm:text-sm text-fest-cyan transition-all">
              Inquire Tier
            </a>
          </div>
        </div>
      </section>

      <!-- Section: Privilege Matrix Table -->
      <section class="mb-20 overflow-x-auto">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-center mb-4">Privilege Matrix</h2>
        <p class="text-xs sm:text-sm text-fest-muted text-center max-w-lg mx-auto mb-10">
          A side-by-side comparison of deliverables provided to Title, Gold, and Silver partners.
        </p>

        <div class="inline-block min-w-full align-middle">
          <table class="min-w-full divide-y divide-fest-cyan/10 border border-fest-cyan/10 rounded-2xl overflow-hidden glass-panel">
            <thead>
              <tr class="bg-fest-surface font-display">
                <th scope="col" class="px-6 py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-fest-cyan">Privilege / Privilege Tier</th>
                <th scope="col" class="px-6 py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-fest-cyan">Title Sponsor</th>
                <th scope="col" class="px-6 py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-fest-cyan">Gold Sponsor</th>
                <th scope="col" class="px-6 py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-fest-cyan">Silver Sponsor</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-fest-muted/5 font-sans">
              <tr v-for="row in matrixRows" :key="row.privilege" class="hover:bg-fest-surface transition-colors">
                <td class="px-6 py-4 text-xs sm:text-sm text-fest-text font-medium">{{ row.privilege }}</td>
                <td class="px-6 py-4 text-xs sm:text-sm text-fest-muted">{{ row.title }}</td>
                <td class="px-6 py-4 text-xs sm:text-sm text-fest-muted">{{ row.gold }}</td>
                <td class="px-6 py-4 text-xs sm:text-sm text-fest-muted">{{ row.silver }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section: Event Sponsor Callout -->
      <section class="mb-20 glass-panel border-fest-amber/20 rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden">
        <div class="absolute -top-12 -left-12 w-24 h-24 bg-fest-amber/5 rounded-full blur-xl"></div>
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div class="w-12 h-12 shrink-0 rounded-lg bg-fest-amber/15 border border-fest-amber/20 text-fest-amber flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
          </div>
          <div class="text-center sm:text-left space-y-2">
            <h3 class="font-display font-bold text-lg text-fest-text">Track & Event Sponsorships</h3>
            <p class="text-xs sm:text-sm text-fest-muted leading-relaxed">
              Prefer a lower barrier of entry? Sponsor a specific competition (e.g. "IUPC presented by [Your Company]"). Event-specific sponsorship pricing is <strong class="text-fest-amber font-mono font-bold">TBA</strong>. Contact us to discuss custom packages and exclusive track branding.
            </p>
          </div>
        </div>
      </section>

      <!-- Section: Download PDF & Inquiry Form -->
      <div id="inquiry" class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">
        
        <!-- Left: Info & Proposal download -->
        <div class="space-y-6">
          <h2 class="font-display font-bold text-2xl sm:text-3xl">Ready to Discuss?</h2>
          <p class="text-sm sm:text-base text-fest-muted leading-relaxed">
            Our sponsorship committee is ready to collaborate with your team to organize tailor-made marketing integrations, recruitments, and brand presentations.
          </p>
          <p class="text-xs text-fest-muted">
            * Note: Sponsorship amounts exclude VAT/tax. Deliverables will be formally drafted into agreements.
          </p>
          <div class="pt-4 flex flex-col sm:flex-row gap-4">
            <!-- Downloader button -->
            <a
              href="#"
              class="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-fest-cyan text-white font-bold tracking-wide shadow-btn hover:-translate-y-0.5 transition-all"
              @click.prevent="downloadMockProposal"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span>Download Proposal Deck (PDF)</span>
            </a>
          </div>
        </div>

        <!-- Right: Inquiry Form -->
        <div class="glass-panel border-fest-cyan/15 rounded-2xl p-6 sm:p-8">
          <h3 class="font-display font-bold text-xl mb-6">Sponsorship Inquiry Form</h3>
          <form @submit.prevent="submitForm" class="space-y-4 text-xs sm:text-sm">
            <div>
              <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Contact Person Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="form-input"
                placeholder="John Doe"
              />
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Corporate Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="form-input"
                  placeholder="johndoe@company.com"
                />
              </div>
              <div>
                <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Company Name</label>
                <input
                  v-model="form.company"
                  type="text"
                  required
                  class="form-input"
                  placeholder="Company Ltd."
                />
              </div>
            </div>

            <div>
              <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Target Tier interest</label>
              <select
                v-model="form.tier"
                class="form-input"
              >
                <option value="title">Title Sponsor (TBA)</option>
                <option value="powered_by">Powered By Sponsor (TBA)</option>
                <option value="gold">Gold Sponsor (TBA)</option>
                <option value="silver">Silver Sponsor (TBA)</option>
                <option value="event">Event Specific (TBA)</option>
                <option value="other">Other / Custom</option>
              </select>
            </div>

            <div>
              <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Message or requirements</label>
              <textarea
                v-model="form.message"
                rows="4"
                class="form-input"
                placeholder="Let us know what marketing objectives your team has..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 rounded-lg bg-fest-cyan text-white font-bold tracking-wide shadow-btn hover:-translate-y-0.5 transition-all"
            >
              Send Partnership Enquiry
            </button>
            
            <p v-if="submitSuccess" class="text-xs text-fest-success font-medium text-center mt-2">
              ✓ Enquiry submitted successfully! Our sponsorship desk will contact you soon.
            </p>
          </form>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const benefits = [
  {
    title: 'Brand Activation & Reach',
    desc: 'Engage with a core base of 10,000+ local attendees and a national footprint of 50+ visiting universities during fest week.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />`
  },
  {
    title: 'Talent Acquisition & Recruiting',
    desc: 'Obtain dedicated access to resume databases, host technical coding tests, and run interactive hiring sessions on campus.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 025.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />`
  },
  {
    title: 'On-site Media Exposure',
    desc: 'Prominent logo display on core flyers, social handles, YouTube video frames, shirts, banners, and backdrops.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />`
  }
]

const tiers = [
  {
    name: 'Title Sponsor',
    slots: '1',
    price: 'TBA',
    color: '#0E7C86',
    features: [
      'Name baked into fest title',
      'Exclusive logo sizing (Hero)',
      '1x Dedicated Job Fair Stall',
      'Opening/Closing speech slot',
      'Full participant Database access',
      'Closing concert banner'
    ]
  },
  {
    name: 'Powered By',
    slots: '1',
    price: 'TBA',
    color: '#C2760F',
    features: [
      'Co-branding privileges',
      'Secondary logo sizing',
      '1x Job Fair Stall',
      'Speech slot at Gala night',
      'Participant Database access',
      'Social media integration'
    ]
  },
  {
    name: 'Gold Sponsor',
    slots: '2',
    price: 'TBA',
    color: '#64748B',
    features: [
      'Featured branding size',
      '1x Recruitment Stall',
      'Crests distribution role',
      'Half-page Matrix branding',
      'Logo on attendee badges'
    ]
  },
  {
    name: 'Silver Sponsor',
    slots: '2',
    price: 'TBA',
    color: '#92400E',
    features: [
      'Standard branding size',
      'Logos on website footer',
      'Promotional item distribution',
      'Group social post shout-out'
    ]
  }
]

const matrixRows = [
  { privilege: 'Naming Rights in Logo/Title', title: 'Yes, "Title Sponsor Presents"', gold: 'No', silver: 'No' },
  { privilege: 'Logo Size on Main Backdrop', title: 'Extra Large (Top Header)', gold: 'Large', silver: 'Medium' },
  { privilege: 'Marketing / Recruitment Stall', title: 'Prime Location (20x20 ft)', gold: 'Standard (10x10 ft)', silver: 'Shared canopy' },
  { privilege: 'Closing Ceremony Speech Slot', title: 'Yes (10 Mins)', gold: 'Yes (5 Mins)', silver: 'Honorable mention' },
  { privilege: 'Attendee Database Access', title: 'Full Access (with consent)', gold: 'Restricted to competition tracks', silver: 'No' },
  { privilege: 'Social Media Dedicated Campaign', title: '3 Dedicated posts + video', gold: '2 Dedicated posts', silver: '1 Group post' }
]

const form = reactive({
  name: '',
  email: '',
  company: '',
  tier: 'gold',
  message: ''
})

const submitSuccess = ref(false)

const submitForm = () => {
  submitSuccess.value = true
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.company = ''
    form.message = ''
    submitSuccess.value = false
  }, 4000)
}

const downloadMockProposal = () => {
  alert('Preparing the RUET CSE FEST 2026 Sponsorship Deck (PDF) download request...')
}

useSeoMeta({
  title: 'Become a Sponsor | RUET CSE FEST 2026',
  description: 'Partnership opportunities, tier structures, privilege matrix lists, and download links for the RUET CSE FEST 2026 sponsorship proposal.'
})
</script>
