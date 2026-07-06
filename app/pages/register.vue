<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glows -->
    <div class="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] bg-fest-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-fest-amber/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Page Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Participate</span>
        <h1 class="font-display font-bold text-3xl sm:text-5xl">Registration Hub</h1>
        <p class="mt-4 max-w-xl mx-auto text-sm text-fest-muted leading-relaxed">
          Sign up for the national coding sprints, gaming tracks, and hardware design hacks. Find fees and registration forms below.
        </p>
      </div>

      <!-- Registration list by event -->
      <div class="space-y-6">
        <div v-for="event in events" :key="event.id" class="glass-panel rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-fest-cyan/20 transition-all duration-300">
          
          <div class="space-y-2">
            <div class="flex items-center space-x-3 flex-wrap gap-2">
              <h3 class="font-display font-bold text-lg sm:text-xl text-fest-text">
                {{ event.name }}
              </h3>
              <span
                class="px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider rounded border shrink-0"
                :class="statusClasses[event.status]"
              >
                {{ statusLabels[event.status] }}
              </span>
            </div>
            
            <p class="text-xs sm:text-sm text-fest-muted max-w-xl leading-relaxed">
              {{ event.hook }}
            </p>

            <!-- Metadata info row -->
            <div class="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-[11px] font-mono text-fest-muted uppercase tracking-wider">
              <span>Team: <strong class="text-fest-text">{{ event.teamSize }}</strong></span>
              <span>Fee: <strong class="text-fest-amber">{{ event.fee }} BDT</strong></span>
              <span>Venue: <strong class="text-fest-text">{{ event.venue }}</strong></span>
            </div>
          </div>

          <!-- Action Button -->
          <div class="shrink-0">
            <a
              v-if="event.status === 'open'"
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-center px-6 py-3 rounded-lg bg-fest-cyan text-white font-bold text-xs uppercase tracking-wider shadow-btn hover:-translate-y-0.5 transition-all"
            >
              Sign Up Form
            </a>
            <button
              v-else-if="event.status === 'coming_soon'"
              disabled
              class="w-full px-6 py-3 rounded-lg bg-fest-amber/15 border border-fest-amber/35 text-fest-amber text-xs uppercase tracking-wider font-bold cursor-not-allowed opacity-80"
            >
              Coming Soon
            </button>
            <button
              v-else
              disabled
              class="w-full px-6 py-3 rounded-lg bg-fest-danger/10 border border-fest-danger/35 text-fest-danger text-xs uppercase tracking-wider font-bold cursor-not-allowed opacity-80"
            >
              Closed
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { events } from '~/utils/eventsData'

const statusClasses = {
  open: 'bg-fest-success/10 border-fest-success/20 text-fest-success',
  coming_soon: 'bg-fest-amber/10 border-fest-amber/20 text-fest-amber',
  closed: 'bg-fest-danger/10 border-fest-danger/20 text-fest-danger'
}

const statusLabels = {
  open: 'Registration Open',
  coming_soon: 'Coming Soon',
  closed: 'Closed'
}

useSeoMeta({
  title: 'Event Registration Hub | RUET CSE FEST 2026',
  description: 'Apply and sign up for programming competitions, hackathons, and VLSI challenges. Event fees and forms.'
})
</script>
