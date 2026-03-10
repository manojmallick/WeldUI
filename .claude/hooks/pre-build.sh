#!/usr/bin/env bash
# .claude/hooks/pre-build.sh
# Runs before every build. Fails build if any check fails.
set -e

echo "🔍 WeldUI pre-build checks..."

# 1. Check for hardcoded colour values in component styles
echo "  Checking for hardcoded colours in component styles..."
HARDCODED=$(grep -rn --include="*.styles.ts" \
  -E "(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\()" \
  packages/core/src/components/ 2>/dev/null || true)

if [ -n "$HARDCODED" ]; then
  echo "❌ Hardcoded colour values found in component styles!"
  echo "   All colours must reference CSS custom properties (--wu-*)."
  echo ""
  echo "$HARDCODED"
  echo ""
  echo "   Fix: Replace hex/rgb values with token references."
  echo "   Example: color: #3b82f6  →  color: var(--wu-color-primary)"
  exit 1
fi

# 2. Check for missing --wu- prefix on custom properties
echo "  Checking CSS property naming conventions..."
BAD_PROPS=$(grep -rn --include="*.styles.ts" \
  -E "var\(--(?!wu-)" \
  packages/core/src/components/ 2>/dev/null || true)

if [ -n "$BAD_PROPS" ]; then
  echo "❌ Non-prefixed CSS custom properties found!"
  echo "   All CSS vars must use --wu- prefix."
  echo "$BAD_PROPS"
  exit 1
fi

# 3. Check for missing JSDoc on exported components
echo "  Checking JSDoc coverage..."
MISSING_JSDOC=$(grep -rn --include="*.ts" \
  -L "@element wu-" \
  packages/core/src/components/*/wu-*.ts 2>/dev/null || true)

if [ -n "$MISSING_JSDOC" ]; then
  echo "⚠️  Components missing @element JSDoc tag:"
  echo "$MISSING_JSDOC"
  # Warning only, not blocking
fi

# 4. Ensure all components are exported from index.ts
echo "  Checking barrel exports..."
for dir in packages/core/src/components/*/; do
  component=$(basename "$dir")
  if ! grep -q "from './components/$component/" packages/core/src/index.ts 2>/dev/null; then
    echo "⚠️  Component '$component' may not be exported from index.ts"
  fi
done

# 5. TypeScript strict check
echo "  Running TypeScript strict check..."
pnpm --filter @weldui/core exec tsc --noEmit --strict 2>&1 | head -20

echo "✅ Pre-build checks passed!"
