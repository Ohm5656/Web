---
name: ui-ux-pro-max
description: Web-first UI/UX design intelligence with searchable local data for React, Tailwind, and related stacks.
---

# UI/UX Pro Max

Comprehensive design guide for web and mobile applications, adapted for this repository as a web-first skill.

Local data available in this project:

- 67 UI styles
- 96 color palettes
- 57 font pairings
- 96 product types
- 100 reasoning rules
- 99 UX guidelines
- 100 icon recommendations
- 25 chart types
- 13 technology stacks

## Project Fit

This repository is a website built with React, Vite, Tailwind CSS, React Router, Motion, and shadcn-style UI primitives.

For this project, use the skill like this:

- Start with `--design-system` for overall direction
- Use `--stack html-tailwind` for layout, spacing, responsive behavior, tokens, and visual implementation
- Use `--stack react` for interaction, rendering, and performance guidance
- Use `--stack shadcn` when editing or extending `src/app/components/ui`

## When to Apply

Use this skill when the task changes how the interface looks, feels, moves, or is interacted with.

### Must Use

- Designing a new page such as a landing page, portfolio page, dashboard, admin area, or marketing section
- Creating or refactoring UI components such as a navbar, hero, modal, pricing card, form, table, tabs, or chart
- Choosing colors, typography, spacing, layout structure, or motion direction
- Reviewing UI quality, UX clarity, accessibility, or visual consistency
- Fixing issues like cluttered navigation, weak hierarchy, poor hover states, low contrast, or broken responsive behavior

### Recommended

- The UI feels "not professional enough" but the reason is unclear
- A page needs stronger hierarchy, cleaner spacing, or more convincing product positioning
- You want a more intentional design system before implementing new sections
- You need to align design decisions across multiple pages

### Skip

- Pure backend or API work
- Database or infrastructure tasks
- Performance work unrelated to rendering or interaction
- Non-visual scripts and automation

## Rule Categories by Priority

Use this order when reviewing or improving web UI.

| Priority | Category | Impact | Domain | Key Checks | Avoid |
|----------|----------|--------|--------|------------|-------|
| 1 | Accessibility | Critical | `ux`, `web` | Contrast, focus states, keyboard nav, alt text, labels | Hidden focus, icon-only actions without labels |
| 2 | Interaction | Critical | `ux` | Clear hover/active states, touch targets, loading feedback | Hover-only behavior, zero-feedback clicks |
| 3 | Performance | High | `ux`, `react` | Image sizing, lazy loading, CLS control, route splitting | Layout thrashing, oversized assets, blocking UI |
| 4 | Style Selection | High | `style`, `product`, `color`, `typography` | Product fit, consistency, one visual language | Random style mixing, trend-chasing without context |
| 5 | Layout and Responsive | High | `ux`, `web` | Mobile-first structure, no horizontal scroll, fixed header offsets | Fixed-width layouts, clipped content, broken stacking |
| 6 | Typography and Color | Medium | `typography`, `color` | Type scale, semantic color roles, readable line length | Gray-on-gray, body text too small, raw hex everywhere |
| 7 | Animation | Medium | `ux` | Meaningful motion, 150-300ms timing, transform/opacity only | Decorative-only motion, layout-shifting animation |
| 8 | Forms and Feedback | Medium | `ux`, `web` | Visible labels, inline errors, success/loading states | Placeholder-only labels, vague error messages |
| 9 | Navigation Patterns | High | `ux`, `landing` | Simple top-level nav, strong CTA hierarchy, current-page cues | Overloaded nav, duplicate CTAs, confusing mobile menu |
| 10 | Charts and Data | Low | `chart` | Correct chart type, accessible colors, labels and tooltips | Color-only meaning, decorative charts, empty-state confusion |

## Quick Reference

### 1. Accessibility

