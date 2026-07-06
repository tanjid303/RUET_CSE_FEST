# RUET CSE FEST 2026 — Website Design & Content Blueprint

A complete A-to-Z plan for building a professional, sponsor-ready festival website — benchmarked against **SUST CSE Carnival 2026** (`csecarnival.sust.edu`) and **IUT 12th ICT FEST** (`iutictfest26.tech`), and built from the actual RUET CSE Fest 2026 sponsorship proposal.

---

## 1. Competitive Teardown — What SUST and IUT Actually Do Well

Before designing, it's worth naming exactly what each reference site nails, so RUET's site can borrow the right moves instead of copying the look.

### SUST CSE Carnival 2026 — "Sponsor-first, hype-driven"
- **Presenting-sponsor branding baked into the identity itself**: "bKash presents SUST CSE Carnival 2026" — the sponsor name is literally part of the page title and hero, not a logo bolted on later. This signals to future sponsors: *your brand becomes part of the event's name*.
- **Live countdown timer** in the hero (Days/Hours/Mins/Secs) — creates urgency.
- **Infinite scrolling sponsor marquee** right under the hero — sponsors get seen before anything else.
- **Tiered sponsor list with clickable logos**, grouped by tier (Title / Co-Sponsor / Hackathon Sponsor), each linking out to the sponsor's own site — this is a subtle value-add for sponsors (backlink + visibility).
- **"Core Pillars" event section** — big, cinematic per-event blocks with a poster image, one strong sentence, and a single CTA ("Explore Details").
- **Legacy timeline** ("Decades of Technical Excellence") — turns fest history into a scroll-through brand-credibility moment (2010 → 2026).
- **Dark, techy theme** with a horizontal scrolling gallery strip of past-event photos.
- **Register CTA repeated at top nav, mid-page, and footer.**

### IUT 12th ICT FEST — "Minimal, data-dense, execution-first"
- **Extremely minimal, confident copywriting**: *"A quieter stage for sharp minds and competitive craft."* No hype adjectives — just clean, self-assured tone.
- **Structured event cards** with a strict, scannable info grid per event: **Team size / Date / Fee / Venue** — every event answers the same 4 questions in the same order. This is the single most reusable pattern for RUET.
- **Dedicated Prize Pool section**, separate from the event cards, totaling all prize money into one big headline number ("550K+ BDT") with a per-event breakdown underneath.
- **3-step timeline** ("Registration opens → Online rounds → Campus finals") — simplifies a complex multi-week schedule into 3 human-readable phases.
- **Dark navy (`#050816`) + single accent color**, almost no gradients — feels engineered, not decorated.
- **Individual sub-pages per event** (`/iupc`, `/hackathon`, `/datathon`...) rather than cramming everything onto one page — better for sharing individual event links on Facebook groups.
- **"Registration Closed" vs "Register" state shown directly on the card** — tells visitors instantly whether an event is still open, which reduces support questions.

### The synthesis for RUET
Take SUST's **sponsor-forward energy and hype presentation** and combine it with IUT's **clean information architecture and per-event data discipline**. RUET CSE Fest has a genuinely bigger, more diverse event roster (10 events vs SUST's 2, IUT's 6) — so IUT's structured card pattern is essential to avoid visual chaos, while SUST's sponsor marquee is essential because sponsorship is explicitly the business goal of this proposal.

---

## 2. Brand & Visual Identity

### 2.1 Color palette
Derived from the RUET CSE Fest 2026 proposal cover art (teal/cyan mountain motif, warm brown/orange accents) — but adapted into a modern dark-mode tech-fest palette, and kept distinct from your EduConnect navy/teal so the fest has its own identity:

| Role | Color | Hex | Use |
|---|---|---|---|
| Background (base) | Deep navy-charcoal | `#0A0E1A` | Page background |
| Background (elevated) | Slightly lighter navy | `#12172B` | Cards, panels |
| Primary accent | Electric cyan/teal | `#22D3EE` | CTAs, links, glow effects — echoes the cover art's cyan diamond |
| Secondary accent | Warm amber/orange | `#F2A93B` | Highlights, prize money, sponsor tier badges — echoes the cover art's orange/brown |
| Tertiary accent | Deep maroon-brown | `#6B3F3F` | Rare use — dividers, subtle textures from the RUET logo triangle motif |
| Text (primary) | Off-white | `#F1F5F9` | Headings, body |
| Text (muted) | Cool gray | `#94A3B8` | Sub-text, metadata |
| Success/Open | Green | `#4ADE80` | "Registration Open" state |
| Closed/Warning | Muted red | `#EF4444` | "Registration Closed" state |

