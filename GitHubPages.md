# Project: Upgrade my GitHub Pages portfolio (senior Product/UX focus, WCAG 2.2 AA)

**Stack:** GitHub Pages (Jekyll/Vanilla HTML+CSS+JS). Prefer progressive enhancement, zero build if possible. If a build is essential, keep it minimal.

**Details:**
- Name: Magda Urban-Taraszkiewicz
- Contact: Email@Email.com

**Brand tokens (draft):**
- **Colors:**
  - Primary: `#6C1BEE` (purple) – ensure AA contrast on white/light backgrounds
  - Secondary: `#F05619` (orange) – use sparingly for CTAs
  - Accent: `#F7C750` (yellow) – decorative only, test contrast
  - Neutrals: `#000000`, `#FFFFFF`, plus accessible greys (`#595959`, `#767676`, `#E5E5E5`)
- **Typography:** System stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) or single variable webfont with complete fallback chain
- **Tone:** credible, senior, outcomes-driven

---

## Objectives
1. **Above-the-fold value** (no scroll/click required): who I am, what I do, what I’ve delivered, and one primary CTA.  
2. **WCAG 2.2 AA** compliance across all pages.  
3. **Responsive** (mobile-first) and fast.  
4. **Signals for seniority**: case studies with measurable outcomes, process clarity, and leadership impact.

---

## Deliverables
- A PR with:
  - Updated HTML/CSS/JS (or Jekyll includes/layouts) implementing the changes below.
  - `ACCESSIBILITY.md` (audit notes + test instructions).
  - `README.md` changes (how to run, build, and maintain).
  - A **WCAG 2.2 AA checklist** with pass/fail and line references.
  - Lighthouse/AXE results (targets: Performance ≥ 90, Accessibility ≥ 100, Best Practices ≥ 95, SEO ≥ 95).
- Visual diffs (screenshots for 360px, 744px, 1024px, 1440px).

---

## Information Architecture (keep it lightweight)
- **Home (Landing)**
  - Hero (above the fold): Name, role (“Senior Product & UX Designer”), 1-sentence value prop, headshot (optional), trust logos or concise credibility line, Primary CTA (“View Case Studies”), Secondary CTA (“Download CV”, optional).
  - “Selected Work” (3–6 cards) with project title, 1-line outcome, tags, and a “Read case study” link.
  - “Expertise” (3–4 pillars) e.g., Strategy, Discovery & Research, Product Design, Design Ops/Leadership.
  - “About” (short bio + principles).
  - “Contact” (email button + LinkedIn).
- **Case Study Template** (multiple pages): Problem → Outcome → My Role → Constraints → Process → Impact (KPIs/OKRs) → Artifacts (images with alt) → Learnings.
- **About** (expanded) and **Contact** (separate page or section anchor).

---

## Above-the-fold spec (home)
- Max 9–12 words for headline; 1 sentence subhead emphasizing outcomes (business impact).  
- Primary CTA is **visually first** and keyboard-first.  
- Include a “Skip to content” link visible on focus.  
- Show either: (a) 3 compact case-study cards, or (b) a metrics strip (e.g., “Cut claim processing time −32% • +18% conversion • NPS +14”). Use real placeholders I can later replace.

---

## Accessibility requirements (WCAG 2.2 AA)
Implement and verify:
- **Semantics & Landmarks:** `<header> <nav> <main> <footer>`, unique page `<h1>`, logical heading order.
- **Keyboard:** All interactive elements reachable in a logical order; no keyboard traps; visible focus states with 3:1 contrast against adjacent colors; “Skip to content”.
- **Contrast:** Meet AA for text/iconography; check brand colors on light/dark backgrounds; provide accessible grey palette.
- **Forms/Inputs:** Explicit `<label>`s, `aria-describedby` for help/error, error prevention and clear messages; hit targets ≥ 24×24 px (2.5.8).
- **Pointer & Motion:** Respect `prefers-reduced-motion`; no motion-only cues; ensure drag alternatives; avoid parallax unless reduced.
- **Images & Media:** Informative `alt`; decorative `alt=""`; captions/transcripts where needed.
- **Focus Management:** On route changes/modal open/close, set focus appropriately; restore focus on close.
- **Auth/Timeouts:** No timeouts; no cognitive function tests.
- **Target Size (2.5.8):** Ensure buttons/links meet AA minimums without relying on surrounding whitespace only.
- **Status Messages (4.1.3):** Use ARIA live regions only where needed (non-disruptive).

---

## Performance & SEO
- Ship **<100KB CSS** and **<50KB JS** on home. No blocking fonts above the fold; use `font-display: swap`. Lazy-load images; responsive `srcset`.  
- Lighthouse targets above.  
- Semantic titles, meta description, Open Graph, JSON-LD Person/CreativeWork for case studies.  
- No heavy JS frameworks; vanilla or minimal Alpine-lite pattern acceptable.

---

## Implementation guidance
- Prefer **semantic HTML** + minimal CSS (utility classes or small design tokens).  
- Define tokens in `:root` (colors, spacing, radii, shadows, motion).  
- Use **container queries** or mobile-first breakpoints: `360, 744, 1024, 1440`.  
- Create modular partials/includes for **Hero**, **CaseStudyCard**, **Footer**, **Nav**.  
- Navigation: sticky top, reduced height on scroll, always keyboard and screen-reader friendly.  
- Provide a **no-JS** working baseline; JS progressively enhances (e.g., theme toggle, menu).  
- Dark mode optional, but must keep AA contrast.

---

## Content placeholders (fill with realistic scaffold)
- Case Study cards:  
  - **Title:** `[Product area] – shortened outcome`  
  - **Outcome:** e.g., “Reduced onboarding drop-off by 18% in 90 days”  
  - **My Role:** “Lead Product Designer”  
  - **Link:** `/case/xyz/`
- About blurb (~70–90 words) focused on impact, not responsibilities.  
- Trust signals: `[Company/sector types, scale, markets]`. Avoid logos if I can’t legally use them; simple “Worked with…” text line is fine.

---

## Testing plan
- Keyboard-only journey for all primary tasks.  
- Screen reader smoke test (NVDA/VoiceOver): navigate landmarks, verify headings, link purpose, form labels/errors.  
- Touch targets on 360px and 744px; fat-finger test.  
- AXE DevTools clean run; Lighthouse targets met; color-contrast audit on all states (default/hover/focus/disabled).  
- Print stylesheet quick pass (single page readable CV export from About).

---

## What I want you (Claude Code) to do
1. **Audit** current template against the objectives and WCAG 2.2 AA; produce a short gap report.  
2. **Propose**:  
   - Updated IA (as a bullet outline).  
   - Wireframe-level layout notes for the Home hero and card grid (text-only is fine).  
   - A minimal design-token set (CSS variables).  
3. **Implement** the improvements with clean, semantic HTML/CSS/JS, refactoring template includes/partials as needed.  
4. **Add** `ACCESSIBILITY.md`, screenshots, and update `README.md`.  
5. **Open a PR** with clear commit messages and a checklist mapping each WCAG criterion addressed.

---

## Acceptance criteria
- Above-the-fold communicates role, value, and primary CTA without scrolling.  
- WCAG 2.2 AA checks pass (with documented evidence).  
- Performance, Accessibility, SEO scores meet targets.  
- Code is small, readable, and owner-maintainable on GitHub Pages.  
- Content scaffolds are realistic and easy for me to replace.

---

**Note:** Use my details sparingly as placeholders; do not invent employers/NDAs.  
If you must choose between “flashy” and “accessible/clear,” choose **accessible/clear**.