- `color-contrast` - Body text should meet WCAG AA contrast at minimum
- `focus-states` - Keep visible focus rings on interactive elements
- `alt-text` - Meaningful images need alt text; decorative ones should use empty alt
- `aria-labels` - Icon-only controls need accessible labels
- `keyboard-nav` - Tab order should match visual order
- `form-labels` - Inputs need labels, not placeholders alone
- `heading-hierarchy` - Keep heading levels sequential and meaningful
- `color-not-only` - Never rely on color alone to indicate state or meaning
- `reduced-motion` - Respect `prefers-reduced-motion` for non-essential animation
- `skip-links` - Include skip links on content-heavy pages when appropriate

### 2. Interaction

- `touch-target-size` - Aim for at least 44x44 CSS px for tap targets
- `touch-spacing` - Leave enough gap between adjacent controls
- `hover-vs-click` - Core actions must work without hover
- `cursor-pointer` - All clickable cards and controls should communicate interactivity
- `loading-buttons` - Disable and show progress during async actions
- `error-feedback` - Errors should appear near the relevant element
- `press-feedback` - Hover, active, and pressed states should be obvious but stable
- `no-precision-required` - Do not require pixel-perfect clicking on small targets

### 3. Performance

- `image-optimization` - Prefer responsive images and modern formats where possible
- `image-dimension` - Reserve image space to reduce layout shift
- `font-loading` - Use sane font loading strategies to avoid invisible text
- `lazy-loading` - Defer below-the-fold media and heavy sections
- `route-splitting` - Split by route or feature when bundles grow
- `third-party-scripts` - Audit external scripts and defer non-critical ones
- `reduce-reflows` - Avoid repeated layout reads and writes
- `content-jumping` - Keep CLS low by reserving space for async content
- `debounce-throttle` - Use on scroll, resize, and frequent input handlers

### 4. Style Selection

- `style-match` - Match the visual direction to the product type and audience
- `consistency` - One page can have contrast; it should not feel like multiple unrelated brands
- `no-emoji-icons` - Use SVG icons such as Lucide or Simple Icons
- `color-palette-from-product` - Choose palette from product category, not personal preference alone
- `effects-match-style` - Blur, radius, shadow, and border treatment should belong to the same system
- `icon-style-consistent` - Keep stroke weight and icon family consistent
- `dark-mode-pairing` - If adding dark mode, design it intentionally rather than inverting colors
- `primary-action` - Each section should make the primary action obvious

### 5. Layout and Responsive

- `viewport-meta` - Keep standard viewport behavior; never disable zoom
- `mobile-first` - Make the small-screen layout work before scaling up
- `breakpoint-consistency` - Use systematic breakpoints instead of ad hoc values
- `readable-font-size` - Keep mobile body text around 16px minimum
- `line-length-control` - Limit long-form text width for readability
- `horizontal-scroll` - No unwanted horizontal scroll on mobile
- `spacing-scale` - Use a consistent spacing rhythm
- `container-width` - Keep desktop max-widths consistent across sections
- `z-index-management` - Use a small, intentional layering scale
- `fixed-element-offset` - Fixed navbars and sticky bars must not cover content
- `viewport-units` - Prefer `dvh`-aware sizing where mobile viewport chrome matters

### 6. Typography and Color

- `line-height` - Body text usually works best around 1.5-1.75
- `font-scale` - Use a consistent type scale instead of arbitrary jumps
- `font-pairing` - Heading and body fonts should support the same brand personality
- `weight-hierarchy` - Use weight and spacing to reinforce hierarchy
- `color-semantic` - Prefer semantic color roles over hardcoded one-off colors
- `color-accessible-pairs` - Check foreground/background contrast deliberately
- `color-dark-mode` - Dark themes need their own contrast tuning
- `tabular-numbers` - Use tabular figures for prices, stats, timers, and tables
- `whitespace-balance` - Use spacing to group related content and calm dense layouts

### 7. Animation

- `duration-timing` - Keep micro-interactions around 150-300ms
- `transform-performance` - Animate transform and opacity, not layout properties
- `motion-meaning` - Motion should clarify hierarchy or state change
- `state-transition` - Hover, active, expand, collapse, modal open, and route changes should feel continuous
- `continuity` - Related elements should move in a way that preserves spatial logic
- `stagger-sequence` - Small stagger is fine; do not over-animate every element
- `interruptible` - User input should not feel blocked by animation
- `layout-shift-avoid` - Motion must not cause CLS or jumpy layout