**Why this works:** cyan + amber is a complementary pairing that reads as "energetic but professional" — cyan for the tech/competition side, amber for the prize-money/achievement side. It also directly ties back to the official RUET CSE Fest 2026 cover design instead of feeling generic.

### 2.2 Typography
- **Display/Headings:** `Clash Display` or `Space Grotesk` (bold, geometric, modern — matches the angular mountain logo)
- **Body:** `Inter` or `DM Sans` (clean, highly legible, good Bengali-adjacent glyph support if you ever need bilingual text)
- **Monospace accent** (for countdown timers, event codes, prize figures): `JetBrains Mono` or `IBM Plex Mono` — gives a "competitive programming / terminal" feel that resonates with a CS audience.

### 2.3 Visual motifs
- Reuse the **triangular/mountain diamond motif** from the official cover art as a recurring geometric background element (low-opacity, large-scale, behind hero and section dividers) — this ties the website visually back to the official poster/banner design the department already approved.
- Subtle **circuit-line / grid texture** in dark sections — signals "CSE," not generic "university event."
- **Glassmorphism cards** (frosted, semi-transparent panels with a thin cyan border-glow) for event cards and sponsor tiers — modern, premium, matches your existing design taste.
- Avoid heavy 3D (React Three Fiber hero scenes) for *this* project — a fest site needs to load fast on mobile data and be skimmable by sponsors on a laptop in 30 seconds. Save the heavy 3D treatment for your personal portfolio; here, motion should come from **Framer Motion micro-interactions + GSAP scroll reveals**, not a full 3D scene.

---

## 3. Recommended Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | SSR/SEO matters here — sponsors and Google search results need real metadata, OG images, fast first paint. (SUST and IUT both use Next.js under the hood.) |
| Styling | **Tailwind CSS** | Fast iteration, consistent design tokens, easy dark theme |
| Animation | **Framer Motion** (page/element transitions) + **GSAP + ScrollTrigger** (scroll-based reveals, counters, marquee) | You already know both from EduConnect/portfolio work |
| Forms | **Google Forms embed** (fastest to ship) → later, custom form + Google Sheets API or a lightweight Node/Express + MongoDB backend if you want your own registration database | Start simple, upgrade later |
| Countdown | Client component, `date-fns` for time math | |
| Deployment | **Vercel** (free tier is plenty) | Instant deploys, custom domain support |
| Analytics | **Vercel Analytics** or **Plausible** | Track sponsor page interest, registration funnel drop-off |
| CMS (optional) | A simple `events.json` / `sponsors.json` data file, or **Sanity.io free tier** if committee members without coding skills need to update content | Keeps content editable without redeploying code for every sponsor logo change |

---

## 4. Sitemap

```
/                     → Home (hero, event grid, prize pool, sponsors, timeline, CTA)
/events               → All events overview (grid/filter)
/events/[slug]         → Individual event page (IUPC, Hackathon, CTF, Datathon,
                          VLSIthon, GameJam, Treasure-Hunt, Cultural-Night,
                          Tech-Talk, Prize-Giving)
/sponsors             → Sponsorship tiers + benefits + "become a sponsor" CTA
/sponsors/proposal     → Downloadable sponsorship PDF (the proposal you already have)
/gallery               → Photos from past fests (2k22 etc.)
/about                 → About RUET + CSE Department
/schedule              → Full day-by-day timeline (10–17 April table)
/register              → Registration hub (links out to per-event Google Forms)
/contact               → Committee contact, socials, location map
/faq                   → Common questions (eligibility, ID cards, accommodation, etc.)
```

Keep individual event sub-pages (like IUT) rather than one giant scrolling page — it gives you shareable, sponsor-brandable URLs like `ruetcsefest.com/events/hackathon`, and each can carry its own "Presented by [Sponsor]" tag once event-sponsors are signed.

---

## 5. Page-by-Page Content Plan

### 5.1 Homepage

**Hero section**
- Eyebrow tag: `Department of CSE, RUET presents`
- Big headline: **RUET CSE FEST 2026**
- Sub-headline (SUST-style confident, IUT-style minimal — pick one voice and stay consistent). Suggested tone, IUT-style:
  > *A week-long stage for Bangladesh's sharpest coders, builders, and creators.*
- Dates: **10–17 April 2026** · Venue: **RUET, Rajshahi**
- Live **countdown timer** (Days / Hours / Mins / Secs) to April 10, 2026
- Stats counter row (animate on scroll, like SUST): `10,000+ Attendees` · `10 Events` · `8 Days` · `50+ Universities` (fill exact figures once confirmed)
- Primary CTA: `Register Now` · Secondary CTA: `Become a Sponsor`
- Background: low-opacity animated mountain/diamond motif from the official logo, subtle particle drift (CSS/GSAP, not full 3D)

