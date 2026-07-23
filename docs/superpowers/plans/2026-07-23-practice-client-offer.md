# Practice Client Offer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a conversion-focused Russian landing page for a four-week warm-network client acquisition offer.

**Architecture:** A single vinext route renders all marketing sections. A small client component owns clipboard interaction; the rest remains static and server-rendered. Styling lives in one responsive stylesheet.

**Tech Stack:** vinext, React 19, TypeScript, CSS, OpenAI Sites.

---

### Task 1: Project boundary and copy

**Files:**
- Create: `README.md`
- Create: `AGENTS.md`
- Create: `TASKS.md`
- Create: `HANDOFF.md`

- [ ] Write the project card, operating rules, current tasks, and continuation state.
- [ ] Verify the promise, audience, cases, process, outcomes, objections, and CTA are all represented.
- [ ] Commit the documentation with `git commit -m "docs: define practice client offer"`.

### Task 2: Landing page

**Files:**
- Modify: `app/page.tsx`
- Create: `app/CopyCta.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] Replace the starter route with the complete page structure.
- [ ] Add a clipboard CTA with visible success and fallback text.
- [ ] Add responsive styling, accessible focus states, and reduced-motion behavior.
- [ ] Remove starter preview code and metadata.

### Task 3: Verification and publishing

**Files:**
- Modify: `.openai/hosting.json`

- [ ] Run the production build and fix compilation errors.
- [ ] Create the Sites project once and persist its opaque project ID.
- [ ] Commit and push the exact validated source.
- [ ] Package the validated build, save a Sites version, and deploy it.
- [ ] Confirm the production deployment succeeds and record the public handoff URL.
