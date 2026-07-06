<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glows -->
    <div class="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-fest-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Page Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Help Center</span>
        <h1 class="font-display font-bold text-3xl sm:text-5xl">Frequently Asked Questions</h1>
        <p class="mt-4 text-sm sm:text-base text-fest-muted leading-relaxed">
          Everything you need to know about registrations, accommodation halls, ID cards, and event logistics.
        </p>
      </div>

      <!-- FAQ Accordion Grid -->
      <div class="space-y-4">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="glass-panel rounded-2xl overflow-hidden border transition-all duration-300"
          :class="[
            activeIdx === idx ? 'border-fest-cyan/30 bg-fest-surface shadow-sm' : 'border-fest-border hover:border-fest-cyan/20'
          ]"
        >
          <!-- Question Header -->
          <button
            @click="toggleFAQ(idx)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span class="font-display font-bold text-base sm:text-lg text-fest-text">
              {{ faq.question }}
            </span>
            <span class="ml-4 shrink-0 text-fest-cyan">
              <!-- Expand/Collapse Chevron -->
              <svg
                class="w-5 h-5 transform transition-transform duration-300"
                :class="activeIdx === idx ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <!-- Answer Body -->
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[300px] opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="max-h-[300px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-show="activeIdx === idx" class="px-6 pb-6 text-xs sm:text-sm text-fest-muted leading-relaxed border-t border-fest-muted/5 pt-4">
              {{ faq.answer }}
            </div>
          </transition>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIdx = ref(null)

const toggleFAQ = (idx) => {
  if (activeIdx.value === idx) {
    activeIdx.value = null
  } else {
    activeIdx.value = idx
  }
}

const faqs = [
  {
    question: 'Who can register for the competitive events?',
    answer: 'All registered students of recognized public and private universities in Bangladesh are eligible for the Inter-University tracks (IUPC, Hackathon, CTF, Datathon, VLSI-thon, GameJam). The Campus Treasure Hunt is strictly restricted to CSE students of RUET.'
  },
  {
    question: 'What are the rules regarding student identification?',
    answer: 'Every participant must carry and present their valid University Student ID card at the entry gates and verification checkpoints. Failure to present an ID card will result in disqualification from the onsite events.'
  },
  {
    question: 'Will accommodation be provided for out-of-town teams?',
    answer: 'Yes! Accommodation will be arranged in RUET residence halls for out-of-town teams participating in onsite contests. Request for accommodation must be marked during registration, and rooms will be allocated on a first-come, first-served basis.'
  },
  {
    question: 'Are there registration fee refunds if a team cancels?',
    answer: 'No, registration fees are non-refundable. If a registered member cannot attend, teams may request member substitutions at least 48 hours prior to contest day by emailing the organizing committee.'
  },
  {
    question: 'Will transport facilities be available?',
    answer: 'University buses run on scheduled routes from Rajshahi city center to the RUET campus. Visiting participants are free to utilize these transport lines by presenting their event badges.'
  }
]

useSeoMeta({
  title: 'FAQs | RUET CSE FEST 2026',
  description: 'Find answers to common questions about eligibility, university ID cards, team accommodation, and campus logistics at RUET.'
})
</script>
