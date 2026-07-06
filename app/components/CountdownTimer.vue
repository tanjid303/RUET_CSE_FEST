<template>
  <div class="flex items-center justify-center space-x-2.5 sm:space-x-4 md:space-x-6">
    <div v-for="unit in timeUnits" :key="unit.label" class="flex flex-col items-center">
      <div class="glass-panel w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl relative overflow-hidden group">
        <span class="font-mono text-xl sm:text-3xl md:text-4xl font-bold text-fest-cyan">
          {{ formatNumber(unit.value) }}
        </span>
      </div>
      <span class="text-[9px] sm:text-xs uppercase tracking-widest text-fest-muted mt-2 font-mono font-bold">{{ unit.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Target date: April 10, 2026 (fest start)
const targetDate = new Date('2026-04-10T09:00:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const timeUnits = computed(() => [
  { label: 'Days', value: days.value },
  { label: 'Hours', value: hours.value },
  { label: 'Mins', value: minutes.value },
  { label: 'Secs', value: seconds.value }
])

let intervalId = null

const calculateTime = () => {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    if (intervalId) clearInterval(intervalId)
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

const formatNumber = (num) => {
  return String(num).padStart(2, '0')
}

onMounted(() => {
  calculateTime()
  intervalId = setInterval(calculateTime, 1000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