### 8. Forms and Feedback

- `input-labels` - Use visible labels
- `input-helper-text` - Add helper text when the field meaning is not obvious
- `inline-validation` - Validate after blur or submit, not on every keystroke by default
- `error-placement` - Put errors where users can act on them immediately
- `focus-management` - Focus the first invalid field after submit
- `submit-feedback` - Show loading, success, and error outcomes clearly
- `confirmation-dialogs` - Confirm destructive actions
- `empty-states` - Empty states should explain what happened and what to do next
- `toast-accessibility` - Toasts should not steal focus and should remain understandable

### 9. Navigation Patterns

- `top-level-nav-limit` - Keep main navigation concise, usually 3-5 top-level items
- `current-page-indicator` - Current page state should be visible beyond color alone when possible
- `cta-hierarchy` - One primary CTA, everything else visually subordinate
- `sticky-header-offset` - Account for fixed header height in hero and in-page anchor behavior
- `mobile-menu-simplicity` - Mobile menus should reduce options, not multiply them
- `footer-secondary-nav` - Put secondary or legal links in the footer instead of the header
- `information-scent` - Labels should be obvious, not clever

### 10. Charts and Data

- `chart-type` - Match chart type to task: trend, comparison, distribution, part-to-whole
- `accessible-colors` - Use distinguishable series colors with sufficient contrast
- `labels-and-legends` - Use clear legends, labels, and units
- `not-color-only` - Use patterns, labels, or icons when color alone is ambiguous
- `loading-empty-error` - Charts need loading, empty, and error states
- `tooltips-values` - Tooltips should reveal exact values, not vague summaries
- `screen-reader-summary` - Provide a text summary when charts communicate important information

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

If Python is not installed, install it based on the user's OS.

macOS:

```bash
brew install python3
```

Ubuntu or Debian:

```bash
sudo apt update && sudo apt install python3
```

Windows:

```powershell
winget install Python.Python.3.12
```

## How to Use This Skill

When the user requests UI/UX work such as design, build, create, implement, review, fix, improve, optimize, or simplify, follow this workflow.

### Step 1: Analyze User Requirements

Extract:

- Product type: SaaS, agency, portfolio, dashboard, landing page, e-commerce, education, healthcare, etc.
- Style keywords: minimal, premium, playful, editorial, professional, soft, bold, dark, glass, brutalist, etc.
- Industry context: finance, wellness, real estate, hospitality, creative, developer tools, etc.
- Page type: hero page, portfolio listing, pricing page, contact page, dashboard, settings, checkout, etc.
- Stack: for this repo, default to `html-tailwind` plus `react`

### Step 2: Generate the Design System First

Always begin with `--design-system` so the output includes pattern, style, colors, typography, effects, and anti-patterns.

From this repository root, run:

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "Project Name"
```

Example:

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "premium creative web studio elegant minimal" --design-system -p "LC Studio"
```

This command:

1. Searches product, style, color, landing, and typography data
2. Uses `ui-reasoning.csv` to rank better matches
3. Produces a coherent design system instead of isolated suggestions
4. Returns anti-patterns to avoid for the chosen direction

### Step 2b: Persist the Design System

If you want reusable project documentation, add `--persist`.

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

This creates:

- `design-system/MASTER.md` as the project-wide source of truth
- `design-system/pages/` for page-level overrides

With a page override:

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "home"
```

Use hierarchy like this:

1. Check `design-system/pages/<page>.md` first when building a specific page
2. If the page file exists, it overrides the master where noted
3. If not, use `design-system/MASTER.md`

### Step 3: Use Focused Domain Searches as Needed

After the design system, deepen only the areas you still need help with.

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> -n <max_results>
```

Common follow-up searches:

