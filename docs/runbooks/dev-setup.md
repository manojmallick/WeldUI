# Runbook: New Developer Setup

> Run this checklist on a fresh clone of the WeldUI repository.
> Some AI workflow files are intentionally gitignored — this guide explains how to seed them.

---

## Prerequisites

Install the required tools before starting:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 20 | [nodejs.org](https://nodejs.org) or `brew install node` |
| pnpm | ≥ 9 | `npm install -g pnpm` |
| tsx | bundled | included via root `devDependencies` |

---

## 1. Clone and Install

```bash
git clone https://github.com/manojmallick/WeldUI.git
cd WeldUI
pnpm install           # installs all workspace packages
pnpm build             # builds @weldui/core and all packages
pnpm test              # runs all 230 unit tests — should all pass
```

---

## 2. Verify the Build

```bash
# Core package
pnpm --filter @weldui/core build
pnpm --filter @weldui/core test

# Storybook docs
pnpm storybook         # opens http://localhost:6006

# Playground (live theming sandbox)
pnpm --filter playground dev
```

---

## 3. Gitignored AI Files — Seed Locally

The following files are **intentionally not committed** (see `.gitignore` policy in CLAUDE.md):

### 3a. `.claude/settings.json`

Create this file to configure Claude Code for the project:

```bash
mkdir -p .claude
```

```json
// .claude/settings.json
{
  "model": "claude-opus-4-5",
  "contextFiles": ["CLAUDE.md"],
  "permissions": {
    "allowNetworkAccess": false,
    "allowSecretFiles": false
  },
  "qualityGates": {
    "minTestCoverage": 80,
    "maxBundleSizeKb": 50,
    "minLighthouseScore": 95
  }
}
```

### 3b. `.claude/skills/` SKILL.md Files

These AI workflow files describe how to handle common tasks. Ask the project owner (Manoj Mallick) for the current versions, or create them fresh using the templates below:

```bash
mkdir -p .claude/skills/new-component
mkdir -p .claude/skills/new-theme
mkdir -p .claude/skills/code-review
mkdir -p .claude/skills/refactor
mkdir -p .claude/skills/release
```

**Minimal `new-component/SKILL.md`:**
```markdown
# New Component Skill

When asked to create a new WeldUI component:
1. Run: pnpm scaffold:component <name>
2. Fill in the generated files following CLAUDE.md component standard
3. Use only CSS custom property tokens — never hardcode values
4. Write min 5 tests: render, event, disabled, size, accessibility
5. Add Storybook stories: Default, AllVariants, Sizes
6. Export from packages/core/src/index.ts
7. Add framework wrappers: React, Vue, Angular, Svelte
8. Update completion.md
```

**Minimal `new-theme/SKILL.md`:**
```markdown
# New Theme Skill

When asked to create a new WeldUI theme:
1. Run: pnpm scaffold:theme <name> <hex-colour>
2. Run: pnpm contrast-check packages/themes/<name>/light.css
3. Fix any WCAG AA failures (need ≥ 4.5:1 for normal text)
4. Add to Storybook toolbar in apps/docs/.storybook/preview.ts
5. Publish: pnpm --filter @weldui/theme-<name> publish
```

**Minimal `code-review/SKILL.md`:**
```markdown
# Code Review Skill

When reviewing WeldUI PRs:
1. Check: no hardcoded hex colours — all values use --wu-* tokens
2. Check: component has JSDoc with @element, @slot, @event, @cssprop
3. Check: tests cover render + event + disabled + accessibility
4. Check: Storybook story renders in all 5 themes (use theme switcher)
5. Check: pnpm build and pnpm test both pass with zero errors
6. Check: new exports added to packages/core/src/index.ts
```

### 3c. Module-level `CLAUDE.md` Files (Optional)

These provide local context for sub-modules. See `mnt/user-data/outputs/` for templates.

```bash
# API integrations module
cp mnt/user-data/outputs/src/api/CLAUDE.md src/api/CLAUDE.md

# Persistence module
cp mnt/user-data/outputs/src/persistence/CLAUDE.md src/persistence/CLAUDE.md
```

> Edit each file to reflect your local environment (API keys, database URLs, etc.).
> These files are gitignored — never commit them.

---

## 4. Environment Variables

Create `.env` at the workspace root (gitignored):

```bash
cp .env.example .env   # if it exists, or create manually
```

```bash
# .env (gitignored)

# npm publishing
NPM_TOKEN=

# Lemon Squeezy marketplace
LEMON_SQUEEZY_API_KEY=
LEMON_SQUEEZY_STORE_ID=
LEMON_SQUEEZY_WEBHOOK_SECRET=

# GitHub (for release automation)
GITHUB_TOKEN=

# Slack (for post-release notifications)
SLACK_WEBHOOK_URL=
```

Ask Manoj Mallick for values to `NPM_TOKEN` and Lemon Squeezy credentials.

---

## 5. Useful Commands

```bash
# Scaffolding
pnpm scaffold:component <name>          # Create a new component (4 files)
pnpm scaffold:theme <name> <hex>        # Create a new theme package

# Validation
pnpm contrast-check packages/themes/    # Check all theme WCAG contrast
pnpm --filter @weldui/core test         # Run just the core tests
pnpm lint                               # Lint the entire monorepo

# MCP server (for AI tools)
pnpm --filter @weldui/mcp-server build
node tools/mcp-server/dist/index.js     # Start MCP server locally
```

---

## 6. Storybook Theme Switcher

After running `pnpm storybook`, use the **paintbrush** icon in the Storybook toolbar to switch between all 11 built-in themes (light, dark, ocean, forest, midnight, sunset, fintech, healthcare, government, startup, editorial, high-contrast).

---

## 7. First PR Checklist

Before opening your first PR:

- [ ] `pnpm build` passes with zero TypeScript errors
- [ ] `pnpm test` passes all 230 tests
- [ ] New component (if any) has ≥ 5 unit tests including accessibility
- [ ] No hardcoded hex colours in component styles (use `--wu-` tokens)
- [ ] Storybook stories added for all variants
- [ ] `packages/core/src/index.ts` updated with new exports
- [ ] `completion.md` updated if a phase item was completed

---

## 8. Monorepo Architecture Quick Reference

```
packages/core/          @weldui/core      — Web Components (Lit 3)
packages/react/         @weldui/react     — React wrappers (36 components)
packages/vue/           @weldui/vue       — Vue 3 wrappers (36 components)
packages/angular/       @weldui/angular   — Angular directives (36 components)
packages/svelte/        @weldui/svelte    — Svelte 5 wrappers (43 components)
packages/themes/        @weldui/theme-*   — CSS theme packages
packages/compliance/    @weldui/compliance — GDPR/DORA/SOX components
packages/tokens-tailwind/ @weldui/tokens-tailwind — Tailwind preset
tools/mcp-server/       @weldui/mcp-server — AI coding assistant tools
apps/docs/              Storybook docs site
apps/playground/        Live theme sandbox
```

Full architecture details: [docs/architecture.md](../architecture.md)  
Decision records: [docs/decisions/](../decisions/)  
Master implementation guide: [CLAUDE.md](../../CLAUDE.md)
