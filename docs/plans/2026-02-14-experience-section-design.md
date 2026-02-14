# Experience Section Design Enhancement — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add visual distinction, content richness, and personality to each role in the job history section.

**Architecture:** Pure HTML/CSS enhancements to the existing experience section in `index.html` and `css/main.css`. No new files. Lucide icons are already loaded via CDN. Decorative accents use CSS pseudo-elements. No JS changes needed — Lucide auto-renders `data-lucide` attributes via the existing `lucide.createIcons()` call in `js/main.js`.

**Tech Stack:** HTML, Tailwind CSS (CDN), custom CSS, Lucide Icons (CDN)

---

### Task 1: Add Industry Icons to All 5 Role Sidebars

**Files:**
- Modify: `index.html:198-203` (Paradise sidebar)
- Modify: `index.html:252-256` (Alliance sidebar)
- Modify: `index.html:294-299` (SPH sidebar)
- Modify: `index.html:314-318` (FJ Benjamin sidebar)
- Modify: `index.html:333-337` (JobSquare sidebar)

**Step 1: Add icon to Paradise Group sidebar**

In `index.html`, find the Paradise sidebar div (line 198). Insert an icon element as the first child, before the `<h3>`:

```html
<!-- Before (line 198-199): -->
<div class="lg:sticky lg:top-[calc(72px+2rem)]">
  <h3 class="font-display text-2xl font-bold leading-tight text-paradise mb-2">Paradise Group</h3>

<!-- After: -->
<div class="lg:sticky lg:top-[calc(72px+2rem)]">
  <div class="w-14 h-14 rounded-full bg-paradise/[0.08] flex items-center justify-center mb-4">
    <i data-lucide="utensils" class="w-7 h-7 text-paradise"></i>
  </div>
  <h3 class="font-display text-2xl font-bold leading-tight text-paradise mb-2">Paradise Group</h3>
```

**Step 2: Add icon to Alliance Group sidebar**

In `index.html`, find the Alliance sidebar div (line 252). Insert before the `<h3>`:

```html
<div class="w-14 h-14 rounded-full bg-alliance/[0.08] flex items-center justify-center mb-4">
  <i data-lucide="sparkles" class="w-7 h-7 text-alliance"></i>
</div>
```

**Step 3: Add icon to SPH Magazines sidebar**

In `index.html`, find the SPH sidebar div (line 294). Insert before the `<h3>`:

```html
<div class="w-14 h-14 rounded-full bg-sph/[0.08] flex items-center justify-center mb-4">
  <i data-lucide="book-open" class="w-7 h-7 text-sph"></i>
</div>
```

**Step 4: Add icon to F J Benjamin sidebar**

In `index.html`, find the FJ Benjamin sidebar div (line 314). Insert before the `<h3>`:

```html
<div class="w-14 h-14 rounded-full bg-fjbenjamin/[0.08] flex items-center justify-center mb-4">
  <i data-lucide="shirt" class="w-7 h-7 text-fjbenjamin"></i>
</div>
```

**Step 5: Add icon to JobSquare sidebar**

In `index.html`, find the JobSquare sidebar div (line 333). Insert before the `<h3>`:

```html
<div class="w-14 h-14 rounded-full bg-jobsquare/[0.08] flex items-center justify-center mb-4">
  <i data-lucide="briefcase" class="w-7 h-7 text-jobsquare"></i>
</div>
```

**Step 6: Visual check**

Open `index.html` in browser. Verify each role block now shows a colored circular icon badge above the company name. All 5 icons should render (Lucide auto-processes them on page load).

**Step 7: Commit**

```bash
git add index.html
git commit -m "feat: add industry icons to experience role sidebars"
```

---

### Task 2: Add Decorative Background Accents to All 5 Role Blocks

**Files:**
- Modify: `css/main.css` (append after line 131)

**Step 1: Add decorative pseudo-elements for all 5 flavors**

Append the following CSS to the end of `css/main.css`:

```css
/* Decorative background accents per role */
.flavor-paradise::after {
  content: "";
  position: absolute;
  top: -10%;
  right: -5%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(184, 92, 56, 0.04), transparent 70%);
  pointer-events: none;
}

.flavor-alliance::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 40px,
    rgba(158, 107, 123, 0.03) 40px,
    rgba(158, 107, 123, 0.03) 41px
  );
  pointer-events: none;
}

.flavor-sph::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 60px,
      rgba(44, 62, 80, 0.025) 60px,
      rgba(44, 62, 80, 0.025) 61px
    );
  pointer-events: none;
}

.flavor-fjbenjamin::after {
  content: "";
  position: absolute;
  top: -20%;
  right: 5%;
  width: 200px;
  height: 400px;
  background: linear-gradient(
    135deg,
    transparent 45%,
    rgba(109, 93, 126, 0.04) 45%,
    rgba(109, 93, 126, 0.04) 55%,
    transparent 55%
  );
  pointer-events: none;
}

.flavor-jobsquare::after {
  content: "";
  position: absolute;
  top: 10%;
  right: 5%;
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(74, 124, 105, 0.05) 2px,
    transparent 2px
  );
  background-size: 20px 20px;
  pointer-events: none;
}
```

