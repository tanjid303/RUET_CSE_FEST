<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glowing backgrounds -->
    <div class="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-fest-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] bg-fest-amber/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Back Link -->
      <NuxtLink to="/events" class="inline-flex items-center space-x-2 text-sm text-fest-muted hover:text-fest-cyan transition-colors mb-8 group">
        <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Events Arena</span>
      </NuxtLink>

      <!-- Event Found State -->
      <div v-if="event" class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <!-- Left: Main Event Info -->
        <div class="lg:col-span-2 space-y-10">
          <div>
            <!-- Category and Status badges -->
            <div class="flex items-center space-x-3 mb-4">
              <span class="px-2.5 py-1 text-xs uppercase font-mono tracking-widest bg-fest-cyan/10 border border-fest-cyan/20 text-fest-cyan rounded">
                {{ event.category }} Track
              </span>
              <span
                class="px-2.5 py-1 text-xs uppercase font-bold tracking-widest rounded border"
                :class="statusClasses[event.status]"
              >
                {{ statusLabels[event.status] }}
              </span>
            </div>
            
            <h1 class="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4">
              {{ event.name }}
            </h1>
            <p class="text-lg text-fest-cyan font-mono tracking-wide">
              "{{ event.hook }}"
            </p>
          </div>

          <!-- Description Section -->
          <div class="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 class="font-display font-bold text-xl sm:text-2xl mb-4 border-b border-fest-muted/10 pb-2">About the Event</h2>
            <p class="text-sm sm:text-base text-fest-muted leading-relaxed">
              {{ event.description }}
            </p>
          </div>

          <!-- Rules & Guidelines -->
          <div class="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 class="font-display font-bold text-xl sm:text-2xl mb-4 border-b border-fest-muted/10 pb-2">Rules & Guidelines</h2>
            <ul class="space-y-4">
              <li v-for="(rule, idx) in event.rules" :key="idx" class="flex items-start space-x-3">
                <span class="flex-shrink-0 w-5 h-5 rounded bg-fest-cyan/10 border border-fest-cyan/20 text-fest-cyan font-mono text-xs flex items-center justify-center mt-0.5">
                  {{ idx + 1 }}
                </span>
                <span class="text-sm text-fest-muted leading-relaxed">{{ rule }}</span>
              </li>
            </ul>
          </div>

          <!-- Timing Details -->
          <div class="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 class="font-display font-bold text-xl sm:text-2xl mb-4 border-b border-fest-muted/10 pb-2">Schedule details</h2>
            <div class="flex items-center space-x-4 text-fest-muted text-sm sm:text-base font-mono">
              <svg class="w-5 h-5 text-fest-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ event.timeline }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Action Cards / Sidebar -->
        <div class="space-y-8">
          
          <!-- Registration Box -->
          <div class="glass-panel border-fest-cyan/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div class="absolute -top-12 -right-12 w-24 h-24 bg-fest-cyan/5 rounded-full blur-xl"></div>
            
            <h3 class="font-display font-bold text-lg mb-6">Contest Details</h3>
            
            <div class="space-y-4 text-sm font-sans mb-8">
              <div class="flex justify-between py-2 border-b border-fest-muted/5">
                <span class="text-fest-muted">Participation</span>
                <span class="font-mono text-fest-text font-bold">{{ event.teamSize }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-fest-muted/5">
                <span class="text-fest-muted">Contest Date</span>
                <span class="font-mono text-fest-text font-bold">{{ event.date }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-fest-muted/5">
                <span class="text-fest-muted">Entry Fee</span>
                <span class="font-mono text-fest-amber font-bold">{{ event.fee }} BDT</span>
              </div>
              <div class="flex justify-between py-2 border-b border-fest-muted/5">
                <span class="text-fest-muted">Venue Location</span>
                <span class="font-mono text-fest-text font-bold">{{ event.venue }}</span>
              </div>
            </div>

            <!-- CTA Action -->
            <a
              v-if="event.status === 'open'"
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-6 py-4 rounded-xl bg-fest-cyan text-white font-bold tracking-wide shadow-btn transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Open Registration Form
            </a>
            <button
              v-else-if="event.status === 'coming_soon'"
              disabled
              class="w-full text-center px-6 py-4 rounded-xl bg-fest-amber/15 border border-fest-amber/30 text-fest-amber font-bold tracking-wide cursor-not-allowed opacity-80"
            >
              Registration Opening Soon
            </button>
            <button
              v-else
              disabled
              class="w-full text-center px-6 py-4 rounded-xl bg-fest-danger/10 border border-fest-danger/25 text-fest-danger font-bold tracking-wide cursor-not-allowed opacity-80"
            >
              Registration Closed
            </button>
          </div>

          <!-- Prize Rewards Sidebar -->
          <div class="glass-panel border-fest-amber/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div class="absolute -top-12 -right-12 w-24 h-24 bg-fest-amber/5 rounded-full blur-xl"></div>
            
            <h3 class="font-display font-bold text-lg text-fest-amber mb-4 flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4l-1 3h-3m1 10H8l1-3h3m-1 3H8l1-3h3" />
              </svg>
              <span>Rewards & Prizes</span>
            </h3>
            <p class="text-xs text-fest-muted leading-relaxed mb-4">
              Winners receive cash payouts and departmental recognition crests at the Grand Dinner.
            </p>
            <div class="font-mono text-sm text-fest-text font-bold border-t border-fest-muted/10 pt-4 leading-relaxed whitespace-pre-line">
              {{ event.prizes }}
            </div>
          </div>

          <!-- Sponsor tag placeholder -->
          <div class="glass-panel rounded-2xl p-6 text-center border-fest-muted/5">
            <span class="text-[10px] uppercase font-mono tracking-widest text-fest-muted block mb-3">Event presenting sponsor</span>
            <div class="py-4 border border-dashed border-fest-muted/20 rounded-lg text-xs font-mono text-fest-muted">
              Sponsor Brand Slot Available<br />
              <NuxtLink to="/sponsors" class="text-fest-cyan hover:underline mt-2 inline-block">Become a Partner</NuxtLink>
            </div>
          </div>

        </div>

      </div>

      <!-- Event Not Found State -->
      <div v-else class="text-center py-20 glass-panel rounded-3xl border-fest-cyan/10 max-w-lg mx-auto">
        <svg class="w-16 h-16 text-fest-danger/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h2 class="font-display font-bold text-2xl text-fest-text mb-2">Event Not Found</h2>
        <p class="text-sm text-fest-muted mb-6">The requested event page could not be located in our records. Please verify the event path.</p>
        <NuxtLink to="/events" class="px-6 py-3 rounded-lg bg-fest-cyan text-white font-bold text-sm">
          Return to Events Arena
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { events } from '~/utils/eventsData'

const route = useRoute()
const event = computed(() => {
  return events.find(e => e.slug === route.params.slug)
})

const statusClasses = {
  open: 'bg-fest-success/10 border-fest-success/20 text-fest-success',
  coming_soon: 'bg-fest-amber/10 border-fest-amber/20 text-fest-amber',
  closed: 'bg-fest-danger/10 border-fest-danger/20 text-fest-danger'
}

const statusLabels = {
  open: 'Registration Open',
  coming_soon: 'Coming Soon',
  closed: 'Registration Closed'
}

// Dynamically set page SEO
if (event.value) {
  useSeoMeta({
    title: `${event.value.name} | RUET CSE FEST 2026`,
    description: event.value.description
  })
}
</script>