| Need | Domain | Example |
|------|--------|---------|
| Product direction | `product` | `--domain product "creative agency service"` |
| Visual style options | `style` | `--domain style "editorial minimal premium"` |
| Color palettes | `color` | `--domain color "wellness luxury"` |
| Font options | `typography` | `--domain typography "elegant serif modern sans"` |
| Landing structure | `landing` | `--domain landing "hero social-proof cta"` |
| UX checks | `ux` | `--domain ux "animation accessibility navbar"` |
| Icon guidance | `icons` | `--domain icons "branding agency navigation"` |
| React performance | `react` | `--domain react "rerender suspense bundle"` |
| Web interface rules | `web` | `--domain web "aria focus keyboard form"` |
| Chart direction | `chart` | `--domain chart "comparison dashboard"` |

### Step 4: Search the Right Stack Guidance

For this repository:

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "layout responsive spacing navbar" --stack html-tailwind
python .codex/skills/ui-ux-pro-max/scripts/search.py "state interaction render performance" --stack react
```

When working inside shadcn-style primitives:

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "form dialog tabs button" --stack shadcn
```

## Search Reference

### Available Domains

These are the domains supported by the local scripts in this repository.

| Domain | Use For | Example Keywords |
|--------|---------|------------------|
| `product` | Product type and style direction | SaaS, portfolio, beauty, service, fintech, dashboard |
| `style` | UI styles, effects, and implementation cues | minimalism, glassmorphism, editorial, brutalism |
| `color` | Color palettes by product type | healthcare, luxury, creative, startup, service |
| `typography` | Font pairings and imports | elegant, modern, playful, editorial |
| `landing` | Section order, CTA placement, conversion patterns | hero, testimonials, pricing, social proof |
| `chart` | Chart types and data-viz recommendations | trend, comparison, funnel, timeline |
| `ux` | Best practices and anti-patterns | animation, loading, accessibility, touch |
| `icons` | Icon recommendation and usage guidance | lucide, navigation, commerce, dashboard |
| `react` | React and Next-style performance guidance | rerender, suspense, dynamic import, cache |
| `web` | Web interface and accessibility guidance | aria, focus, semantic, forms, keyboard |

### Available Stacks

These stacks are supported by the local search engine:

- `html-tailwind`
- `react`
- `nextjs`
- `astro`
- `vue`
- `nuxtjs`
- `nuxt-ui`
- `svelte`
- `swiftui`
- `react-native`
- `flutter`
- `shadcn`
- `jetpack-compose`

For this project, prefer:

- `html-tailwind`
- `react`
- `shadcn`

## Example Workflow

User request: "Make the landing page feel more premium and less cluttered."

### Step 1: Analyze

- Product type: Creative service / web studio
- Page type: Marketing landing page
- Style keywords: premium, minimal, modern, visual-first
- Stack: `html-tailwind` and `react`

### Step 2: Generate a Design System

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "creative web studio premium minimal visual-first" --design-system -p "LC Studio"
```

### Step 3: Deepen Specific Areas

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "navbar clarity active state cta hierarchy" --domain ux
python .codex/skills/ui-ux-pro-max/scripts/search.py "premium minimal editorial" --domain style
python .codex/skills/ui-ux-pro-max/scripts/search.py "elegant modern agency" --domain typography
```

### Step 4: Pull Implementation Guidance

```bash
python .codex/skills/ui-ux-pro-max/scripts/search.py "navbar spacing sticky header responsive" --stack html-tailwind
python .codex/skills/ui-ux-pro-max/scripts/search.py "navigation state component interaction" --stack react
```

Then synthesize:

- Design system output for overall direction
- Focused domain results for visual and UX decisions
- Stack guidance for implementation details

## Tips for Better Results

### Query Strategy

- Use multi-dimensional queries: product + audience + tone + page type
- Start broad with `--design-system`, then narrow with domain searches
- Use `html-tailwind` for layout questions and `react` for interaction questions
- Search `ux` before shipping if the problem feels visual but is actually structural

### Good Query Examples

