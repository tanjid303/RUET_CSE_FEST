<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glows -->
    <div class="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] bg-fest-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Page Header -->
      <div class="text-center mb-12">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Our Legacy</span>
        <h1 class="font-display font-bold text-3xl sm:text-5xl">Photo Gallery</h1>
        <p class="mt-4 max-w-xl mx-auto text-sm text-fest-muted leading-relaxed">
          Take a look back at the energy, intensity, and celebrations of our previous RUET CSE Fest editions.
        </p>
      </div>

      <!-- Year Filters -->
      <div class="flex justify-center space-x-3 mb-10">
        <button
          v-for="year in years"
          :key="year"
          @click="selectedYear = year"
          class="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border"
          :class="[
            selectedYear === year
              ? 'bg-fest-cyan text-white border-fest-cyan shadow-btn'
              : 'bg-white text-fest-muted border-fest-border hover:text-fest-cyan hover:border-fest-cyan/30'
          ]"
        >
          CSE FEST {{ year }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="item in filteredPhotos"
          :key="item.id"
          @click="openLightbox(item)"
          class="glass-panel glass-panel-hover rounded-2xl overflow-hidden aspect-[4/3] relative group cursor-pointer"
        >
          <!-- Styled placeholder representation representing actual photo -->
          <div class="absolute inset-0 flex flex-col justify-between p-6 z-10 bg-gradient-to-t from-fest-bg via-fest-bg/40 to-transparent">
            
            <!-- Category Badge -->
            <div>
              <span class="px-2 py-0.5 text-[9px] uppercase font-mono tracking-widest bg-fest-cyan/10 border border-fest-cyan/20 text-fest-cyan rounded">
                {{ item.category }}
              </span>
            </div>

            <!-- Title & Metadata -->
            <div>
              <h3 class="font-display font-bold text-base sm:text-lg text-fest-text mb-1 group-hover:text-fest-cyan transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-xs text-fest-muted line-clamp-2 leading-relaxed">
                {{ item.desc }}
              </p>
            </div>

          </div>

          <!-- Camera Icon & Grid background overlay simulating high-tech photo card -->
          <div class="absolute inset-0 z-0 flex items-center justify-center opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-300">
            <svg class="w-20 h-20 text-fest-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <!-- Tech Lines Graphic background -->
          <div class="absolute inset-0 border border-dashed border-fest-cyan/5 m-4 rounded-xl pointer-events-none"></div>

        </div>
      </div>

      <!-- Lightbox Modal -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="activePhoto" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fest-text/40 backdrop-blur-md" @click.self="closeLightbox">
          
          <div class="glass-panel border-fest-cyan/20 max-w-2xl w-full rounded-2xl p-6 sm:p-8 relative">
            
            <!-- Close button -->
            <button
              @click="closeLightbox"
              class="absolute top-4 right-4 text-fest-muted hover:text-fest-cyan transition-colors"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Mock image placeholder with glowing borders -->
            <div class="w-full aspect-[16/9] bg-fest-surface border border-fest-border rounded-xl flex flex-col items-center justify-center p-8 mb-6 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-fest-cyan/5 to-fest-amber/5 opacity-50"></div>
              
              <!-- Geometric wireframes to make the placeholder look cool -->
              <svg class="w-full h-full opacity-[0.03] absolute inset-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <grid x="0" y="0" width="10" height="10" />
                <line x1="0" y1="0" x2="100" y2="100" stroke-width="0.2" />
                <line x1="100" y1="0" x2="0" y2="100" stroke-width="0.2" />
                <circle cx="50" cy="50" r="30" stroke-width="0.2" />
              </svg>

              <svg class="w-16 h-16 text-fest-cyan mb-4 relative z-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-xs font-mono uppercase tracking-widest text-fest-muted relative z-10">Historical Frame - RUET CSE FEST {{ activePhoto.year }}</span>
            </div>

            <!-- Lightbox Metadata -->
            <div>
              <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan block mb-1">
                {{ activePhoto.category }} • {{ activePhoto.year }} Edition
              </span>
              <h2 class="font-display font-bold text-xl sm:text-2xl text-fest-text mb-2">
                {{ activePhoto.title }}
              </h2>
              <p class="text-sm text-fest-muted leading-relaxed">
                {{ activePhoto.desc }}
              </p>
            </div>

          </div>

        </div>
      </transition>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedYear = ref('2K22')
const activePhoto = ref(null)

const years = ['2K22', '2K19']

const photos = [
  {
    id: 1,
    year: '2K22',
    category: 'Programming Contest',
    title: 'The Tension of the 5th Hour',
    desc: 'Teams of programmers brainstorming over complex problem algorithms in the closing hours of IUPC 2022.'
  },
  {
    id: 2,
    year: '2K22',
    category: 'Robotics & Hardware',
    title: 'VLSI Prototyping Showcase',
    desc: 'Students tuning integrated circuit configurations and demonstrating digital chip micro-controllers.'
  },
  {
    id: 3,
    year: '2K22',
    category: 'Cultural Concert',
    title: 'Rock Concert Headliner Session',
    desc: 'Auditorium packed to capacity as students unwind with energy packed concerts on Closing Night.'
  },
  {
    id: 4,
    year: '2K22',
    category: 'Prize Gala',
    title: 'Honoring algorithmic Champions',
    desc: 'RUET CSE department professors handing out trophies and cash checks to victorious programming teams.'
  },
  {
    id: 5,
    year: '2K19',
    category: 'Hackathon Sprint',
    title: '36-Hour Hackathon Coders',
    desc: 'Midnight coding sprints in the library labs as students develop innovative prototypes.'
  },
  {
    id: 6,
    year: '2K19',
    category: 'Gaming Zone',
    title: 'GameJam Development Review',
    desc: 'Gaming evaluation panels reviewing custom student games on graphic style and mechanics.'
  }
]

const filteredPhotos = computed(() => {
  return photos.filter(p => p.year === selectedYear.value)
})

const openLightbox = (photo) => {
  activePhoto.value = photo
}

const closeLightbox = () => {
  activePhoto.value = null
}

useSeoMeta({
  title: 'Memory Gallery | RUET CSE FEST 2026',
  description: 'View photos from past editions of RUET CSE Fest, showcasing competitive moments, concert crowds, and award ceremonies.'
})
</script>
