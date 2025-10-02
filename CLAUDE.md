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