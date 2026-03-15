# Runbook: Publish a Premium Theme

## Trigger
A new premium theme is ready for marketplace release.

## Steps

1. **Verify theme package is complete**
   ```bash
   ls packages/themes/[name]/
   # Must contain: light.css, dark.css, index.css, preview.html, README.md, package.json
   ```

2. **Run contrast validation**
   ```bash
   pnpm --filter @weldui/build-tools contrast-check packages/themes/[name]/
   # All combinations must pass WCAG AA (4.5:1)
   ```

3. **Take marketplace screenshots**
   - Open `preview.html` in browser at 1440×900
   - Screenshot: components overview (all buttons, inputs, badges)
   - Screenshot: dark mode variant
   - Screenshot: form example
   - Save as `[name]-preview-light.png`, `[name]-preview-dark.png`

4. **Publish to private npm registry**
   ```bash
   pnpm --filter @weldui/theme-[name] publish --access restricted
   ```

5. **Create Lemon Squeezy product**
   - Log in to Lemon Squeezy dashboard
   - New Product → Digital Product
   - Name: "WeldUI [Display Name] Theme"
   - Price: €49 (starter) or €99 (pro)
   - Files: Upload screenshots
   - Delivery: npm token via webhook (configure webhook URL)

6. **Add to Storybook toolbar**
   - Edit `apps/docs/.storybook/preview.ts`
   - Add theme to toolbar items list
   - Deploy Storybook

7. **Update marketplace listing page**
   - Add card to `/apps/docs/stories/Themes.mdx`

---

# Runbook: Enterprise Client Onboarding

## Trigger
Enterprise contract signed. Client needs WeldUI access.

## Steps

1. **Collect client information**
   - Company name + legal entity
   - Primary technical contact (email + GitHub username)
   - Package scope needed: `@weldui/core`, `@weldui/compliance`, themes
   - Expected team size
   - Framework(s) in use

2. **Generate npm access token**
   ```bash
   npm token create --read-only --cidr=0.0.0.0/0
   # Record in 1Password under "Enterprise Clients"
   ```

3. **Create private Slack channel**
   - Name: `weldui-[company-slug]-support`
   - Invite: client technical contact + WeldUI support lead

4. **Send onboarding package** (email template in `tools/prompts/enterprise-onboarding-email.md`)
   - npm token
   - Slack invite
   - Private Storybook URL
   - Support SLA document
   - Scheduled onboarding call invite

5. **Create client record in CRM**
   - Company, contact, contract value, renewal date, tier

6. **Schedule 30-day check-in**

---

# Runbook: Publishing `@weldui/charts`

## Trigger
A new chart component is ready or a bugfix to the charts package.

## Steps

1. **Build and verify**
   ```bash
   pnpm --filter @weldui/charts build
   pnpm --filter @weldui/charts test
   ```

2. **Check bundle size** — must stay under 40 KB gzip
   ```bash
   ls -lh packages/charts/dist/index.js
   ```

3. **Bump version** using changesets
   ```bash
   pnpm changeset
   # Select: @weldui/charts — patch / minor / major
   ```

4. **Publish**
   ```bash
   pnpm --filter @weldui/charts publish --access public
   ```

5. **Update MCP manifest** if new components were added
   - Edit `tools/mcp-server/src/manifest.ts`
   - Add `ComponentSpec` entries for each new chart tag

---

# Runbook: Incident Response (Production Issue)

## Severity Levels

| Level | Definition | Response time |
|-------|------------|---------------|
| P1 | All components broken / npm package corrupted | 1 hour |
| P2 | Major component broken in production | 4 hours |
| P3 | Minor bug affecting some users | 24 hours |
| P4 | Cosmetic issue / docs error | 72 hours |

## P1/P2 Response Steps

1. **Acknowledge** — post in `#incidents` Slack channel within 15 minutes
2. **Assess** — reproduce the issue locally
3. **Mitigate** — if npm package issue, deprecate broken version immediately:
   ```bash
   npm deprecate @weldui/core@"X.Y.Z" "Critical bug — use X.Y.Z+1"
   ```
4. **Fix** — create hotfix branch from last stable tag
5. **Release** — follow hotfix release process (see `release/SKILL.md`)
6. **Notify** — post in GitHub Discussions + email enterprise clients
7. **Post-mortem** — write within 48 hours, add to `docs/runbooks/post-mortems/`

## Post-Mortem Template

```markdown
# Post-Mortem: [Issue Title]

**Date:** YYYY-MM-DD  
**Severity:** P[1-4]  
**Duration:** X hours Y minutes  
**Affected packages:** @weldui/...

## Timeline
- HH:MM — Issue detected
- HH:MM — Response started
- HH:MM — Mitigation deployed
- HH:MM — Fix released

## Root Cause
[Describe what went wrong]

## Impact
[Who was affected, how many users, what functionality]

## Resolution
[What was done to fix it]

## Prevention
[What process/code change prevents recurrence]
```
