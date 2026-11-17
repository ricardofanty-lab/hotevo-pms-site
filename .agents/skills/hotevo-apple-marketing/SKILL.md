---
name: hotevo-apple-marketing
description: Apply the Hotevo project's Apple Storekit-inspired visual system whenever creating or changing its marketing pages, interface components, styles, or visual assets. Use to keep future UI work consistent with the supplied design parameters.
---

# Hotevo marketing visual system

Use this skill for all user-facing UI and visual changes in this project. The goal is a polished, premium hospitality PMS marketing experience built from clear product messaging, generous whitespace, restrained color, and precise typography. The supplied parameters describe an Apple Storekit-inspired visual language; they do not authorize representing Hotevo as Apple or copying Apple's logo, product imagery, or proprietary assets.

## Design principles

- Treat white space as a primary layout element. Keep sections calm, focused, and spacious; avoid dense enterprise layouts and card-heavy grids.
- Lead with the product and its value. Use a clear headline, concise supporting copy, then one obvious primary action and, when useful, a simple text-link secondary action.
- Prefer a white canvas, near-black text, subtle hairlines, and alabaster (`#f5f5f7`) surfaces. Use saturated color sparingly, primarily for actions and links.
- Keep compositions responsive and product-focused. Center the key hierarchy on mobile and scale display text down proportionally without making the page cramped.
- Use restrained transitions and interaction states. Avoid decorative gradients, excessive shadows, ornamental UI, and unnecessary motion.
- Keep accessibility: semantic HTML, keyboard-operable controls, visible focus, sufficient contrast, descriptive labels, and reduced-motion support.

## Design tokens

Define or reuse CSS custom properties with the `--sk-` prefix. Do not create competing token systems for the same values.

```css
:root {
  --sk-color-primary: #0071e3;
  --sk-color-primary-hover: #0077ed;
  --sk-color-primary-active: #006edb;
  --sk-color-link: #0066cc;
  --sk-color-text: #1d1d1f;
  --sk-color-muted: #6e6e73;
  --sk-color-neutral: #86868b;
  --sk-color-surface: #ffffff;
  --sk-color-card: #f5f5f7;
  --sk-color-border: #d2d2d7;
  --sk-color-error: #b64400;
  --sk-color-success: #0066cc;
  --sk-color-accent-orange: #ff791b;
  --sk-color-accent-orange-deep: #b64400;
  --sk-color-neutral-light: #d2d2d7;
  --sk-color-neutral-dark: #424245;
  --sk-color-focus: #0071e3;
  --sk-font-display: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --sk-font-text: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --sk-font-mono: "SF Mono", Menlo, Monaco, Consolas, monospace;
  --sk-radius-sm: 4px;
  --sk-radius-input: 12px;
  --sk-radius-card: 18px;
  --sk-radius-pill: 9999px;
  --sk-space-xs: 4px;
  --sk-space-sm: 9px;
  --sk-space-md: 16px;
  --sk-space-lg: 22px;
  --sk-space-xl: 31px;
}
```

Do not load or claim to provide SF Pro font files unless they are included and licensed in the project. Use the stated system stack with its fallbacks.

## Typography

Use SF Pro Display stack for display headings and SF Pro Text stack for body/UI text. Preserve the supplied tracking values where applicable.

| Style | Size | Weight | Line height | Letter spacing |
|---|---:|---:|---:|---:|
| h1 | 48px | 600 | 1.0834933333 | -0.003em |
| h2 | 40px | 600 | 1.1 | 0em |
| h3 | 32px | 600 | 1.125 | 0.004em |
| h4 | 24px | 600 | 1.1666666667 | 0.009em |
| body-lg | 17px | 400 | 1.1764805882 | -0.022em |
| body-md | 14px | 400 | 1.4285914286 | -0.016em |
| body-sm / label | 12px | 400 | 1.3333733333 | -0.01em |
| mono | 14px | 400 | 1.4285914286 | 0em |

Use the display stack at 24px and above, and the text stack below that. On narrow screens reduce oversized headings using fluid sizing or breakpoints while retaining the same family, weight, and tracking character. Avoid substituting generic Inter or resetting tracking to normal without a concrete compatibility reason.

## Actions and controls

- Primary action: blue fill `#0071e3`, white text, no contrasting border, pill radius `9999px`. Hover `#0077ed`, active `#006edb`.
- Default primary padding: 9px vertical / 16px horizontal. Reduced: 4px / 11px; elevated: 12px / 22px; hero: 18px / 31px. Keep the pill radius for all sizes.
- Secondary action: link-style `#0066cc`, without a filled or outlined button treatment. A small chevron may be used where it improves clarity.
- Do not introduce outlined, ghost, or third button variants. Do not use decorative borders around CTAs.
- Focus state: clear ring based on `#0071e3`, with visible offset; preserve keyboard usability.
- Inputs: body text around 17px, white surface, 12px radius, subtle `#d2d2d7` boundary, and a clear blue focus ring.

## Surfaces, badges, and color usage

- Cards may use `#f5f5f7`, 18px radius, and no border; use sparingly and prefer open layouts where cards are unnecessary.
- Use `#d2d2d7` for subtle dividers and hairlines.
- Reserve orange (`#ff791b` on dark surfaces, `#b64400` on light surfaces) for a small emphasis badge such as “Novo”. Do not use it as a general accent or for routine body copy.
- The supplied system assigns positive affordances the link blue `#0066cc`; do not add green without an explicit product requirement.
- For dark sections, use them only when the existing page or a specific request calls for them. Keep text contrast high; the primary CTA remains blue.

## Layout and responsive behavior

- Use a responsive 12-column layout or the project's established equivalent, with generous outer gutters and steady gaps between adjacent items.
- Keep clear vertical rhythm; do not force every section into equal-sized cards. Use full-width product moments and restrained supporting panels.
- Prioritize wide, calm compositions on desktop. On mobile, stack content cleanly, preserve centered product hierarchy and paired CTAs when appropriate, and make controls easy to tap.
- Keep navigation and footer visually quiet, with smaller muted text and minimal borders. Ensure sticky/scrolled navigation remains legible and does not obscure anchored content.

## Implementation rules

- Preserve the existing framework, component conventions, and accessible behavior. Translate these tokens into the project's existing CSS approach rather than introducing a new UI framework.
- Reuse tokens and shared components; do not hard-code a slightly different version of a color, radius, or button style in each new component.
- When updating a library-based button system, ensure it resolves to the primary/link treatments above; do not let default framework styles introduce outlined or extra variants.
- Prefer inline SVG or existing project icons for simple UI glyphs. Do not add proprietary Apple icon fonts or assets.
- For imagery, use real product/hospitality assets already available in the project. When no suitable imagery exists, keep the section clean and sparse instead of inventing decorative illustrations.
- Do not alter unrelated branding, copy, layout, or business logic during a narrowly scoped fix. A direct, specific user instruction that requests a visual exception applies to that requested scope.

## Before finishing a UI change

1. Check the changed screen/component against this skill's tokens and principles.
2. Check responsive behavior at the relevant narrow and wide layouts if the environment supports it.
3. Check keyboard focus, semantics, labels, and reduced-motion behavior for changed interactions.
4. Mention any intentional exception to this system in the change summary and why it was needed.
