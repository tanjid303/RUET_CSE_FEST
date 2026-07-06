<template>
  <div
    class="terminal-wrap mx-auto w-full max-w-sm sm:max-w-md overflow-hidden rounded-xl border border-slate-800 bg-[#0B0F19] text-left font-mono shadow-[0_8px_40px_rgba(11,15,25,0.40)] select-none"
    @click="focusInput"
  >
    <!-- Title bar -->
    <div class="flex items-center justify-between px-4 py-2.5 border-b border-[#1E2536] bg-[#141929]">
      <div class="flex space-x-1.5">
        <span class="w-3 h-3 rounded-full bg-[#FF5F56] cursor-pointer hover:brightness-110 transition-all" @click.stop="clearTerminal"></span>
        <span class="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
        <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
      </div>
      <span class="text-[10px] sm:text-xs text-slate-500 font-semibold tracking-wider">bash — csefest@ruet:~</span>
      <span class="text-[9px] text-slate-600 font-mono">ssh://ruet.ac.bd</span>
    </div>

    <!-- Output history -->
    <div ref="outputEl" class="terminal-output px-4 pt-3 pb-2 space-y-1 overflow-y-auto max-h-[280px] sm:max-h-[320px] text-[11px] sm:text-[12.5px] leading-relaxed">
      <div v-for="(line, i) in history" :key="i" class="terminal-history-line">
        <!-- Command line -->
        <div v-if="line.type === 'cmd'" class="flex items-center gap-2">
          <span class="text-[#38BDF8] font-bold flex-shrink-0">$</span>
          <span class="text-slate-200">{{ line.text }}</span>
        </div>
        <!-- Output line -->
        <div v-else-if="line.type === 'out'" :class="['pl-4', line.color || 'text-slate-400']">
          {{ line.text }}
        </div>
        <!-- Separator -->
        <div v-else-if="line.type === 'sep'" class="border-t border-slate-800/60 my-1.5"></div>
      </div>

      <!-- Suggestion dropdown -->
      <div v-if="suggestions.length && inputValue && !isBooting" class="pl-4 mt-1 space-y-0.5">
        <div
          v-for="(s, idx) in suggestions"
          :key="s.cmd"
          :class="[
            'suggestion-item flex items-center gap-3 px-2 py-1 rounded cursor-pointer transition-all duration-150',
            idx === selectedSuggestion
              ? 'bg-[#1E2C4A] border border-[#38BDF8]/30 text-[#38BDF8]'
              : 'text-slate-500 hover:text-slate-300 hover:bg-[#161B2B]'
          ]"
          @mousedown.prevent="selectSuggestion(s)"
        >
          <span class="text-[#38BDF8]/50 font-bold">›</span>
          <span class="text-[10px] sm:text-[11px] font-bold tracking-wide">{{ s.cmd }}</span>
          <span class="text-[9px] sm:text-[10px] text-slate-600 ml-auto">{{ s.desc }}</span>
        </div>
      </div>
    </div>

    <!-- Input row -->
    <div v-if="!isBooting" class="flex items-center gap-2 px-4 py-2.5 border-t border-[#1E2536] bg-[#0E1320]">
      <span class="text-[#38BDF8] font-bold text-[11px] sm:text-[12.5px] flex-shrink-0">$</span>
      <div class="relative flex-1 overflow-hidden">
        <!-- Ghost autocomplete hint -->
        <span
          v-if="ghostHint"
          class="absolute inset-0 text-slate-700 pointer-events-none text-[11px] sm:text-[12.5px] leading-relaxed flex items-center"
          aria-hidden="true"
        >{{ ghostHint }}</span>
        <input
          ref="inputEl"
          v-model="inputValue"
          @keydown="handleKeydown"
          @input="handleInput"
          class="terminal-input w-full bg-transparent text-slate-200 outline-none caret-[#38BDF8] text-[11px] sm:text-[12.5px] leading-relaxed relative z-10"
          placeholder=""
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
        />
      </div>
      <span class="w-1.5 h-3.5 bg-[#38BDF8] animate-cursor-blink flex-shrink-0" v-if="inputValue === ''"></span>
    </div>

    <!-- Boot cursor line -->
    <div v-if="isBooting" class="flex items-center gap-1.5 px-4 py-2.5 border-t border-[#1E2536] bg-[#0E1320]">
      <span class="text-[#38BDF8] font-bold text-[11px] sm:text-[12.5px]">$</span>
      <span class="w-1.5 h-3.5 bg-[#38BDF8] animate-cursor-blink"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ── Command registry ───────────────────────────────────────────────────────────
