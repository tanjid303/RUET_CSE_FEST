<template>
  <div
    class="terminal-bg absolute left-0 top-0 w-full pointer-events-none z-0 overflow-hidden"
    aria-hidden="true"
  >
    <!-- Left terminal column -->
    <div class="terminal-column terminal-column-left">
      <!-- Duplicated for seamless loop -->
      <div v-for="pass in 2" :key="'left-' + pass" class="terminal-pass">
        <div class="terminal-line" v-for="(line, i) in leftLines" :key="pass + 'l' + i">
          <span v-if="line.prompt" class="terminal-prompt">{{ line.prompt }}</span>
          <span :class="line.cls">{{ line.code }}</span>
        </div>
      </div>
    </div>

    <!-- Right terminal column -->
    <div class="terminal-column terminal-column-right">
      <div v-for="pass in 2" :key="'right-' + pass" class="terminal-pass">
        <div class="terminal-line" v-for="(line, i) in rightLines" :key="pass + 'r' + i">
          <span v-if="line.prompt" class="terminal-prompt">{{ line.prompt }}</span>
          <span :class="line.cls">{{ line.code }}</span>
        </div>
      </div>
    </div>

    <!-- Left edge fade -->
    <div class="terminal-fade-left"></div>

    <!-- Right edge fade -->
    <div class="terminal-fade-right"></div>
  </div>
</template>

<script setup>
const leftLines = [
  { prompt: '~/fest $', code: 'git init --bare ruet-cse-fest-2026', cls: 'tc-cmd' },
  { prompt: '', code: 'Initialized empty Git repository', cls: 'tc-out' },
  { prompt: '~/fest $', code: 'npm install && npm run dev', cls: 'tc-cmd' },
  { prompt: '', code: '✓  Nuxt 3.x  ready in 342ms', cls: 'tc-success' },
  { prompt: '~/fest $', code: 'python3 judge.py --problem=IUPC-G', cls: 'tc-cmd' },
  { prompt: '', code: 'Verdict: ACCEPTED  [0.34s / 256MB]', cls: 'tc-success' },
  { prompt: '~/fest $', code: 'gcc -O2 -o sol sol.cpp && ./sol', cls: 'tc-cmd' },
  { prompt: '', code: '550000', cls: 'tc-out' },
  { prompt: '~/fest $', code: 'docker build -t hackathon-api .', cls: 'tc-cmd' },
  { prompt: '', code: '[+] Building  12/12  FINISHED', cls: 'tc-success' },
  { prompt: '~/fest $', code: 'ssh -i id_rsa admin@ctf.ruet.ac.bd', cls: 'tc-cmd' },
  { prompt: '', code: 'Welcome to RUET CTF Server 2026', cls: 'tc-out' },
  { prompt: '~/fest $', code: 'SELECT * FROM contestants ORDER BY score DESC;', cls: 'tc-cmd' },
  { prompt: '', code: '10 rows returned  (0.003 sec)', cls: 'tc-muted' },
  { prompt: '~/fest $', code: 'make && ./vlsi_sim --target=asic', cls: 'tc-cmd' },
  { prompt: '', code: 'Simulation complete  LUTs: 1024', cls: 'tc-success' },
  { prompt: '~/fest $', code: 'curl -X POST /api/register -d \'{"team":"CodeCrushers"}\'', cls: 'tc-cmd' },
  { prompt: '', code: '{"status":200,"message":"Registered!"}', cls: 'tc-json' },
  { prompt: '~/fest $', code: 'ping 8.8.8.8 -c 4', cls: 'tc-cmd' },
  { prompt: '', code: '4 packets tx, 4 received, 0% loss', cls: 'tc-out' },
  { prompt: '~/fest $', code: 'chmod +x run_contest.sh && ./run_contest.sh', cls: 'tc-cmd' },
  { prompt: '', code: '🚀 Contest started! Good luck everyone.', cls: 'tc-success' },
  { prompt: '~/fest $', code: 'top | grep "judge"', cls: 'tc-cmd' },
  { prompt: '', code: ' 7421 judge   20   0  512m  128m  cpu  99.7%', cls: 'tc-muted' },
]

const rightLines = [
  { prompt: '', code: 'Compiling: g++ main.cpp -O2 -std=c++17', cls: 'tc-cmd' },
  { prompt: '', code: '[  OK  ] build complete in 0.18s', cls: 'tc-verdict-ok' },
  { prompt: '', code: 'Submission status: Accepted', cls: 'tc-verdict-ok' },
  { prompt: '', code: 'Time: 0.03s | Memory: 11.8 MB', cls: 'tc-metric' },
  { prompt: '', code: '#include <bits/stdc++.h>', cls: 'tc-comment' },
  { prompt: '', code: 'using namespace std;', cls: 'tc-cmd' },
  { prompt: '', code: 'int solve(int n) {', cls: 'tc-keyword' },
  { prompt: '', code: '  return (1LL * n * (n + 1)) / 2;', cls: 'tc-out' },
  { prompt: '', code: '}', cls: 'tc-comment' },
  { prompt: '', code: 'Case #1: AC', cls: 'tc-verdict-ok' },
  { prompt: '', code: 'Case #2: WA on test 7', cls: 'tc-verdict-warn' },
  { prompt: '', code: 'expected 42, got 41', cls: 'tc-muted' },
  { prompt: '', code: 'Case #3: TLE on test 9', cls: 'tc-verdict-tle' },
  { prompt: '', code: 'limit 1.00s exceeded at 1.27s', cls: 'tc-muted' },
  { prompt: '', code: 'Case #4: RE on line 42', cls: 'tc-verdict-err' },
  { prompt: '', code: 'SIGSEGV while accessing dp[i]', cls: 'tc-muted' },
  { prompt: '', code: 'Case #5: WA on hidden test', cls: 'tc-verdict-warn' },
  { prompt: '', code: 'expected 100, got 97', cls: 'tc-muted' },
  { prompt: '', code: 'Runtime error: segmentation fault', cls: 'tc-verdict-err' },
  { prompt: '', code: 'Process exited with code 139', cls: 'tc-muted' },
]