**Sponsor marquee (directly under hero, SUST-style)**
- Infinite horizontal scroll of confirmed sponsor logos
- If no sponsors confirmed yet, show department/university logos + "Sponsors joining soon" placeholder — never leave it visually empty, since an empty sponsor row signals "nobody wants this" to new prospects

**Highlighted Events grid (IUT-card pattern)**
Each card shows, in this exact order (matches IUT's proven scannable format):
- Event icon/logo + name
- One-sentence hook
- `Team size` · `Date` · `Fee` (if any) · `Venue`
- Status badge: `Registration Open` / `Coming Soon` / `Closed`
- CTA → event detail page

Content pulled directly from your proposal:

| Event | Date | Mode | Participants |
|---|---|---|---|
| IUPC | 10.04.2026 | Onsite | Inter-University (600 participants) |
| Hackathon | 11.04.2026 | Onsite | Inter-University (50 teams) |
| GameJam | 13.04.2026 | Onsite + Online | Inter-University |
| CTF | 14.04.2026 | Onsite + Online | Inter-University (40 teams) |
| Datathon | 15.04.2026 | Onsite + Online | Inter-University |
| Treasure Hunt | 15.04.2026 | Onsite only | RUET CSE only |
| VLSIthon | 16.04.2026 | Onsite | Inter-University |
| Cultural Night & Concert | 16.04.2026 | Onsite | Open to all |
| Tech-Talk | 17.04.2026 | Onsite | Open to all |
| Prize Giving, Gala Night & Grand Dinner | 17.04.2026 | Onsite | RUET CSE only |

**Prize Pool section (IUT-style single headline number)**
- Don't publish your internal cost breakdown (that's for sponsors only, in the PDF) — but *do* publish total confirmed prize money once finalized, styled exactly like IUT's "550K+ BDT" block, broken down per competitive event (IUPC / Hackathon / CTF / Datathon / VLSIthon / GameJam). This is a strong participant-acquisition lever and costs you nothing to reveal, unlike sponsorship figures.

**Timeline section (SUST legacy-style, but forward-looking)**
Simplify into 3 phases like IUT:
1. **Registration Opens** — teams reserve their spot across all tracks
2. **Fest Week (10–17 April)** — onsite competitions, cultural night, tech talks
3. **Prize Giving & Grand Dinner** — 17 April, closing celebration

**Sponsors teaser section**
- Show tier names + prices as a taste (Title / Powered By / Gold / Silver) with a `View Full Sponsorship Deck` CTA → `/sponsors`

**Past Fest strip**
- Horizontal scroll gallery of RUET CSE FEST 2k22 photos (SUST-style)
- "Celebrating our legacy" micro-timeline if there are multiple past editions to show

**Footer**
- Organized by: Department of CSE, RUET
- Quick links, social icons (Facebook page), contact email, location embed
- `© 2026 Department of CSE, RUET · All Rights Reserved`

---

### 5.2 `/sponsors` page — the most important page for your actual goal

This page needs to convert the PDF proposal into a persuasive, skimmable web experience. Structure:

1. **Why Sponsor Us** — reuse your proposal's bullet points as icon-based feature cards:
   - Massive Reach (10,000+ attendees)
   - Premium Audience (top tech talent)
   - Extensive Brand Visibility
   - Media Coverage
   - On-site Activation + Job Fair

2. **Sponsorship Tiers** — pricing table, styled like a SaaS pricing page (this is the single highest-leverage design pattern you can borrow from outside the fest-site genre):

| Tier | Amount | Slots |
|---|---|---|
| **Title Sponsor** | BDT 10,00,000 | 1 available |
| **Powered By** | BDT 8,00,000 | 1 available |
| **Gold Sponsor** | BDT 6,00,000 | 2 available |
| **Silver Sponsor** | BDT 3,00,000 | 2 available |
| **Event Sponsor** | From BDT 2,00,000 | Limited, event-specific |

3. **Benefits comparison table** — directly lift your proposal's privilege matrix (Title vs Gold vs Silver: mention in title, logo placement, media coverage, closing-ceremony guest slot, brand survey, marketing stall, database access) as a clean checkmark table — this is already excellent content in your PDF, just needs HTML table styling.

4. **Event-Sponsor callout box** — highlight the "Presented by [Sponsor Name]" naming-rights option per event (like bKash/SUST), since this is a lower-commitment entry point for smaller companies.

