# Project

Personal UX portfolio for a UW Informatics + Psychology senior applying to UX/product
design roles. Primary audience: recruiters and hiring managers scanning for 30-60 seconds.
Case studies are the point; the illustrated bookshelf is personality.

# Stack

- Astro + Tailwind, static output, deployed on Vercel
- No client-side framework unless a component genuinely needs state
- No 3D libraries, no animation libraries -- CSS transforms only

# Hard rules

- `books.json` is the single source of truth for book data. Never hardcode a book title
  in a component.
- The bookshelf is one exported illustration (WebP) with an invisible SVG overlay for hit
  areas. Book titles are SVG `<text>`, not HTML overlays, sharing a transform group with
  their hit shape.
- Everything interactive must be keyboard reachable with a visible focus state. Hover
  behavior must also fire on focus.
- Respect `prefers-reduced-motion`.
- Mobile gets a different bookshelf treatment, not a scaled-down one. Tap targets 44px
  minimum.
- Ask before adding any dependency.

# Book schema

```json
{
  "id": "design-of-everyday-things",
  "title": "The Design of Everyday Things",
  "author": "Don Norman",
  "status": "read",
  "finished": "2026-03",
  "note": "One line, optional.",
  "slot": "book-07"
}
```

`slot` maps to a hit-shape id in the shelf SVG.

# Design direction

Minimalist, majority white, one restrained accent. The illustration is the only
decorative element on the page -- everything else stays quiet. No gradients, no
drop shadows except the floating panel, no decorative borders.

## Type

- Display: Fraunces (variable). Use `wght 400-600`, `SOFT 0`, `WONK 0` for restraint.
  Headings and the site wordmark only.
- Body + UI: Instrument Sans (variable). All body copy, labels, and SVG spine text.
- Both from Google Fonts. Self-host via `@fontsource-variable` -- do not load from
  fonts.googleapis.com.
- Body copy minimum 16px. SVG spine text minimum 13px at desktop scale.

## Palette

```css
--bg: #fdfcfa; /* warm white, page background */
--surface: #ffffff; /* floating panel, cards */
--ink: #1a1a18; /* primary text -- 16.4:1 on --bg */
--ink-muted: #57544d; /* secondary text -- 7.2:1 on --bg */
--line: #e3dfd7; /* hairline dividers only, never text on this */
--accent: #14544a; /* links, focus rings, active states -- 8.2:1 on --bg */
--accent-soft: #e8f0ed; /* hover fills, status pill background */
```

Do not introduce additional colors. If something needs emphasis, use weight or
space, not hue.

## Accessibility rules

- All text meets WCAG AA (4.5:1 body, 3:1 large). The palette above is pre-checked --
  do not darken the background or lighten `--ink-muted`.
- Focus ring: 3px solid `--accent`, 2px offset, on every interactive element. Never
  remove the outline without replacing it.
- Never signal state with color alone. Hover and focus must also change shape, stroke,
  or opacity.
- Respect `prefers-reduced-motion`: no fades, no transforms, state changes instantly.

# Bookshelf interaction

On hover or keyboard focus of a book or case-study graphic:

1. The graphic itself gets a hover effect -- a white scrim at 12% over the spine plus a
   1.5px `--accent` stroke on its hit shape. Both, not one.
2. A floating panel appears above the book, anchored to the top center of its hit shape.

Floating panel spec:

- `--surface` background, 1px `--line` border, 10px radius, 14px padding, one soft
  shadow (`0 4px 16px rgba(26,26,24,0.10)`).
- Books: title (Instrument Sans 15px `--ink`), author (13px `--ink-muted`), status pill
  reading "Read" or "Reading" on `--accent-soft`.
- Case studies: project name, role, and a "View case study" affordance.
- Flip or shift horizontally when within 16px of the viewport edge. Never let it clip.
- 80ms delay in, 150ms delay out, so moving across spines does not flicker.
- Dismiss on Escape and on blur.
- Do not use the `title` attribute for this.

Accessibility of the panel: the hit shape is a link whose accessible name is
"{title} by {author}". The panel is `aria-hidden="true"` -- it is a visual duplicate,
and announcing it twice is worse than not announcing it.

Touch: no hover state exists. On small screens the shelf becomes the list treatment
described above, so the floating panel is desktop-only.

# Working agreement

- Propose an approach before writing code on anything nontrivial.
- One feature per session. Stop and let me review before moving on.
- Explain any file I'd struggle to read on my own.
- Commit after each working feature with a descriptive message.