const COMMANDS = [
  { cmd: 'register',  desc: '→ /register',  path: '/register',  color: 'text-[#27C93F]' },
  { cmd: 'events',    desc: '→ /events',    path: '/events',    color: 'text-[#38BDF8]' },
  { cmd: 'schedule',  desc: '→ /schedule',  path: '/schedule',  color: 'text-[#38BDF8]' },
  { cmd: 'sponsors',  desc: '→ /sponsors',  path: '/sponsors',  color: 'text-[#FFBD2E]' },
  { cmd: 'gallery',   desc: '→ /gallery',   path: '/gallery',   color: 'text-[#38BDF8]' },
  { cmd: 'about',     desc: '→ /about',     path: '/about',     color: 'text-[#38BDF8]' },
  { cmd: 'faq',       desc: '→ /faq',       path: '/faq',       color: 'text-[#38BDF8]' },
  { cmd: 'contact',   desc: '→ /contact',   path: '/contact',   color: 'text-[#38BDF8]' },
  { cmd: 'help',      desc: 'list commands', path: null,         color: 'text-slate-300'  },
  { cmd: 'clear',     desc: 'clear screen',  path: null,         color: 'text-slate-300'  },
  { cmd: 'info',      desc: 'fest details',  path: null,         color: 'text-slate-300'  },
  { cmd: 'home',      desc: '→ /',           path: '/',          color: 'text-[#38BDF8]' },
]

const VALID_CMDS = COMMANDS.map(c => c.cmd)

// ── State ──────────────────────────────────────────────────────────────────────
const history     = ref([])
const inputValue  = ref('')
const isBooting   = ref(true)
const selectedSuggestion = ref(-1)
const inputEl  = ref(null)
const outputEl = ref(null)

// ── Suggestions ────────────────────────────────────────────────────────────────
const suggestions = computed(() => {
  const q = inputValue.value.trim().toLowerCase()
  if (!q) return []
  return COMMANDS.filter(c => c.cmd.startsWith(q) && c.cmd !== q)
})

// Ghost autocomplete hint
const ghostHint = computed(() => {
  const q = inputValue.value
  if (!q) return ''
  const match = COMMANDS.find(c => c.cmd.startsWith(q.toLowerCase()))
  if (!match) return ''
  return q + match.cmd.slice(q.length)
})

// ── Helpers ───────────────────────────────────────────────────────────────────
function push(...lines) {
  lines.forEach(l => history.value.push(l))
  scrollBottom()
}

function scrollBottom() {
  nextTick(() => {
    if (outputEl.value) {
      outputEl.value.scrollTop = outputEl.value.scrollHeight
    }
  })
}

function focusInput() {
  if (!isBooting.value) inputEl.value?.focus()
}

function clearTerminal() {
  history.value = []
  push({ type: 'out', text: 'Terminal cleared.', color: 'text-slate-600' })
}

// ── Boot sequence ─────────────────────────────────────────────────────────────
const BOOT_LINES = [
  { delay: 0,    line: { type: 'cmd', text: 'ping -c 1 ruet-cse-fest-2026' } },
  { delay: 380,  line: { type: 'out', text: 'PING ruet-cse-fest-2026 (10.42.0.1): 56 data bytes', color: 'text-slate-500' } },
  { delay: 760,  line: { type: 'out', text: '64 bytes from 10.42.0.1: icmp_seq=0 ttl=64 time=0.42 ms', color: 'text-slate-500' } },
  { delay: 1050, line: { type: 'out', text: '✓  1 packets transmitted, 1 received — 0% loss', color: 'text-[#27C93F] font-semibold' } },
  { delay: 1400, line: { type: 'sep' } },
  { delay: 1550, line: { type: 'cmd', text: 'ssh csefest@ruet.ac.bd -p 2026' } },
  { delay: 2050, line: { type: 'out', text: 'Connected to RUET CSE FEST 2026 terminal.', color: 'text-[#38BDF8]' } },
  { delay: 2300, line: { type: 'out', text: 'Welcome, visitor. Type help for available commands.', color: 'text-slate-400' } },
  { delay: 2550, line: { type: 'sep' } },
]

onMounted(async () => {
  isBooting.value = true
  for (const step of BOOT_LINES) {
    await delay(step.delay === 0 ? 200 : step.delay - (BOOT_LINES[BOOT_LINES.indexOf(step) - 1]?.delay ?? 0))
    push(step.line)
  }
  isBooting.value = false
  await nextTick()
  focusInput()
})

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// ── Keyboard handling ─────────────────────────────────────────────────────────
function handleKeydown(e) {
  // Tab → autocomplete
  if (e.key === 'Tab') {
    e.preventDefault()
    const hint = ghostHint.value
    if (hint) inputValue.value = hint
    selectedSuggestion.value = -1
    return
  }

  // Arrow Up/Down in suggestions
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (suggestions.value.length) {
      selectedSuggestion.value = (selectedSuggestion.value + 1) % suggestions.value.length
    }
    return
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (suggestions.value.length) {
      selectedSuggestion.value = selectedSuggestion.value <= 0
        ? suggestions.value.length - 1
        : selectedSuggestion.value - 1
    }
    return
  }

  // Enter → select suggestion or run command
  if (e.key === 'Enter') {
    e.preventDefault()
    if (selectedSuggestion.value >= 0 && suggestions.value[selectedSuggestion.value]) {
      const s = suggestions.value[selectedSuggestion.value]
      inputValue.value = s.cmd
      selectedSuggestion.value = -1
      nextTick(() => runCommand())
    } else {
      runCommand()
    }
    return
  }

  // Escape → clear input + suggestions
  if (e.key === 'Escape') {
    inputValue.value = ''
    selectedSuggestion.value = -1
  }
}