5. **Confirmed Sponsors wall** — logos grouped by tier (once signed), each clickable to the sponsor's website (SUST pattern — it's a small goodwill gesture that makes sponsors more likely to renew).

6. **CTA block**: `Download Full Proposal (PDF)` + `Contact the Sponsorship Team` (mailto + phone) + a short contact form.

7. Footer note (from your proposal, keep verbatim in spirit): amounts exclude VAT/duties, benefits subject to formal agreement, customized in proportion to sponsorship amount.

---

### 5.3 Individual event pages (`/events/[slug]`)

Template every event page identically for consistency:

1. Event name + one-line tagline + hero banner/poster
2. Info strip: Team size · Date & time · Fee · Venue · Mode (onsite/online)
3. "About this event" — 2–3 paragraph description (write fresh copy per event based on your proposal's one-liners, expanded)
4. Rules & format (bullet list — rounds, eligibility, judging criteria)
5. Prize breakdown for that specific event
6. Timeline/schedule for that event
7. Registration CTA (embed or link to Google Form)
8. FAQ accordion specific to that event
9. "Presented by [Sponsor]" badge slot (empty/generic until an event sponsor signs)

---

### 5.4 `/about` page
- About RUET (from proposal, condensed)
- About the CSE Department (from proposal, condensed)
- Meet the Organizing Committee (add faces/names — builds trust for sponsors evaluating who they're funding)
- Past fest history (2k22 and any earlier editions)

### 5.5 `/schedule`
- Full day-by-day table exactly as your proposal has it (Event / Date / Mode / Participants) but rendered as a visual timeline/calendar component, filterable by day

### 5.6 `/gallery`
- Grid/masonry of past-fest photography, lightbox on click, organized by year

### 5.7 `/faq`
- Eligibility, ID requirements, accommodation for out-of-town teams, refund policy, dress code for cultural night, WiFi/venue logistics

### 5.8 `/contact`
- Organizing committee emails/phones by event
- Embedded Google Map of RUET campus
- Social links

---

## 6. Interaction & Motion Details

- **Countdown timer**: monospace font, subtle pulse/glow on the seconds digit
- **Scroll-triggered counters**: stats (10,000+ attendees etc.) count up from 0 when scrolled into view (GSAP ScrollTrigger)
- **Sponsor marquee**: CSS `@keyframes` infinite scroll, pause on hover
- **Event cards**: subtle lift + cyan border-glow on hover, framer-motion `whileHover`
- **Page transitions**: fade + slight upward slide between routes
- **Mobile-first**: test the event-card grid at 375px width first — most Bangladeshi student traffic will be mobile Facebook-referral traffic, not desktop

---

## 7. Content You Still Need to Finalize Before Launch
(gaps in the current proposal that the website will expose if left blank)

- [ ] Confirm final fest dates — proposal has **two conflicting date ranges** ("18th–25th April" on the cover vs "10th–17th/20th April" in the letter and event table). Resolve this before publishing anything.
- [ ] Confirmed sponsor names/logos (currently proposal-only, no signed sponsors listed)
- [ ] Final prize money per event (your cost breakdown lists total *budget*, not confirmed *prize pool* — these are different numbers; only publish the prize pool once locked)
- [ ] Organizing committee member names/photos
- [ ] Registration form links per event
- [ ] Venue-specific room/lab assignments (IUT publishes exact labs — this level of specificity builds trust)
- [ ] Domain name + hosting (suggest something like `ruetcsefest.com` or `ruetcsefest26.com`, matching IUT's `iutictfest26.tech` naming convention)

---

## 8. Suggested Build Order (fastest path to a live, sponsor-shareable site)

1. Set up Next.js + Tailwind boilerplate, load fonts/colors from Section 2
2. Build Homepage hero + event grid with placeholder/confirmed data (highest priority — this is the link you'll send to prospective sponsors first)
3. Build `/sponsors` page (second priority — this directly serves your actual fundraising goal)
4. Build `/events/[slug]` template, populate all 10 events
5. Add countdown + stats counters
6. Build `/schedule`, `/about`, `/gallery`, `/faq`, `/contact`
7. Wire up registration forms (Google Forms first, custom backend later if needed)
8. Polish motion/animation pass
9. SEO metadata + OG images per page (critical for sponsor-share previews on Facebook/LinkedIn)
10. Deploy to Vercel, connect custom domain, submit to Google Search Console

---

*This plan is intentionally written so you (or anyone on the committee) can hand individual sections to different people — one person can build the sponsors page from Section 5.2 while another builds the events template from Section 5.3, without needing to read the whole document.*