</script>

<style scoped>
.terminal-bg {
  user-select: none;
  height: clamp(220px, 28vw, 380px);
}

/* Wrapper keeps two identical passes stacked; animation scrolls by 50% for seamless loop */
.terminal-column {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 13.5px;
  line-height: 2.05;
  white-space: nowrap;
  animation: terminalScrollUp linear infinite;
  /* Limit column width so it doesn't bleed into hero text */
  width: clamp(128px, 16vw, 220px);
  max-width: 22%;
}

.terminal-pass {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-block: 10px;
}

.terminal-column-left {
  left: 0.5%;
  opacity: 0.95;
  animation-duration: 32s;
  /* Visible top, fades out toward middle */
  mask-image: linear-gradient(to bottom, black 0%, black 54%, transparent 82%);
  -webkit-mask-image: linear-gradient(to bottom, black 0%, black 54%, transparent 82%);
}

.terminal-column-right {
  right: 0.5%;
  top: clamp(180px, 20vw, 260px);
  bottom: 0;
  opacity: 0.95;
  animation-duration: 34s;
  animation-direction: reverse;
  justify-content: flex-end;
  mask-image: linear-gradient(to top, black 0%, black 54%, transparent 82%);
  -webkit-mask-image: linear-gradient(to top, black 0%, black 54%, transparent 82%);
}

@keyframes terminalScrollUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.terminal-line {
  display: flex;
  gap: 10px;
  align-items: baseline;
  padding-inline: 4px;
}

.terminal-prompt {
  color: rgba(14, 124, 134, 0.18);
  font-weight: 700;
  flex-shrink: 0;
  font-size: 10.5px;
}

/* ── Text color classes (dark-on-light palette) ──── */
.tc-cmd     { color: rgba(14, 124, 134, 0.20); }
.tc-out     { color: rgba(14, 124, 134, 0.18); }
.tc-success { color: rgba(14, 124, 134, 0.22); }
.tc-muted   { color: rgba(14, 124, 134, 0.14); }
.tc-comment { color: rgba(14, 124, 134, 0.16); font-style: italic; }
.tc-keyword { color: rgba(14, 124, 134, 0.18); }
.tc-json    { color: rgba(14, 124, 134, 0.18); }
.tc-verdict-ok {
  color: rgba(14, 124, 134, 0.22);
  font-weight: 700;
}
.tc-verdict-warn {
  color: rgba(14, 124, 134, 0.20);
  font-weight: 700;
}
.tc-verdict-tle {
  color: rgba(14, 124, 134, 0.18);
  font-weight: 700;
}
.tc-verdict-err {
  color: rgba(14, 124, 134, 0.18);
  font-weight: 700;
}
.tc-metric {
  color: rgba(14, 124, 134, 0.18);
  font-weight: 600;
}

/* ── Edge fade masks (side blending only) ────────── */
.terminal-fade-left,
.terminal-fade-right {
  position: absolute;
  pointer-events: none;
  z-index: 3;
}

.terminal-fade-left {
  top: 0; bottom: 0; left: 0;
  width: 14%;
  background: linear-gradient(to right, #F7F6F1 0%, transparent 100%);
}

.terminal-fade-right {
  top: 0;
  bottom: 0;
  right: 0;
  width: 14%;
  background: linear-gradient(to left, #F7F6F1 0%, transparent 100%);
}

/* ── Responsive ──────────────────────────────────── */
@media (max-width: 1024px) {
  .terminal-column {
    font-size: 10px;
  }
}

@media (max-width: 1280px) {
  .terminal-column {
    font-size: 12.5px;
    max-width: 28%;
  }
}

@media (max-width: 1024px) {
  .terminal-column {
    font-size: 11.5px;
    max-width: 26%;
  }
}

@media (max-width: 768px) {
  .terminal-bg {
    height: clamp(180px, 32vw, 280px);
  }

  .terminal-column {
    font-size: 11px;
    max-width: 36%;
  }
  .terminal-column-left {
    opacity: 0.32;
    left: 0.5%;
    mask-image: linear-gradient(to bottom, black 0%, black 45%, transparent 68%);
    -webkit-mask-image: linear-gradient(to bottom, black 0%, black 45%, transparent 68%);
  }

  .terminal-column-right {
    top: clamp(150px, 24vw, 220px);
    opacity: 0.24;
    right: 0.5%;
    justify-content: flex-end;
    mask-image: linear-gradient(to top, black 0%, black 45%, transparent 68%);
    -webkit-mask-image: linear-gradient(to top, black 0%, black 45%, transparent 68%);
  }
}

@media (max-width: 480px) {
  .terminal-bg {
    height: clamp(160px, 36vw, 240px);
  }

  .terminal-column-left {
    opacity: 0.24;
    font-size: 9.5px;
    max-width: 45%;
  }

  .terminal-column-right {
    top: clamp(130px, 28vw, 190px);
    opacity: 0.18;
    font-size: 9px;
    max-width: 42%;
    justify-content: flex-end;
  }
}
</style>