- `creative agency premium minimal landing page`
- `healthcare dashboard trustworthy accessible clean`
- `navbar clutter hierarchy sticky header mobile menu`
- `pricing card conversion clarity`
- `portfolio editorial typography`

### Common Problems and What to Search

| Problem | Search |
|---------|--------|
| Navbar feels busy | `--domain ux "navbar clutter hierarchy cta"` |
| Layout looks generic | `--domain style "editorial premium minimal"` |
| Colors feel random | `--domain color "<industry> <mood>"` |
| Fonts do not match brand | `--domain typography "<tone> <industry>"` |
| Hero section lacks conversion focus | `--domain landing "hero cta social-proof"` |
| Page feels janky | `--domain react "rerender layout shift"` |
| Accessibility is weak | `--domain web "aria focus keyboard"` and `--domain ux "accessibility contrast"` |

## Common Rules for Professional Web UI

### Icons and Visual Language

| Rule | Do | Do Not |
|------|----|--------|
| Icon source | Use one SVG icon family consistently | Mix emoji, raster icons, and multiple icon families |
| Hover states | Change color, opacity, border, or shadow without shifting layout | Scale elements in a way that moves surrounding content |
| Brand assets | Use official or internally approved brand marks | Guess logos or recolor them arbitrarily |
| Icon sizing | Keep icon sizes on a deliberate scale | Use random icon sizes card by card |

### Interaction and Feedback

| Rule | Do | Do Not |
|------|----|--------|
| Cursor | Use `cursor-pointer` on clearly clickable elements | Leave interactive cards looking static |
| State feedback | Provide hover, active, and focus states | Make actions clickable with no visible feedback |
| Timing | Keep transitions smooth and brief | Use instant changes or slow UI transitions |
| Buttons | Let only one CTA dominate each section | Give every action the same visual weight |

### Light Mode Contrast

| Rule | Do | Do Not |
|------|----|--------|
| Body text | Use strong readable contrast such as slate-900 to slate-700 on light surfaces | Use low-contrast gray-on-gray text |
| Glass surfaces | Keep enough opacity to separate surface from background | Make glass cards so transparent they lose hierarchy |
| Borders | Use visible light-mode borders where needed | Use near-invisible borders on white |
| Accent colors | Use accent colors with intention and restraint | Turn every highlighted thing into a bright accent |

### Layout and Spacing

| Rule | Do | Do Not |
|------|----|--------|
| Fixed navbar | Leave breathing room from viewport edges and offset page content correctly | Stick a busy navbar hard to the top with no compensation |
| Container width | Reuse a consistent max-width system | Mix unrelated container widths section by section |
| Section rhythm | Keep vertical spacing proportional to hierarchy | Let every section invent its own spacing rules |
| Mobile layout | Collapse complexity, not clarity | Hide important actions or create horizontal scroll |

## Pre-Delivery Checklist

Before delivering web UI code, verify:

### Visual Quality

- [ ] One coherent visual direction is visible across the page
- [ ] Icons come from a consistent SVG icon family
- [ ] Hover and active states do not shift layout
- [ ] The page has a clear primary CTA and a visible hierarchy

### Interaction

- [ ] All clickable elements communicate interactivity
- [ ] Hover, active, and focus states are all present
- [ ] Async actions show loading or disabled states
- [ ] Mobile interactions do not rely on hover

### Accessibility

- [ ] Text contrast is acceptable in the tested theme
- [ ] Focus states are visible
- [ ] Images have appropriate alt text
- [ ] Forms have labels and actionable error feedback
- [ ] Reduced motion is respected for non-essential animation

### Layout

- [ ] No content hides behind fixed navbars or sticky bars
- [ ] No horizontal scroll appears on mobile
- [ ] The page works at 375px, 768px, 1024px, and 1440px
- [ ] Long text stays readable and containers remain consistent

### Performance

- [ ] Heavy images are optimized or deferred
- [ ] Layout shift is controlled for async content and media
- [ ] Large interaction surfaces stay responsive
- [ ] Extra scripts and effects are justified by product value
