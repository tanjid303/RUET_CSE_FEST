<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glow -->
    <div class="absolute top-[15%] right-[20%] w-[30vw] h-[30vw] bg-fest-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Page Header -->
      <div class="text-center mb-12">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Fest Timeline</span>
        <h1 class="font-display font-bold text-3xl sm:text-5xl">Event Schedule</h1>
        <p class="mt-4 max-w-xl mx-auto text-sm text-fest-muted leading-relaxed">
          The detailed schedule for RUET CSE FEST 2026 is being finalized. Check back soon for the full day-by-day programme.
        </p>
        <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fest-amber/10 border border-fest-amber/25 text-fest-amber font-mono text-xs font-bold">
          <span class="w-2 h-2 rounded-full bg-fest-amber animate-ping inline-block"></span>
          Schedule — To Be Announced
        </div>
      </div>

      <!-- Schedule Tabs (Days Navigation) -->
      <div class="flex items-center justify-start overflow-x-auto pb-4 mb-10 scrollbar-none gap-2">
        <button
          v-for="day in scheduleDays"
          :key="day.dateStr"
          @click="selectedDate = day.dateStr"
          class="flex flex-col items-center justify-center min-w-[90px] p-3 rounded-xl border text-center transition-all shrink-0"
          :class="[
            selectedDate === day.dateStr
              ? 'bg-fest-cyan text-white border-fest-cyan shadow-btn'
              : 'bg-white text-fest-muted border-fest-border hover:text-fest-cyan hover:border-fest-cyan/30'
          ]"
        >
          <span class="font-mono text-xs uppercase tracking-widest font-bold">{{ day.label }}</span>
          <span class="font-display font-bold text-base sm:text-lg mt-1">{{ day.num }}</span>
          <span class="text-[9px] font-medium tracking-wide opacity-80">{{ day.month }}</span>
        </button>
      </div>

      <!-- Timeline Content -->
      <div class="max-w-3xl mx-auto">
        <div class="relative pl-6 sm:pl-8 border-l border-fest-cyan/20 space-y-8">
          <div v-for="(item, idx) in filteredSchedule" :key="idx" class="relative group">
            <!-- Timeline node point -->
            <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-fest-cyan flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-fest-cyan animate-ping" v-if="idx === 0"></div>
            </div>

            <div class="glass-panel group-hover:border-fest-cyan/30 rounded-2xl p-6 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span class="font-mono text-xs text-fest-amber font-bold flex items-center space-x-1.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{{ item.time }}</span>
                </span>
                <span class="px-2 py-0.5 text-[9px] uppercase font-mono tracking-widest rounded bg-fest-surface border border-fest-border text-fest-muted">
                  {{ item.mode }} / {{ item.participants }}
                </span>
              </div>

              <h3 class="font-display font-bold text-lg sm:text-xl text-fest-text mb-2">
                {{ item.name }}
              </h3>
              
              <p class="text-xs sm:text-sm text-fest-muted mb-4 leading-relaxed">
                {{ item.hook }}
              </p>

              <div class="flex flex-wrap items-center justify-between gap-4 border-t border-fest-muted/5 pt-4 text-xs font-sans">
                <div class="flex items-center space-x-1.5 text-fest-muted">
                  <svg class="w-4 h-4 text-fest-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>{{ item.venue }}</span>
                </div>
                <NuxtLink
                  v-if="item.slug"
                  :to="`/events/${item.slug}`"
                  class="text-fest-cyan hover:underline font-semibold"
                >
                  Explore Event Details →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- TBA notice when no events shown -->
        <div v-if="filteredSchedule.length === 0" class="text-center py-16 glass-panel rounded-2xl border-fest-amber/20">
          <div class="w-14 h-14 rounded-2xl bg-fest-amber/10 border border-fest-amber/20 flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7 text-fest-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <p class="font-mono text-sm font-bold text-fest-amber">Schedule — TBA</p>
          <p class="text-xs text-fest-muted mt-2 max-w-xs mx-auto">Detailed timings for this day are being finalized. Check back closer to the fest dates.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedDate = ref('01.10.2026')

const scheduleDays = [
  { label: 'Day 1', num: '1', month: 'October', dateStr: '01.10.2026' },
  { label: 'Day 2', num: '2', month: 'October', dateStr: '02.10.2026' },
  { label: 'Day 3', num: '3', month: 'October', dateStr: '03.10.2026' },
  { label: 'Day 4', num: '4', month: 'October', dateStr: '04.10.2026' },
  { label: 'Day 5', num: '5', month: 'October', dateStr: '05.10.2026' },
  { label: 'Day 6', num: '6', month: 'October', dateStr: '06.10.2026' },
  { label: 'Day 7', num: '7', month: 'October', dateStr: '07.10.2026' },
  { label: 'Day 8', num: '8', month: 'October', dateStr: '08.10.2026' },
  { label: 'Day 9', num: '9', month: 'October', dateStr: '09.10.2026' },
  { label: 'Day 10', num: '10', month: 'October', dateStr: '10.10.2026' },
  { label: 'Day 11', num: '11', month: 'October', dateStr: '11.10.2026' },
  { label: 'Day 12', num: '12', month: 'October', dateStr: '12.10.2026' },
  { label: 'Day 13', num: '13', month: 'October', dateStr: '13.10.2026' },
  { label: 'Day 14', num: '14', month: 'October', dateStr: '14.10.2026' },
  { label: 'Day 15', num: '15', month: 'October', dateStr: '15.10.2026' }
]

const fullSchedule = [
  // Schedule will be announced soon — all timings are TBA
]

const filteredSchedule = computed(() => {
  return fullSchedule.filter(item => item.date === selectedDate.value)
})

useSeoMeta({
  title: 'Timetable & Schedule | RUET CSE FEST 2026',
  description: 'Event schedule for RUET CSE FEST 2026. Full timetable coming soon — stay tuned for day-by-day programme, contest dates, and venue details.'
})
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-none {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
