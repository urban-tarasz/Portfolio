## Commit Guidelines (Portfolio Project)

- Commit after each **scoped change** (e.g., hero layout, accessibility fix, token update).  
- Push frequently so changes are visible and traceable.  
- Follow **Conventional Commits** style, adapted for this project:

  - `feat: ...` – new section, component, or feature (e.g., "feat: add hero with above-the-fold CTA")  
  - `fix: ...` – bug fix or WCAG/UX issue (e.g., "fix: correct focus order for navigation")  
  - `refactor: ...` – improve structure or code without changing behavior (e.g., "refactor: extract case study card as include")  
  - `docs: ...` – documentation updates (README, ACCESSIBILITY.md, comments)  
  - `style: ...` – purely visual/style changes (colors, spacing, tokens)  
  - `assets: ...` – add/update non-code assets (images, icons, fonts)  
  - `chore: ...` – maintenance tasks (dependencies, config, cleanup)

- Keep commits **small and descriptive**: one logical change per commit.  
- Use **imperative mood** in messages (e.g., "add", "fix", "update").  
- Reference **WCAG criteria** or **Lighthouse results** in commit body when relevant.  
- Group related changes under a single commit rather than scattering across multiple categories.  

## 2. UX/UI Principles
- **Accessibility:** Meet WCAG 2.2 AA. Provide roles/labels, focus order, hit targets ≥ 44×44.
- **Responsive:** Design mobile‑first; test common sizes.
- **Interaction 2025:** Prefer **slide‑in overlays** for progressive disclosure over inline expansion or full modal takeovers.
- **Smooth & forgiving:** Non‑blocking errors; optimistic UI where safe; use proper spring animations.
- **Match existing patterns:** Naming, structure, component style must align with current codebase.