function handleInput() {
  selectedSuggestion.value = -1
}

function selectSuggestion(s) {
  inputValue.value = s.cmd
  selectedSuggestion.value = -1
  nextTick(() => runCommand())
}

// ── Command runner ────────────────────────────────────────────────────────────
async function runCommand() {
  const raw  = inputValue.value.trim()
  const cmd  = raw.toLowerCase()
  inputValue.value = ''
  selectedSuggestion.value = -1

  if (!cmd) return

  // Echo the typed command
  push({ type: 'cmd', text: raw })

  const match = COMMANDS.find(c => c.cmd === cmd)

  if (match) {
    // ── Known command ──────────────────────────────
    if (cmd === 'clear') {
      history.value = []
      push({ type: 'out', text: 'Terminal cleared.', color: 'text-slate-600' })
      return
    }

    if (cmd === 'help') {
      push(
        { type: 'out', text: '────────── Available Commands ──────────', color: 'text-slate-600' },
        ...COMMANDS.map(c => ({
          type: 'out',
          text: `  ${c.cmd.padEnd(12)} ${c.desc}`,
          color: c.color
        })),
        { type: 'out', text: '  Tab to autocomplete  •  ↑↓ to navigate', color: 'text-slate-700' },
        { type: 'sep' }
      )
      return
    }

    if (cmd === 'info') {
      push(
        { type: 'out', text: '────────── RUET CSE FEST 2026 ──────────', color: 'text-slate-600' },
        { type: 'out', text: '  Date     : April 10 – 17, 2026',       color: 'text-[#38BDF8]' },
        { type: 'out', text: '  Venue    : RUET Campus, Rajshahi',      color: 'text-[#38BDF8]' },
        { type: 'out', text: '  Events   : 10 Technical Competitions',  color: 'text-[#38BDF8]' },
        { type: 'out', text: '  Prize    : 550,000+ BDT',               color: 'text-[#FFBD2E]' },
        { type: 'out', text: '  Email    : csefest@ruet.ac.bd',         color: 'text-[#38BDF8]' },
        { type: 'sep' }
      )
      return
    }

    // Navigation commands
    push({
      type: 'out',
      text: `✓  Redirecting to ${match.path} ...`,
      color: match.color
    })

    await delay(600)
    router.push(match.path)

  } else {
    // ── Unknown command — fuzzy help ───────────────
    // Find close matches (includes partial matches)
    const close = COMMANDS.filter(c => {
      const cCmd = c.cmd
      const shorter = cmd.length < cCmd.length ? cmd : cCmd
      const longer  = cmd.length >= cCmd.length ? cmd : cCmd
      // substring match
      if (longer.includes(shorter)) return true
      // levenshtein-like: check if ≤2 chars different
      let diff = Math.abs(cmd.length - cCmd.length)
      if (diff > 2) return false
      let i = 0, j = 0, mismatches = 0
      while (i < cmd.length && j < cCmd.length) {
        if (cmd[i] !== cCmd[j]) {
          mismatches++
          if (mismatches > 2) return false
          if (cmd.length > cCmd.length) i++
          else if (cCmd.length > cmd.length) j++
          else { i++; j++ }
        } else { i++; j++ }
      }
      return mismatches + (cmd.length - i) + (cCmd.length - j) <= 2
    })

    push({ type: 'out', text: `bash: ${cmd}: command not found`, color: 'text-[#FF5F56]' })

    if (close.length) {
      push({ type: 'out', text: 'Did you mean one of these?', color: 'text-slate-500' })
      close.slice(0, 4).forEach(c => {
        push({ type: 'out', text: `  › ${c.cmd}  — ${c.desc}`, color: c.color })
      })
    } else {
      push({ type: 'out', text: 'Type help to see all available commands.', color: 'text-slate-600' })
    }
    push({ type: 'sep' })
  }
}
</script>

<style scoped>
.terminal-wrap {
  cursor: text;
}

.terminal-output {
  scrollbar-width: thin;
  scrollbar-color: #1e2536 transparent;
}

.terminal-output::-webkit-scrollbar {
  width: 4px;
}
.terminal-output::-webkit-scrollbar-track {
  background: transparent;
}
.terminal-output::-webkit-scrollbar-thumb {
  background: #1e2536;
  border-radius: 4px;
}

.terminal-input {
  background: transparent;
  border: none;
  outline: none;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}

.suggestion-item {
  user-select: none;
}

/* Re-apply the blink that may be in global CSS */
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-cursor-blink {
  animation: cursor-blink 1.1s step-end infinite;
}
</style>
