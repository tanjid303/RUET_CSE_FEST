<template>
  <div class="relative isolate min-h-screen bg-fest-bg bg-scanline-texture text-fest-text flex flex-col font-sans">
    <!-- Header -->
    <header
      :class="[
        'sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl rounded-2xl md:rounded-full border transition-all duration-500 ease-out will-change-[transform,background-color,box-shadow] bg-white/90 backdrop-blur-xl backdrop-saturate-150',
        isScrolled
          ? 'border-fest-border shadow-[0_12px_40px_rgba(35,31,28,0.10)] py-1 scale-[0.99]'
          : 'border-fest-border/80 shadow-[0_4px_16px_rgba(35,31,28,0.06)] py-2'
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14 md:h-16">
          <!-- Logo / Brand -->
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div class="relative w-9 h-9 flex items-center justify-center bg-fest-surface border border-fest-cyan/20 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <span class="text-fest-cyan font-display font-bold text-lg select-none">R</span>
            </div>
            <div class="flex flex-col">
              <span class="font-display font-bold text-sm md:text-base tracking-wider text-fest-text group-hover:text-fest-cyan transition-colors">RUET CSE FEST</span>
              <span class="font-mono text-[9px] tracking-widest text-fest-cyan uppercase -mt-0.5">2K26</span>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-1 rounded-full border border-fest-border/80 bg-[#FBF9F6]/85 px-1 py-1 shadow-[0_2px_12px_rgba(35,31,28,0.02)]">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fest-text transition-all duration-300 hover:text-fest-cyan hover:bg-white/90"
              active-class="bg-white text-fest-cyan border border-fest-border/50 shadow-sm"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>

          <!-- Desktop CTA -->
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLink
              to="/sponsors"
              class="text-xs font-semibold uppercase tracking-wider text-fest-text hover:text-fest-cyan transition-colors"
            >
              Sponsor Us
            </NuxtLink>
            <NuxtLink
              to="/register"
              class="glow-register-button px-5 py-2.5 rounded-full bg-fest-cyan text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Register Now
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex md:hidden">
            <button
              @click="toggleMobileMenu"
              class="inline-flex items-center justify-center p-2 rounded-md text-fest-muted hover:text-fest-cyan focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <svg
                v-if="!isMobileMenuOpen"
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-else
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer (Absolute positioned overlay for robust mobile experience) -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-[-10px]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-[-10px]"
      >
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 right-0 md:hidden bg-white/98 backdrop-blur-xl border-b border-fest-border z-40 shadow-card-hover">
          <div class="px-4 pt-2 pb-6 space-y-1 flex flex-col max-h-[80vh] overflow-y-auto">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="block px-4 py-3 rounded-full text-base font-medium text-fest-text hover:text-fest-cyan hover:bg-fest-cyan/5 transition-all"
              active-class="text-fest-text bg-fest-surface ring-1 ring-fest-border font-semibold"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </NuxtLink>
            <div class="pt-4 pb-2 border-t border-fest-muted/10 flex flex-col space-y-3">
              <NuxtLink
                to="/sponsors"
                class="text-center py-2.5 rounded-md text-fest-text hover:text-fest-cyan text-sm font-semibold uppercase tracking-wider transition-colors"
                @click="closeMobileMenu"
              >
                Sponsor Us
              </NuxtLink>
              <NuxtLink
                to="/register"
                class="glow-register-button text-center px-4 py-3 rounded-full bg-fest-cyan text-white font-bold text-sm tracking-wide"
                @click="closeMobileMenu"
              >
                Register Now
              </NuxtLink>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <!-- Main Content Area -->
    <main class="relative z-10 flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-fest-border mt-auto relative overflow-hidden">
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-fest-cyan/[0.05] rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-fest-amber/[0.05] rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Column 1: Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 flex items-center justify-center bg-fest-surface border border-fest-border rounded-lg">
                <span class="text-fest-cyan font-display font-bold text-base">R</span>
              </div>
              <span class="font-display font-bold text-lg tracking-wider">RUET CSE FEST 2K26</span>
            </div>
            <p class="text-sm text-fest-muted leading-relaxed">
              A week-long tech fiesta uniting Bangladesh's brilliant minds, skilled developers, and passionate creators.
            </p>
            <div class="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-fest-muted hover:text-fest-cyan transition-colors" aria-label="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-fest-muted hover:text-fest-cyan transition-colors" aria-label="GitHub">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.48-10-10-10z"/></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h3 class="font-display font-semibold text-sm uppercase tracking-wider text-fest-cyan mb-6">Quick Links</h3>
            <ul class="space-y-3">
              <li v-for="link in navLinks.slice(0, 5)" :key="link.path">
                <NuxtLink :to="link.path" class="text-sm text-fest-muted hover:text-fest-text transition-colors">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 3: Secondary Links -->
          <div>
            <h3 class="font-display font-semibold text-sm uppercase tracking-wider text-fest-cyan mb-6">Explore</h3>
            <ul class="space-y-3">
              <li v-for="link in navLinks.slice(5)" :key="link.path">
                <NuxtLink :to="link.path" class="text-sm text-fest-muted hover:text-fest-text transition-colors">
                  {{ link.name }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sponsors" class="text-sm text-fest-muted hover:text-fest-text transition-colors">
                  Sponsorship Info
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 4: Contact/Venue -->
          <div>
            <h3 class="font-display font-semibold text-sm uppercase tracking-wider text-fest-cyan mb-6">Address</h3>
            <p class="text-sm text-fest-muted leading-relaxed mb-4">
              Department of Computer Science & Engineering<br />
              Rajshahi University of Engineering & Technology<br />
              Rajshahi-6204, Bangladesh
            </p>
            <p class="text-sm text-fest-muted leading-relaxed">
              Email: <a href="mailto:csefest@ruet.ac.bd" class="text-fest-cyan hover:underline">csefest@ruet.ac.bd</a>
            </p>
          </div>
        </div>

        <div class="mt-16 pt-8 border-t border-fest-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-xs text-fest-muted">
            &copy; 2026 Department of CSE, RUET. All Rights Reserved.
          </p>
          <!-- <p class="text-xs text-fest-muted">
            Designed for excellence. Benchmarked against SUST & IUT.
          </p> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 12
}

// Global Intersection Observer for fade-up scroll animations
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target) // Stop observing once revealed
      }
    })
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  })

  document.querySelectorAll('.reveal-fade-up').forEach(el => {
    observer.observe(el)
  })
}

onMounted(() => {
  setupIntersectionObserver()
  updateScrollState()

  window.addEventListener('scroll', updateScrollState, { passive: true })
  
  // Re-initialize observer on route updates
  watch(() => route.path, () => {
    setTimeout(setupIntersectionObserver, 300)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