**Step 2: Visual check**

Open `index.html` in browser. Each experience block should show a very faint background decoration. They should be barely noticeable — just enough to add texture. If any are too strong, reduce opacity values.

**Step 3: Commit**

```bash
git add css/main.css
git commit -m "feat: add decorative background accents to experience role blocks"
```

---

### Task 3: Add Impact Headlines to All 5 Role Blocks

**Files:**
- Modify: `index.html:205-206` (Paradise content column)
- Modify: `index.html:258-259` (Alliance content column)
- Modify: `index.html:301-302` (SPH content column)
- Modify: `index.html:320-321` (FJ Benjamin content column)
- Modify: `index.html:340-341` (JobSquare content column)

**Step 1: Add impact headline to Paradise Group**

In `index.html`, find the Paradise right column (line 205). Insert an impact headline as the first child of the `<div>`, before the existing `<p>` description:

```html
<!-- Before (line 205-206): -->
<div>
  <p class="text-[0.95rem] text-charcoal-light leading-relaxed mb-6">Lead franchise support...

<!-- After: -->
<div>
  <p class="font-display text-lg italic text-paradise/80 mb-4 leading-relaxed">Bringing a Singapore F&B icon to 8+ international markets</p>
  <p class="text-[0.95rem] text-charcoal-light leading-relaxed mb-6">Lead franchise support...
```

**Step 2: Add impact headline to Alliance Group**

In `index.html`, find the Alliance right column (line 258). Insert before the `<ul>`:

```html
<!-- Before (line 258-259): -->
<div>
  <ul class="exp-list list-none space-y-4">

<!-- After: -->
<div>
  <p class="font-display text-lg italic text-alliance/80 mb-4 leading-relaxed">Scaling beauty brands across 6 APAC markets and digital platforms</p>
  <ul class="exp-list list-none space-y-4">
```

**Step 3: Add impact headline to SPH Magazines**

In `index.html`, find the SPH right column (line 301). Insert before the `<ul>`:

```html
<!-- Before (line 301-302): -->
<div>
  <ul class="exp-list list-none space-y-4">

<!-- After: -->
<div>
  <p class="font-display text-lg italic text-sph/80 mb-4 leading-relaxed">Supporting Singapore's leading magazine titles</p>
  <ul class="exp-list list-none space-y-4">
```

**Step 4: Add impact headline to F J Benjamin**

In `index.html`, find the FJ Benjamin right column (line 320). Insert before the `<ul>`:

```html
<p class="font-display text-lg italic text-fjbenjamin/80 mb-4 leading-relaxed">Selected for a prestigious retail management trainee programme</p>
```

**Step 5: Add impact headline to JobSquare**

In `index.html`, find the JobSquare right column (line 340). Insert before the `<ul>`:

```html
<p class="font-display text-lg italic text-jobsquare/80 mb-4 leading-relaxed">Connecting 50+ corporate clients with the right talent</p>
```

**Step 6: Visual check**

Open `index.html` in browser. Each role block should now have an italic headline in its flavor color above the bullet list. It should look like a pull-quote that immediately communicates the role's impact.

**Step 7: Commit**

```bash
git add index.html
git commit -m "feat: add impact headlines to all experience role blocks"
```

---

### Task 4: Add Key Metric Callouts to Paradise and Alliance

**Files:**
- Modify: `index.html` (Paradise right column, after impact headline)
- Modify: `index.html` (Alliance right column, after impact headline)
- Modify: `css/main.css` (append metric callout styles)

**Step 1: Add CSS for metric callout cards**

Append to `css/main.css`:

```css
/* Key metric callout cards */
.metric-callout {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 12px;
  border: 1px solid;
  margin-bottom: 1.25rem;
}

.metric-callout .metric-number {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.metric-callout .metric-label {
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.7;
}
```

**Step 2: Add metric callout to Paradise Group**

In `index.html`, find the Paradise right column. Insert after the impact headline `<p>` and before the existing `<p>` description:

```html
<p class="font-display text-lg italic text-paradise/80 mb-4 leading-relaxed">Bringing a Singapore F&B icon to 8+ international markets</p>
<div class="metric-callout bg-paradise/[0.06] border-paradise/20">
  <span class="metric-number text-paradise">8+</span>
  <span class="metric-label text-charcoal-light">Markets Expanded Into</span>
</div>
<p class="text-[0.95rem] text-charcoal-light leading-relaxed mb-6">Lead franchise support...
```

**Step 3: Add metric callout to Alliance Group**

In `index.html`, find the Alliance right column. Insert after the impact headline and before the `<ul>`:

```html
<p class="font-display text-lg italic text-alliance/80 mb-4 leading-relaxed">Scaling beauty brands across 6 APAC markets and digital platforms</p>
<div class="flex gap-4 flex-wrap">
  <div class="metric-callout bg-alliance/[0.06] border-alliance/20">
    <span class="metric-number text-alliance">6</span>
    <span class="metric-label text-charcoal-light">Markets</span>
  </div>
  <div class="metric-callout bg-alliance/[0.06] border-alliance/20">
    <span class="metric-number text-alliance">7</span>
    <span class="metric-label text-charcoal-light">Platforms Managed</span>
  </div>
</div>
<ul class="exp-list list-none space-y-4">
```

