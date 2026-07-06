<template>
  <div class="relative overflow-hidden min-h-screen py-16">
    <!-- Ambient glows -->
    <div class="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-fest-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] bg-fest-amber/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Page Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-fest-cyan mb-2 block">Connect</span>
        <h1 class="font-display font-bold text-3xl sm:text-5xl">Contact Us</h1>
        <p class="mt-4 max-w-2xl mx-auto text-sm text-fest-muted leading-relaxed">
          Have questions about rules, registration status, or accommodations? Reach out to our dedicated event managers.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        <!-- Left: Contact Information List -->
        <div class="space-y-8">
          <div class="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 class="font-display font-bold text-xl mb-4 text-fest-text">Committee Contacts</h3>
            
            <!-- Category specific contact blocks -->
            <div class="space-y-4 text-xs sm:text-sm">
              <div v-for="contact in contactList" :key="contact.title" class="border-b border-fest-muted/5 pb-4 last:border-b-0 last:pb-0">
                <span class="text-[10px] font-mono uppercase tracking-wider text-fest-cyan block mb-1 font-semibold">{{ contact.title }}</span>
                <h4 class="font-bold text-fest-text mb-1">{{ contact.name }}</h4>
                <p class="text-fest-muted">Phone: <span class="font-mono">{{ contact.phone }}</span></p>
                <p class="text-fest-muted">Email: <span class="font-mono">{{ contact.email }}</span></p>
              </div>
            </div>
          </div>

          <!-- General info box -->
          <div class="glass-panel rounded-2xl p-6 text-center border-fest-muted/5">
            <span class="text-[10px] uppercase font-mono tracking-widest text-fest-muted block mb-2">Central Secretariat</span>
            <p class="text-xs text-fest-muted leading-relaxed">
              Dept. of Computer Science & Engineering<br />
              RUET, Rajshahi-6204, Bangladesh<br />
              Office Phone: <span class="font-mono">+880-721-750123</span>
            </p>
          </div>
        </div>

        <!-- Middle: Inquiry Form -->
        <div class="glass-panel border-fest-cyan/15 rounded-2xl p-6 sm:p-8">
          <h3 class="font-display font-bold text-xl mb-6">Send a Message</h3>
          
          <form @submit.prevent="submitContact" class="space-y-4 text-xs sm:text-sm">
            <div>
              <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Your Full Name</label>
              <input
                v-model="contactForm.name"
                type="text"
                required
                class="form-input"
                placeholder="Jane Doe"
              />
            </div>
            
            <div>
              <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Your Email</label>
              <input
                v-model="contactForm.email"
                type="email"
                required
                class="form-input"
                placeholder="janedoe@student.edu"
              />
            </div>

            <div>
              <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Inquiry Category</label>
              <select
                v-model="contactForm.category"
                class="form-input"
              >
                <option value="general">General Inquiry</option>
                <option value="iupc">IUPC / Programming Contest</option>
                <option value="hackathon">National Hackathon</option>
                <option value="accommodation">Accommodation & Halls</option>
                <option value="technical">Other Competition tracks</option>
              </select>
            </div>

            <div>
              <label class="block text-fest-muted mb-1 text-[11px] uppercase tracking-wider">Message Description</label>
              <textarea
                v-model="contactForm.message"
                rows="5"
                required
                class="form-input"
                placeholder="Type your message details here..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 rounded-lg bg-fest-cyan text-white font-bold tracking-wide shadow-btn hover:-translate-y-0.5 transition-all"
            >
              Submit Message
            </button>
            
            <p v-if="contactSuccess" class="text-xs text-fest-success font-medium text-center mt-2">
              ✓ Message submitted successfully! We will get back to you by email shortly.
            </p>
          </form>
        </div>

        <!-- Right: Map/Location -->
        <div class="space-y-6">
          <div class="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 class="font-display font-bold text-xl text-fest-text">Our Location</h3>
            <p class="text-xs sm:text-sm text-fest-muted leading-relaxed">
              We are located at the Rajshahi University of Engineering & Technology campus in the northern side of Rajshahi city. The department is inside the main CSE Building.
            </p>
            
            <!-- Map Placeholder representation with high-end glass graphic -->
            <div class="w-full aspect-[4/3] bg-fest-surface border border-fest-border rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden group">
              <!-- Glow -->
              <div class="absolute inset-0 bg-gradient-to-br from-fest-cyan/5 to-transparent pointer-events-none"></div>
              
              <!-- Geometric diagram simulating a map grid -->
              <svg class="w-full h-full opacity-10 absolute inset-0 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <line x1="10" y1="0" x2="10" y2="100" stroke-width="0.3" />
                <line x1="40" y1="0" x2="40" y2="100" stroke-width="0.3" />
                <line x1="70" y1="0" x2="70" y2="100" stroke-width="0.3" />
                <line x1="0" y1="30" x2="100" y2="30" stroke-width="0.3" />
                <line x1="0" y1="60" x2="100" y2="60" stroke-width="0.3" />
                <!-- Ruet node -->
                <circle cx="40" cy="60" r="4" fill="#0E7C86" class="animate-pulse" />
              </svg>

              <svg class="w-8 h-8 text-fest-cyan mb-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              
              <span class="text-[10px] font-mono uppercase tracking-widest text-fest-text relative z-10 font-bold">RUET CSE Dept</span>
              <span class="text-[9px] font-mono text-fest-muted relative z-10">Rajshahi, Bangladesh</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const contactList = [
  {
    title: 'General & Accommodations',
    name: 'General Coordinator, CSE Fest',
    phone: '+880-1700-112233',
    email: 'csefest.general@ruet.ac.bd'
  },
  {
    title: 'IUPC / Programming Contest',
    name: 'Technical Contest Convenor',
    phone: '+880-1700-445566',
    email: 'iupc.support@ruet.ac.bd'
  },
  {
    title: 'Hackathon & VLSI Challenges',
    name: 'Hardware Tracks Coordinator',
    phone: '+880-1700-778899',
    email: 'hackathon.support@ruet.ac.bd'
  }
]

const contactForm = reactive({
  name: '',
  email: '',
  category: 'general',
  message: ''
})

const contactSuccess = ref(false)

const submitContact = () => {
  contactSuccess.value = true
  setTimeout(() => {
    contactForm.name = ''
    contactForm.email = ''
    contactForm.message = ''
    contactSuccess.value = false
  }, 4000)
}

useSeoMeta({
  title: 'Contact the Committee | RUET CSE FEST 2026',
  description: 'Get in touch with RUET CSE FEST 2026 coordinators. Event phone numbers, support emails, and location map.'
})
</script>
