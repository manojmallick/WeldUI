#!/usr/bin/env bash
# .claude/hooks/pre-commit.sh
# Runs before every git commit. Hard blocks on failures.
set -e

echo "🔒 WeldUI pre-commit validation..."

# 1. Block commits of secret/env files
echo "  Checking for accidentally staged secrets..."
STAGED=$(git diff --cached --name-only 2>/dev/null || true)

BLOCKED_FILES=(".env" ".env.local" ".env.production" "*.pem" "*.key" ".claude/settings.json")
for pattern in "${BLOCKED_FILES[@]}"; do
  if echo "$STAGED" | grep -q "$pattern"; then
    echo "❌ Attempted to commit a restricted file: $pattern"
    echo "   This file should be in .gitignore."
    exit 1
  fi
done

# 2. Block committing module-level CLAUDE.md files
# (root CLAUDE.md is allowed — it's the master guide)
MODULE_CLAUDE=$(echo "$STAGED" | grep -E "^(packages|apps|tools|src)/.*CLAUDE\.md$" || true)
if [ -n "$MODULE_CLAUDE" ]; then
  echo "❌ Module-level CLAUDE.md files should NOT be committed."
  echo "   These are local context files. Check .gitignore."
  echo "$MODULE_CLAUDE"
  exit 1
fi

# 3. Block committing SKILL.md files
SKILL_FILES=$(echo "$STAGED" | grep "SKILL\.md" || true)
if [ -n "$SKILL_FILES" ]; then
  echo "❌ SKILL.md files should NOT be committed."
  echo "   These are local AI workflow files. Check .gitignore."
  echo "$SKILL_FILES"
  exit 1
fi

# 4. Run linter on staged files only
echo "  Running lint on staged files..."
STAGED_TS=$(echo "$STAGED" | grep "\.ts$" || true)
if [ -n "$STAGED_TS" ]; then
  echo "$STAGED_TS" | xargs pnpm exec eslint --fix-dry-run 2>&1 | tail -5
fi

# 5. Validate token usage in staged component files
echo "  Validating token usage in staged components..."
STAGED_STYLES=$(echo "$STAGED" | grep "\.styles\.ts$" || true)
if [ -n "$STAGED_STYLES" ]; then
  for file in $STAGED_STYLES; do
    HARDCODED=$(grep -n -E "(#[0-9a-fA-F]{3,8}|rgb\(|rgba\()" "$file" 2>/dev/null || true)
    if [ -n "$HARDCODED" ]; then
      echo "❌ Hardcoded colour in $file:"
      echo "$HARDCODED"
      exit 1
    fi
  done
fi

# 6. Check that test files exist for new components
echo "  Checking test coverage for new components..."
NEW_COMPONENTS=$(echo "$STAGED" | grep -E "components/[^/]+/wu-[^.]+\.ts$" | grep -v "\.test\." | grep -v "\.stories\." | grep -v "\.styles\." || true)
for component_file in $NEW_COMPONENTS; do
  dir=$(dirname "$component_file")
  basename=$(basename "$component_file" .ts)
  if [ ! -f "$dir/$basename.test.ts" ]; then
    echo "⚠️  Missing test file: $dir/$basename.test.ts"
    echo "   Every component needs a test file before committing."
    # Warning only for now — make this exit 1 when test coverage is established
  fi
done

echo "✅ Pre-commit checks passed!"