**Step 4: Visual check**

Open `index.html` in browser. Paradise should show a single "8+" metric card. Alliance should show two side-by-side metric cards ("6 Markets" and "7 Platforms Managed"). They should match the visual weight of the stats bar at the top of the page.

**Step 5: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: add key metric callout cards to Paradise and Alliance roles"
```

---

### Task 5: Add Coffee/Matcha Easter Eggs

**Files:**
- Modify: `index.html:456` (chat greeting message)
- Modify: `index.html:437-439` (footer)
- Modify: `index.html:443-445` (chat FAB button)
- Modify: `css/main.css` (append steam animation)

**Step 1: Update the chat widget greeting**

In `index.html`, find line 456. Change the greeting text:

```html
<!-- Before: -->
<div class="chat-msg-bot max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed bg-white text-charcoal border border-border-custom self-start">Hi! I'm Alivia — ask me anything about my experience, skills, or career!</div>

<!-- After: -->
<div class="chat-msg-bot max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed bg-white text-charcoal border border-border-custom self-start">Hi! I'm Alivia — currently fueled by matcha. Ask me anything about my experience, skills, or career!</div>
```

**Step 2: Add matcha leaf to footer**

In `index.html`, find the footer (line 437-439). Add a tiny leaf SVG between the name and tagline:

```html
<!-- Before: -->
<footer class="py-12 px-8 text-center border-t border-border-custom">
  <p class="font-display text-xl font-semibold text-charcoal mb-2">Alivia Kan</p>
  <p class="text-xs text-muted">Business Development &middot; Franchise Expansion &middot; APAC & Global Markets</p>
</footer>

<!-- After: -->
<footer class="py-12 px-8 text-center border-t border-border-custom">
  <p class="font-display text-xl font-semibold text-charcoal mb-1">Alivia Kan</p>
  <svg class="inline-block w-4 h-4 mb-2" viewBox="0 0 24 24" fill="none" stroke="#7B9E6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8c.7-1 1.2-2.2 1.5-3.5C12 5.5 7 8.5 4 14c2.5-1 5.2-1.5 8-1.5"/><path d="M5.3 18.7C3 14.5 4.5 10 8 7c-1 3.5-.5 7 1.5 10"/></svg>
  <p class="text-xs text-muted">Business Development &middot; Franchise Expansion &middot; APAC & Global Markets</p>
</footer>
```

**Step 3: Add steam animation CSS**

Append to `css/main.css`:

```css
/* Chat FAB steam Easter egg */
#chatFab {
  position: relative;
}

#chatFab::before,
#chatFab::after {
  content: "";
  position: absolute;
  bottom: 100%;
  width: 2px;
  height: 0;
  background: rgba(184, 92, 56, 0.3);
  border-radius: 2px;
  opacity: 0;
  transition: height 0.4s ease, opacity 0.4s ease;
}

#chatFab::before {
  left: 40%;
  transform: rotate(-8deg);
}

#chatFab::after {
  left: 55%;
  transform: rotate(8deg);
}

#chatFab:hover::before {
  height: 14px;
  opacity: 1;
  animation: steam 1.5s ease-in-out infinite;
}

#chatFab:hover::after {
  height: 10px;
  opacity: 1;
  animation: steam 1.5s ease-in-out infinite 0.3s;
}

@keyframes steam {
  0% {
    transform: translateY(0) rotate(-8deg) scaleX(1);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-6px) rotate(-4deg) scaleX(1.3);
    opacity: 0.2;
  }
  100% {
    transform: translateY(-12px) rotate(0deg) scaleX(0.8);
    opacity: 0;
  }
}
```

**Step 4: Visual check**

Open `index.html` in browser:
1. Open the chat widget — greeting should mention matcha
2. Scroll to footer — tiny green leaf should be visible between name and tagline
3. Hover over the chat FAB button — two thin steam wisps should rise from the top

**Step 5: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: add coffee/matcha Easter eggs (chat greeting, footer leaf, FAB steam)"
```

---

### Task 6: Final Visual Review and Polish

**Files:**
- Possibly modify: `index.html`, `css/main.css` (minor tweaks only)

**Step 1: Full page review**

Open `index.html` in browser and scroll through the entire page. Check:
- All 5 industry icons render correctly with proper colors
- Decorative backgrounds are subtle (not distracting)
- Impact headlines read well and don't feel repetitive
- Metric callouts in Paradise/Alliance are properly aligned
- Footer leaf icon is centered and subtle
- Chat greeting mentions matcha
- Steam animation on FAB hover works smoothly
- No layout breaks on mobile (resize browser to ~375px width)

**Step 2: Adjust if needed**

If any decorative accent is too strong, reduce opacity in `css/main.css`. If impact headlines feel too large on mobile, add responsive sizing.

**Step 3: Final commit (if any adjustments)**

```bash
git add -A
git commit -m "fix: polish experience section design tweaks"
```
