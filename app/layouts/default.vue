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
              :class="[
                'hamburger-btn relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 focus:outline-none z-50',
                isMobileMenuOpen
                  ? 'border-fest-cyan/40 bg-fest-cyan/10 text-fest-cyan shadow-[0_0_16px_rgba(199,107,37,0.25)]'
                  : 'border-fest-border/70 bg-white/90 text-fest-muted shadow-sm hover:border-fest-cyan/40 hover:text-fest-cyan'
              ]"
              aria-label="Toggle Menu"
            >
              <span class="sr-only">Toggle Menu</span>
              <span class="hamburger-icon" :class="{ 'is-open': isMobileMenuOpen }">
                <span class="bar bar-1"></span>
                <span class="bar bar-2"></span>
                <span class="bar bar-3"></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <teleport to="body">
        <transition
          enter-active-class="mobile-menu-enter-active"
          enter-from-class="mobile-menu-enter-from"
          enter-to-class="mobile-menu-enter-to"
          leave-active-class="mobile-menu-leave-active"
          leave-from-class="mobile-menu-leave-to"
          leave-to-class="mobile-menu-enter-from"
        >
          <div
            v-if="isMobileMenuOpen"
            class="mobile-nav-overlay fixed inset-0 z-[999] md:hidden"
            @click.self="closeMobileMenu"
          >
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-[#1A0F05]/80 backdrop-blur-2xl" @click="closeMobileMenu"></div>

            <!-- Drawer Panel -->
            <div class="mobile-nav-panel absolute inset-x-3 top-4 bottom-4 rounded-3xl overflow-hidden flex flex-col" style="background: linear-gradient(160deg, #FFFDF9 0%, #FBF5EC 60%, #FFF4E0 100%); box-shadow: 0 32px 80px rgba(20,10,2,0.35), 0 0 0 1px rgba(199,107,37,0.15);">

              <!-- Decorative blobs -->
              <div class="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(199,107,37,0.18) 0%, transparent 70%);"></div>
              <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(199,107,37,0.10) 0%, transparent 70%);"></div>

              <!-- Header Row -->
              <div class="relative flex items-center justify-between px-5 pt-5 pb-4 border-b border-[#E8DDD0]/80 flex-shrink-0">
                <div class="flex items-center gap-3">
                  <div class="relative w-11 h-11 flex items-center justify-center rounded-2xl overflow-hidden" style="background: linear-gradient(135deg, #C76B25 0%, #E8921A 100%); box-shadow: 0 4px 16px rgba(199,107,37,0.4);">
                    <span class="font-display text-lg font-bold text-white">R</span>
                  </div>
                  <div>
                    <p class="font-mono text-[9px] uppercase tracking-[0.32em] text-fest-muted">Navigate</p>
                    <p class="text-sm font-bold text-fest-text tracking-wide">RUET CSE FEST 2026</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <span class="font-mono text-[9px] uppercase tracking-widest text-fest-cyan bg-fest-cyan/10 px-2.5 py-1 rounded-full border border-fest-cyan/20">2K26</span>
                  <button
                    @click="closeMobileMenu"
                    class="w-9 h-9 flex items-center justify-center rounded-full border border-[#E8DDD0] bg-white/80 text-fest-muted hover:text-fest-cyan hover:border-fest-cyan/40 transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <svg class="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                </div>
              </div>

              <!-- Nav Links -->
              <div class="relative flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
                <NuxtLink
                  v-for="(link, i) in navLinks"
                  :key="link.path"
                  :to="link.path"
                  class="mobile-nav-link group flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200"
                  :class="[`nav-item-${i}`]"
                  active-class="mobile-nav-link-active"
                  @click="closeMobileMenu"
                >
                  <span class="nav-link-icon w-9 h-9 flex items-center justify-center rounded-xl text-fest-muted transition-all duration-200 flex-shrink-0" style="background: rgba(35,31,28,0.05);">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" v-html="link.icon"></svg>
                  </span>
                  <span class="text-base font-semibold text-fest-text group-hover:text-fest-cyan transition-colors">{{ link.name }}</span>
                  <svg class="ml-auto w-4 h-4 text-fest-border group-hover:text-fest-cyan/50 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6"/></svg>
                </NuxtLink>
              </div>

              <!-- Footer CTAs -->
              <div class="relative px-4 pb-5 pt-3 border-t border-[#E8DDD0]/80 space-y-2.5 flex-shrink-0">
                <NuxtLink
                  to="/sponsors"
                  class="flex items-center justify-center gap-2 w-full rounded-2xl border border-[#E8DDD0] bg-white/70 px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-fest-text hover:border-fest-cyan/40 hover:text-fest-cyan transition-all duration-200"
                  @click="closeMobileMenu"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Sponsor Us
                </NuxtLink>
                <NuxtLink
                  to="/register"
                  class="flex items-center justify-center gap-2 w-full rounded-2xl px-4 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5"
                  style="background: linear-gradient(135deg, #C76B25 0%, #E8921A 100%); box-shadow: 0 6px 24px rgba(199,107,37,0.4);"
                  @click="closeMobileMenu"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
                  Register Now
                </NuxtLink>
              </div>
            </div>
          </div>
        </transition>
      </teleport>
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
  { name: 'Home', path: '/', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>' },
  { name: 'Events', path: '/events', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>' },
  { name: 'Sponsors', path: '/sponsors', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
  { name: 'Schedule', path: '/schedule', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>' },
  { name: 'Gallery', path: '/gallery', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>' },
  { name: 'About Us', path: '/about', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
  { name: 'FAQ', path: '/faq', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
  { name: 'Contact', path: '/contact', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

watch(() => route.path, closeMobileMenu)

watch(isMobileMenuOpen, (isOpen) => {
  if (typeof document === 'undefined') {
    return
  }

  document.body.style.overflow = isOpen ? 'hidden' : ''
})

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
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

