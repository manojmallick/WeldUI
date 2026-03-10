# SKILL: UIForge Release Process

Use this skill when asked to prepare or execute a release.
UIForge uses Changesets for version management and GitHub Actions for publishing.

---

## Release Types

| Type | When to use | Version bump |
|------|-------------|--------------|
| `patch` | Bug fixes, docs, internal refactors | `1.0.0` → `1.0.1` |
| `minor` | New components, new theme, new non-breaking feature | `1.0.0` → `1.1.0` |
| `major` | Breaking API change, removed prop/event/slot | `1.0.0` → `2.0.0` |

**Breaking changes require:**
1. Deprecation in the previous minor release
2. Migration guide in `docs/runbooks/migrations/`
3. Communication in GitHub release notes and Discord

---

## Step-by-Step Release

### Step 1: Ensure clean state

```bash
git checkout main
git pull origin main
pnpm install --frozen-lockfile
pnpm build
pnpm test
```

All must pass. If anything fails, stop and fix first.

### Step 2: Create a changeset

```bash
pnpm changeset
```

Interactive prompts:
1. Select the packages that changed (space to select, enter to confirm)
2. Choose bump type: `patch`, `minor`, or `major`
3. Write a summary for the CHANGELOG:
   - Start with a verb: "Add", "Fix", "Update", "Remove"
   - Be specific: "Add `uf-tooltip` component with all placement options"
   - Not: "Changes to button" ❌

This creates a file in `.changeset/` — commit it:
```bash
git add .changeset/
git commit -m "chore: add changeset for [component/feature]"
git push
```

### Step 3: Open a Release PR

GitHub Actions will automatically open a "Version Packages" PR when it detects changesets on `main`.
Review this PR — it shows the new versions and CHANGELOG entries for every package.

Verify:
- [ ] Version bumps are correct for the change type
- [ ] CHANGELOG entries are clear and user-facing
- [ ] All affected packages are included

### Step 4: Pre-release checklist

Before merging the Version PR:
- [ ] `pnpm build` passes on the PR branch
- [ ] `pnpm test` passes
- [ ] Pre-build hook passes: `.claude/hooks/pre-build.sh`
- [ ] Storybook builds: `pnpm --filter docs build-storybook`
- [ ] Accessibility score ≥ 95 on new/changed components
- [ ] Bundle size within budget: core < 50KB gzip
- [ ] All new components have stories AND tests
- [ ] CHANGELOG.md entries are correct
- [ ] If major: migration guide exists in `docs/runbooks/migrations/`

### Step 5: Merge and publish

Merge the Version PR. GitHub Actions (`release.yml`) automatically:
1. Builds all packages
2. Publishes to npm with `NPM_TOKEN`
3. Creates GitHub Release with auto-generated notes
4. Triggers post-release hook: `.claude/hooks/post-release.sh`
5. Redeploys Storybook docs site

### Step 6: Verify publish

```bash
# Check npm registry
npm view @uiforge/core version
npm view @uiforge/react version

# Smoke test: install in a fresh project
mkdir /tmp/uiforge-test && cd /tmp/uiforge-test
npm init -y
npm install @uiforge/core @uiforge/react
node -e "const { UfButton } = require('@uiforge/core'); console.log('✅ Core OK')"
```

### Step 7: Announce

- [ ] Post in GitHub Discussions: "v[X.Y.Z] Released"
- [ ] Update Discord #releases channel
- [ ] Post-release hook sends Slack notification (automated)
- [ ] Tweet / LinkedIn post if minor or major release
- [ ] Update docs.uiforge.dev if any API docs changed

---

## Hotfix Release (Patch on Production)

For urgent bug fixes that can't wait for the next planned release:

```bash
# Branch from the last release tag
git checkout v1.2.3
git checkout -b hotfix/fix-button-disabled

# Make the fix, add tests
# ...

# Add changeset
pnpm changeset

# Push and open PR directly to main
# Once merged, GitHub Actions handles the rest
```

---

## Theme-Only Release

Themes are independently versioned packages. A theme release doesn't need a core release.

```bash
# After making theme changes:
pnpm changeset  # Select only the theme package(s)
# Follow normal release flow
```

For paid themes, after npm publish:
1. Lemon Squeezy webhook automatically updates the download link
2. Existing customers get the new version via their npm token
3. Update the marketplace listing screenshots if visual changes occurred

---

## Emergency Rollback

If a broken version is published:

```bash
# Deprecate the bad version (does NOT unpublish — npm doesn't allow that after 72h)
npm deprecate @uiforge/core@"1.2.3" "Critical bug — please upgrade to 1.2.4"

# Publish a patch fix immediately
# Follow hotfix process above

# Communicate in GitHub Issues and Discord
```
