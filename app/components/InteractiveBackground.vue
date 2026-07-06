<template>
  <div
    ref="rootRef"
    class="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-fest-bg/0"
    aria-hidden="true"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Cursor Reactive Glow Blob (Lagged Lerp) -->
    <div
      class="absolute pointer-events-none w-[560px] h-[560px] rounded-full bg-gradient-to-r from-fest-cyan-light/10 to-fest-cyan-light/5 blur-[130px] z-[1] transition-opacity duration-1000"
      :style="{
        left: `${glowX - 280}px`,
        top: `${glowY - 280}px`,
        opacity: isMouseActive ? 1 : 0
      }"
    ></div>

    <!-- Structured Box-Drawing Panel Shapes in the margins -->
    <div
      v-for="(panel, index) in scatteredFragments"
      :key="index"
      class="box-drawing-panel absolute hidden lg:block select-none pointer-events-none"
      :style="panel.style"
    >
      <div
        v-for="(line, lineIdx) in panel.lines"
        :key="lineIdx"
        class="font-mono text-[10px] leading-relaxed whitespace-pre"
      >
        {{ line }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const rootRef = ref(null)
const isMouseActive = ref(false)

const glowX = ref(0)
const glowY = ref(0)

const mouse = {
  x: -1000,
  y: -1000,
  targetX: -1000,
  targetY: -1000
}

const scatteredFragments = ref([])

const handleMouseMove = (e) => {
  if (!rootRef.value) return
  const rect = rootRef.value.getBoundingClientRect()
  const localX = e.clientX - rect.left
  const localY = e.clientY - rect.top

  if (!isMouseActive.value) {
    isMouseActive.value = true
    glowX.value = localX
    glowY.value = localY
    mouse.x = localX
    mouse.y = localY
  }
  mouse.targetX = localX
  mouse.targetY = localY
}

const handleMouseLeave = () => {
  mouse.targetX = -1000
  mouse.targetY = -1000
  isMouseActive.value = false
}

let animationFrameId = null

const updateGlow = () => {
  if (isMouseActive.value) {
    mouse.x += (mouse.targetX - mouse.x) * 0.08
    mouse.y += (mouse.targetY - mouse.y) * 0.08
    glowX.value += (mouse.targetX - glowX.value) * 0.05
    glowY.value += (mouse.targetY - glowY.value) * 0.05
  } else {
    mouse.x += (-1000 - mouse.x) * 0.05
    mouse.y += (-1000 - mouse.y) * 0.05
  }
  animationFrameId = requestAnimationFrame(updateGlow)
}

onMounted(() => {
  const panelTemplates = [
    {
      lines: [
        '┌─── [SYS_MON] ───┐',
        '│ CPU: 12.4%       │',
        '│ MEM: 2048MB      │',
        '│ STATUS: ONLINE   │',
        '└──────────────────┘'
      ],
      style: { top: '12%', left: '2%' },
      color: '#1F693E' // green
    },
    {
      lines: [
        '┌─── [NET_CON] ───┐',
        '│ PORT: 3001 -> OK │',
        '│ PING: 14ms       │',
        '│ IP: 127.0.0.1    │',
        '└──────────────────┘'
      ],
      style: { top: '44%', left: '1.5%' },
      color: '#1F693E' // green
    },
    {
      lines: [
        '┌─── [ENV_VAR] ───┐',
        '│ NODE_ENV=prod    │',
        '│ HOST=localhost   │',
        '│ LANG=en_US.UTF8  │',
        '└──────────────────┘'
      ],
      style: { top: '74%', left: '2.5%' },
      color: '#B3261E' // red
    },
    {
      lines: [
        '┌─── [RUET_CS] ───┐',
        '│ $ run csefest    │',
        '│ > initializing   │',
        '│ > success        │',
        '└──────────────────┘'
      ],
      style: { top: '16%', right: '2%' },
      color: '#1F693E' // green
    },
    {
      lines: [
        '┌─── [DEPS_LS] ───┐',
        '│ nuxt: v4.4.8     │',
        '│ tailwind: v3.4   │',
        '│ vue: v3.5.39     │',
        '└──────────────────┘'
      ],
      style: { top: '48%', right: '1.5%' },
      color: '#1F693E' // green
    },
    {
      lines: [
        '┌─── [SEC_SHL] ───┐',
        '│ SSH: ACTIVE      │',
        '│ KEY: 2048-BIT    │',
        '│ AUTH: SUCCESS    │',
        '└──────────────────┘'
      ],
      style: { top: '78%', right: '2.5%' },
      color: '#B3261E' // red
    }
  ]

  scatteredFragments.value = panelTemplates.map((panel, idx) => {
    const rotate = (Math.random() * 6 - 3).toFixed(1)
    const speed = Math.random() * 20 + 20
    const driftType = idx % 2
    
    let animationStyle = 'none'
    if (driftType === 0) {
      animationStyle = `driftSlow ${speed}s ease-in-out infinite alternate`
    } else {
      animationStyle = `driftRotateSlow ${speed + 10}s ease-in-out infinite alternate`
    }

    return {
      lines: panel.lines,
      style: {
        ...panel.style,
        animation: animationStyle,
        color: panel.color,
        opacity: (Math.random() * 0.05 + 0.20).toFixed(3), // 20% to 25% opacity
        '--egg-tilt': `${rotate}deg`,
        transform: `rotate(${rotate}deg)`
      }
    }
  })

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)

  updateGlow()
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
.box-drawing-panel {
  transform: rotate(var(--egg-tilt, 0deg));
}

@keyframes driftSlow {
  0% {
    transform: translate(0, 0) rotate(var(--egg-tilt, 0deg));
  }
  100% {
    transform: translate(15px, -15px) rotate(calc(var(--egg-tilt, 0deg) + 3deg));
  }
}

@keyframes driftRotateSlow {
  0% {
    transform: translate(0, 0) rotate(var(--egg-tilt, 0deg));
  }
  100% {
    transform: translate(-15px, 15px) rotate(calc(var(--egg-tilt, 0deg) - 4deg));
  }
}
</style>
