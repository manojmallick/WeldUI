# ADR 002: CSS Custom Properties as the Sole Theming Mechanism

**Date:** 2026-03-10  
**Status:** Accepted  
**Deciders:** Manoj Mallick (LearnHubPlay BV)

---

## Context

WeldUI needs a theming system that works across frameworks, in Shadow DOM, and requires zero JavaScript to switch themes.

## Decision

All visual properties are defined exclusively via **CSS Custom Properties (CSS Variables)**. JavaScript is never used to apply or calculate theme values.

## Rationale

- CSS custom properties are inherited by Shadow DOM children — the only CSS mechanism that pierces Shadow DOM boundaries
- Switching themes requires only toggling a `data-theme` attribute — zero JavaScript runtime cost
- Theme files are pure CSS — designers can author them without knowing TypeScript or Lit
- Works in SSR contexts where JavaScript may not have run yet
- Browser-native performance — single CSS cascade pass, not JS computation

## Consequences

- Theme authors must learn the `--wu-` token naming system
- Complex dynamic theming (user-generated palettes) requires client-side CSS variable injection — acceptable
- IE11 is not supported (CSS custom properties not supported) — acceptable, IE11 EOL 2022

---

# ADR 003: Open Core License Model (MIT Core + Commercial)

**Date:** 2026-03-10  
**Status:** Accepted  
**Deciders:** Manoj Mallick (LearnHubPlay BV)

---

## Context

WeldUI needs a sustainable business model that doesn't alienate the OSS community while generating revenue to fund development.

## Decision

- `@weldui/core` and all framework wrappers: **MIT License**
- `@weldui/compliance`: **Commercial License** (BSL 1.1 or proprietary)
- Premium themes (`@weldui/theme-*` paid): **Commercial License**
- Enterprise support SLA: **Contract**

## Rationale

The OSS core drives adoption and trust. Enterprises who need compliance features, premium themes, or guaranteed support pay for the commercial layer. This is the proven model of HashiCorp, Elastic, and GitLab.

MIT was chosen over AGPL because:
- AGPL creates friction for enterprises (requires disclosing modifications)
- MIT adoption is higher — lowers the barrier for the OSS community
- Revenue comes from services and add-ons, not the component code itself

## Consequences

- Core components must never include features that "should" be paid
- The compliance pack must be a genuinely separate package (not a flag in core)
- Legal review needed before enterprise contracts exceed €50K
- LearnHubPlay BV must maintain contributor license agreements (CLA) for external PRs
