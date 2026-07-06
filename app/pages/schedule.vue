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
          Plan your week-long tech journey at RUET. Use the day-by-day tabs to filter events, times, and venues.
        </p>
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
        <div v-if="filteredSchedule.length > 0" class="relative pl-6 sm:pl-8 border-l border-fest-cyan/20 space-y-8">
          
          <!-- Loop through scheduled events of the active day -->
          <div v-for="(item, idx) in filteredSchedule" :key="idx" class="relative group">
            
            <!-- Timeline node point -->
            <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-fest-cyan flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-fest-cyan animate-ping" v-if="idx === 0"></div>
            </div>

            <div class="glass-panel group-hover:border-fest-cyan/30 rounded-2xl p-6 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span class="font-mono text-xs text-fest-cyan font-bold flex items-center space-x-1.5">
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

        <div v-else class="text-center py-16 glass-panel rounded-2xl border-fest-cyan/10">
          <p class="text-sm text-fest-muted">No scheduled events on this day. Use other day filters.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedDate = ref('10.04.2026')

const scheduleDays = [
  { label: 'Day 1', num: '10', month: 'April', dateStr: '10.04.2026' },
  { label: 'Day 2', num: '11', month: 'April', dateStr: '11.04.2026' },
  { label: 'Day 3', num: '12', month: 'April', dateStr: '12.04.2026' },
  { label: 'Day 4', num: '13', month: 'April', dateStr: '13.04.2026' },
  { label: 'Day 5', num: '14', month: 'April', dateStr: '14.04.2026' },
  { label: 'Day 6', num: '15', month: 'April', dateStr: '15.04.2026' },
  { label: 'Day 7', num: '16', month: 'April', dateStr: '16.04.2026' },
  { label: 'Day 8', num: '17', month: 'April', dateStr: '17.04.2026' }
]

const fullSchedule = [
  {
    date: '10.04.2026',
    time: '08:30 AM – 03:00 PM',
    name: 'Inter-University Programming Contest (IUPC)',
    slug: 'iupc',
    hook: 'The premier algorithms challenge. 5 hours of competitive code-sprinting under ACM ICPC style testing.',
    venue: 'CSE Building Computer Labs',
    mode: 'Onsite',
    participants: 'Inter-University'
  },
  {
    date: '11.04.2026',
    time: '09:00 AM (Sat) – onwards',
    name: 'National Hackathon (Pitching & Mentoring Rounds)',
    slug: 'hackathon',
    hook: 'Build prototypes to solve real-world problem sets in teams. Hackathon begins officially.',
    venue: 'Central Library Building',
    mode: 'Onsite',
    participants: 'Inter-University'
  },
  {
    date: '12.04.2026',
    time: 'up to 09:00 PM (Sun)',
    name: 'National Hackathon Final Evaluation',
    slug: 'hackathon',
    hook: 'Teams finalize software codes and prepare elevator pitches for judging panels.',
    venue: 'CSE Seminar Room',
    mode: 'Onsite',
    participants: 'Inter-University'
  },
  {
    date: '13.04.2026',
    time: '10:00 AM – 24 Hours',
    name: 'GameJam Start & Theme Reveal',
    slug: 'gamejam',
    hook: 'Design, code, and script original gaming assets around a secret design motif.',
    venue: 'CSE Lab 3 & Online',
    mode: 'Hybrid',
    participants: 'Inter-University'
  },
  {
    date: '14.04.2026',
    time: '09:00 AM – 09:00 PM',
    name: 'Capture The Flag (CTF) Arena',
    slug: 'ctf',
    hook: '12 hours jeopardy-style cybersecurity hacks. Solve reverse engineering and cryptography files.',
    venue: 'Online & CSE Virtual Lab',
    mode: 'Hybrid',
    participants: 'Inter-University'
  },
  {
    date: '15.04.2026',
    time: '09:00 AM – 06:00 PM',
    name: 'National Datathon Rounds',
    slug: 'datathon',
    hook: 'Train models on raw data pipelines, pitch mathematical model designs to machine learning experts.',
    venue: 'CSE Seminar Room',
    mode: 'Hybrid',
    participants: 'Inter-University'
  },
  {
    date: '15.04.2026',
    time: '02:00 PM – 05:00 PM',
    name: 'Campus Treasure Hunt',
    slug: 'treasure-hunt',
    hook: 'A physical puzzle solving game scattered across the RUET campus using QR scans and cryptography.',
    venue: 'RUET Campus Grounds',
    mode: 'Onsite',
    participants: 'RUET CSE Only'
  },
  {
    date: '16.04.2026',
    time: '09:00 AM – 05:00 PM',
    name: 'VLSI-thon Hardware Design Hackathon',
    slug: 'vlsi-thon',
    hook: 'Design integrated circuit modules, simulate layouts, and perform logical checks.',
    venue: 'RUET VLSI Lab',
    mode: 'Onsite',
    participants: 'Inter-University'
  },
  {
    date: '16.04.2026',
    time: '06:30 PM – 10:30 PM',
    name: 'Cultural Night & Live Concert',
    slug: 'cultural-night',
    hook: 'Enjoy performances from classical, dance, and rock student bands, followed by national rock headliners.',
    venue: 'RUET Main Auditorium',
    mode: 'Onsite',
    participants: 'Open to All'
  },
  {
    date: '17.04.2026',
    time: '09:30 AM – 01:00 PM',
    name: 'Tech-Talk & Industry Seminars',
    slug: 'tech-talk',
    hook: 'Keynotes from tech executives, artificial intelligence leaders, and global software alumni.',
    venue: 'RUET Auditorium Seminar Hall',
    mode: 'Onsite',
    participants: 'Open to All'
  },
  {
    date: '17.04.2026',
    time: '06:00 PM – 10:00 PM',
    name: 'Closing Gala, Prize Giving & Grand Dinner',
    slug: 'gala-night',
    hook: 'Honoring contest winners, distributed crest awards, and wrap up with a massive dinner feast.',
    venue: 'RUET Gymnasium & Playground',
    mode: 'Onsite',
    participants: 'RUET CSE Only'
  }
]

const filteredSchedule = computed(() => {
  return fullSchedule.filter(item => item.date === selectedDate.value)
})

useSeoMeta({
  title: 'Timetable & Schedule | RUET CSE FEST 2026',
  description: 'Detailed day-by-day timeline from April 10 to April 17, 2026. Keep track of contest dates, times, and venue halls.'
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
