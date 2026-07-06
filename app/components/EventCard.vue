<template>
  <div
    class="rounded-2xl p-6 flex flex-col justify-between h-full relative overflow-hidden group reveal-fade-up transition-all duration-300"
    :class="darkMode ? 'event-card-dark' : 'glass-panel glass-panel-hover'"
  >
    <div>
      <!-- Header: Title and Status -->
      <div class="flex justify-between items-start mb-4 gap-2">
        <h3
          class="font-display font-bold text-fluid-card-title group-hover:text-fest-cyan transition-colors duration-300"
          :class="darkMode ? 'text-white' : 'text-fest-text'"
        >
          {{ event.name }}
        </h3>
        <span
          class="shrink-0 px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider rounded-md border"
          :class="statusClasses[event.status]"
        >
          {{ statusLabels[event.status] }}
        </span>
      </div>

      <!-- Tagline / Hook -->
      <p class="text-xs sm:text-sm mb-6 line-clamp-2 leading-relaxed" :class="darkMode ? 'text-slate-400' : 'text-fest-muted'">
        {{ event.hook }}
      </p>

      <!-- Structured Grid (IUT Style) -->
      <div class="grid grid-cols-2 gap-4 border-y py-4 mb-6" :class="darkMode ? 'border-white/10' : 'border-fest-border'">
        <div>
          <span class="text-[9px] uppercase tracking-widest block" :class="darkMode ? 'text-slate-500' : 'text-fest-muted'">Team Size</span>
          <span class="font-mono text-xs font-bold" :class="darkMode ? 'text-slate-200' : 'text-fest-text'">{{ event.teamSize }}</span>
        </div>
        <div>
          <span class="text-[9px] uppercase tracking-widest block" :class="darkMode ? 'text-slate-500' : 'text-fest-muted'">Date</span>
          <span class="font-mono text-xs font-bold" :class="darkMode ? 'text-slate-200' : 'text-fest-text'">{{ event.date }}</span>
        </div>
        <div>
          <span class="text-[9px] uppercase tracking-widest block" :class="darkMode ? 'text-slate-500' : 'text-fest-muted'">Fee (BDT)</span>
          <span class="font-mono text-xs text-fest-amber font-bold">{{ event.fee }}</span>
        </div>
        <div>
          <span class="text-[9px] uppercase tracking-widest block" :class="darkMode ? 'text-slate-500' : 'text-fest-muted'">Venue</span>
          <span class="font-mono text-xs font-bold" :class="darkMode ? 'text-slate-200' : 'text-fest-text'">{{ event.venue }}</span>
        </div>
      </div>
    </div>

    <!-- CTA Footer -->
    <div class="flex items-center justify-between mt-auto pt-2">
      <span class="text-[10px] uppercase font-mono tracking-wider text-[#38BDF8]">
        {{ event.category }}
      </span>
      <NuxtLink
        :to="`/events/${event.slug}`"
        class="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-[#38BDF8] hover:text-white transition-colors"
      >
        <span>Explore Details</span>
        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  },
  darkMode: {
    type: Boolean,
    default: false
  }
})

const statusClasses = {
  open: 'bg-fest-success/10 border-fest-success/20 text-fest-success',
  coming_soon: 'bg-fest-amber/10 border-fest-amber/20 text-fest-amber',
  closed: 'bg-fest-danger/10 border-fest-danger/20 text-fest-danger'
}

const statusLabels = {
  open: 'Open',
  coming_soon: 'Coming Soon',
  closed: 'Closed'
}
</script>

