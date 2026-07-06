<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glows -->
    <div class="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] bg-fest-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-fest-amber/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Page Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Who We Are</span>
        <h1 class="font-display font-bold text-3xl sm:text-5xl">About the Organizers</h1>
        <p class="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-fest-muted leading-relaxed">
          RUET CSE FEST is organized by the Department of Computer Science & Engineering, bringing together academia, industry partners, and young engineering talents.
        </p>
      </div>

      <!-- About University & Department (Side by Side) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <!-- RUET card -->
        <div class="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
          <div class="flex items-center space-x-3 text-fest-cyan">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            <h2 class="font-display font-bold text-xl sm:text-2xl text-fest-text">About RUET</h2>
          </div>
          <p class="text-xs sm:text-sm text-fest-muted leading-relaxed">
            Rajshahi University of Engineering & Technology (RUET) is one of the premier public engineering universities in Bangladesh. Established in 1964 as Rajshahi Engineering College and upgraded to a full university in 2003, it has been a pioneer in engineering research and technology instruction, hosting 18 departments across three faculties.
          </p>
        </div>

        <!-- CSE Department card -->
        <div class="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
          <div class="flex items-center space-x-3 text-fest-cyan">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <h2 class="font-display font-bold text-xl sm:text-2xl text-fest-text">About Department of CSE</h2>
          </div>
          <p class="text-xs sm:text-sm text-fest-muted leading-relaxed">
            Formed in 2003 with the upgrade of the university, the Computer Science and Engineering Department at RUET is focused on cultivating high-caliber research, analytical skills, and coding innovation. The department offers B.Sc., M.Sc., and Ph.D. programs and is widely recognized for producing award-winning competitive programmers and chip designers.
          </p>
        </div>
      </div>

      <!-- Organizing Committee -->
      <section class="mb-20">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-center mb-4">Organizing Committee</h2>
        <p class="text-xs sm:text-sm text-fest-muted text-center max-w-lg mx-auto mb-12">
          Meet the faculty members and coordinators leading the efforts to organize RUET CSE FEST 2026.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="member in committee" :key="member.name" class="glass-panel rounded-2xl p-6 text-center relative group overflow-hidden">
            <div class="w-16 h-16 rounded-full bg-fest-cyan/10 border border-fest-cyan/20 text-fest-cyan flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-base text-fest-text mb-1">{{ member.name }}</h3>
            <span class="text-xs font-mono text-fest-cyan block mb-2 font-semibold">{{ member.role }}</span>
            <span class="text-[11px] text-fest-muted block">{{ member.designation }}</span>
          </div>
        </div>
      </section>

      <!-- Department Contact Brief -->
      <section class="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-center border-fest-cyan/10 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-fest-cyan/5 to-transparent pointer-events-none"></div>
        <h3 class="font-display font-bold text-xl mb-4 relative z-10">Want to reach the Organizing Desk?</h3>
        <p class="text-xs sm:text-sm text-fest-muted mb-6 leading-relaxed max-w-xl mx-auto relative z-10">
          If you have accommodation questions, university transport inquiries, or registration invoice issues, feel free to drop our desk an email or visit our administrative hall.
        </p>
        <NuxtLink to="/contact" class="px-6 py-3 rounded-lg bg-fest-cyan text-white font-bold text-xs sm:text-sm tracking-wide shadow-btn relative z-10 inline-block hover:-translate-y-0.5 transition-all">
          Visit Contact Desk
        </NuxtLink>
      </section>

    </div>
  </div>
</template>

<script setup>
const committee = [
  {
    name: 'Prof. Dr. Head of CSE',
    role: 'Convener',
    designation: 'Head, Dept. of Computer Science & Engineering'
  },
  {
    name: 'Dr. Associate Professor',
    role: 'Co-Convener',
    designation: 'Associate Professor, Dept. of CSE'
  },
  {
    name: 'Lecturer CSE RUET',
    role: 'Sponsorship Lead',
    designation: 'Lecturer, Dept. of Computer Science & Engineering'
  },
  {
    name: 'Assistant Professor CSE',
    role: 'Contest Director',
    designation: 'Assistant Professor, Dept. of CSE'
  }
]

useSeoMeta({
  title: 'About the Organizers | RUET CSE FEST 2026',
  description: 'Learn about Rajshahi University of Engineering & Technology (RUET) and the Department of Computer Science & Engineering. Meet the organizing committee.'
})
</script>
