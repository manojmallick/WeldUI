# ADR 001: Use Lit Over Stencil.js for Web Components

**Date:** 2026-03-10  
**Status:** Accepted  
**Deciders:** Manoj Mallick (LearnHubPlay BV)

---

## Context

WeldUI needs a Web Components authoring framework. The two primary candidates were **Lit** (by Google) and **Stencil.js** (by Ionic).

## Decision

We chose **Lit 3.x**.

## Rationale

| Criterion | Lit | Stencil |
|-----------|-----|---------|
| Bundle size | ~5KB | ~15KB base |
| TypeScript | Native, decorators | Native, decorators |
| Framework output targets | No (Web Components only) | Yes (React, Angular, Vue) |
| Shadow DOM | Yes | Yes |
| SSR support | `@lit-labs/ssr` | Built-in |
| Google backing | Yes | Ionic |
| Used by | Google, Adobe Spectrum, Microsoft FAST | Ionic Framework |
| Learning curve | Low | Medium |

**Key deciding factor:** Stencil's framework output targets (auto-generating React/Angular wrappers) were appealing. However, we decided to write our own lightweight wrapper generator, which gives us more control over the generated API. This removed Stencil's primary advantage.

Lit's smaller footprint and simpler mental model make it easier for contributors.

## Consequences

- We maintain our own framework wrapper generator (`packages/react/scripts/generate-wrappers.ts`)
- SSR requires `@lit-labs/ssr` — acceptable complexity for v2
- No built-in Angular/React output — must maintain wrapper packages
