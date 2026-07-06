<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glow -->
    <div class="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-fest-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Fest Tracks</span>
        <h1 class="font-display font-bold text-3xl sm:text-5xl">Events Arena</h1>
        <p class="mt-4 max-w-xl mx-auto text-sm text-fest-muted leading-relaxed">
          From algorithmic brain-sprints to hardware circuit synthesis, cultural nights to guest talks — explore the full line-up.
        </p>
      </div>

      <!-- Filters & Search Controls -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <!-- Categories Filters -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border"
            :class="[
              selectedCategory === category
                ? 'bg-fest-cyan text-white border-fest-cyan shadow-btn'
                : 'bg-white text-fest-muted border-fest-border hover:text-fest-cyan hover:border-fest-cyan/30'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full md:max-w-xs">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search events..."
            class="form-input text-sm font-sans"
          />
          <span class="absolute right-3 top-3 text-fest-muted/40">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
        </div>
      </div>

      <!-- Events Grid -->
      <div v-if="filteredEvents.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="event in filteredEvents" :key="event.id" class="h-full">
          <EventCard :event="event" />
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20 glass-panel rounded-2xl border-fest-cyan/10 max-w-md mx-auto">
        <svg class="w-12 h-12 text-fest-muted/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="font-display font-semibold text-lg text-fest-text mb-2">No Events Found</h3>
        <p class="text-sm text-fest-muted">We couldn't find any events matching your search criteria. Try removing filters or changing search keywords.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { events } from '~/utils/eventsData'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Competitive', 'Gaming', 'General']

const filteredEvents = computed(() => {
  return events.filter(event => {
    // Category match
    const categoryMatch = selectedCategory.value === 'All' || event.category === selectedCategory.value

    // Search query match
    const query = searchQuery.value.trim().toLowerCase()
    const searchMatch = !query ||
      event.name.toLowerCase().includes(query) ||
      event.hook.toLowerCase().includes(query) ||
      event.venue.toLowerCase().includes(query)

    return categoryMatch && searchMatch
  })
})

useSeoMeta({
  title: 'All Events | RUET CSE FEST 2026',
  description: 'Explore the full listing of 10 events scheduled for RUET CSE FEST 2026. Register for Programming Contests, Hackathons, VLSI, GameJam, and cybersecurity rounds.'
})
</script>
