<template>
  <div class="w-full bg-white/85 backdrop-blur-xl border-y border-fest-border py-6 overflow-hidden relative select-none shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
    <div class="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-fest-bg to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-fest-bg to-transparent z-10 pointer-events-none"></div>

    <div class="flex items-center">
      <div class="animate-marquee whitespace-nowrap flex items-center space-x-12 pr-12">
        <div v-for="(sponsor, index) in marqueeItems" :key="`s1-${index}`" class="flex items-center space-x-3 text-fest-muted hover:text-fest-cyan transition-colors cursor-pointer">
          <!-- Geometric Icon Placeholder -->
          <div class="w-6 h-6 flex items-center justify-center border border-current rounded-sm">
            <span class="font-display font-bold text-xs">{{ sponsor.abbr }}</span>
          </div>
          <span class="font-display font-medium text-xs tracking-widest uppercase">{{ sponsor.name }}</span>
        </div>
      </div>
      <!-- Duplicate for seamless looping -->
      <div class="animate-marquee whitespace-nowrap flex items-center space-x-12 pr-12" aria-hidden="true">
        <div v-for="(sponsor, index) in marqueeItems" :key="`s2-${index}`" class="flex items-center space-x-3 text-fest-muted hover:text-fest-cyan transition-colors cursor-pointer">
          <div class="w-6 h-6 flex items-center justify-center border border-current rounded-sm">
            <span class="font-display font-bold text-xs">{{ sponsor.abbr }}</span>
          </div>
          <span class="font-display font-medium text-xs tracking-widest uppercase">{{ sponsor.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const marqueeItems = [
  { name: 'Dept of CSE, RUET', abbr: 'RC' },
  { name: 'Rajshahi University of Eng. & Tech.', abbr: 'RU' },
  { name: 'Sponsorships Open 2026', abbr: 'SO' },
  { name: 'Title Sponsor Slot Available', abbr: 'TS' },
  { name: 'Powered-By Partner Slot', abbr: 'PB' },
  { name: 'Become a Gold Sponsor', abbr: 'GS' },
  { name: 'Become a Silver Sponsor', abbr: 'SS' }
]
</script>
