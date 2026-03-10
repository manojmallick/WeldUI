#!/usr/bin/env bash
# .claude/hooks/post-release.sh
# Runs after a successful npm publish. Sends notifications.
set -e

echo "🚀 WeldUI post-release tasks..."

PACKAGE_NAME=${1:-"@weldui/core"}
PACKAGE_VERSION=${2:-"unknown"}
RELEASE_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# 1. Log release to release history file
echo "  Logging release..."
cat >> docs/runbooks/release-history.log << EOF
[$RELEASE_DATE] Released $PACKAGE_NAME@$PACKAGE_VERSION
EOF

# 2. Post to Slack webhook (if configured)
if [ -n "$SLACK_WEBHOOK_URL" ]; then
  echo "  Notifying Slack..."
  curl -s -X POST "$SLACK_WEBHOOK_URL" \
    -H 'Content-type: application/json' \
    -d "{
      \"text\": \"📦 *$PACKAGE_NAME@$PACKAGE_VERSION* released!\",
      \"blocks\": [{
        \"type\": \"section\",
        \"text\": {
          \"type\": \"mrkdwn\",
          \"text\": \"📦 *$PACKAGE_NAME@$PACKAGE_VERSION* has been published to npm.\n<https://www.npmjs.com/package/$PACKAGE_NAME|View on npm> | <https://github.com/manojmallick/WeldUI/releases|View release notes>\"
        }
      }]
    }" || echo "  ⚠️  Slack notification failed (non-blocking)"
fi

# 3. Trigger Lemon Squeezy theme package update (if applicable)
if [[ "$PACKAGE_NAME" == @weldui/theme-* ]]; then
  THEME_NAME=${PACKAGE_NAME#@weldui/theme-}
  echo "  Triggering marketplace theme update for: $THEME_NAME..."
  if [ -n "$LEMON_SQUEEZY_WEBHOOK_SECRET" ]; then
    curl -s -X POST "https://api.lemonsqueezy.com/v1/webhooks/theme-update" \
      -H "Authorization: Bearer $LEMON_SQUEEZY_WEBHOOK_SECRET" \
      -H "Content-Type: application/json" \
      -d "{\"theme\": \"$THEME_NAME\", \"version\": \"$PACKAGE_VERSION\"}" \
      || echo "  ⚠️  Marketplace update failed (non-blocking)"
  fi
fi

# 4. Invalidate Storybook cache / trigger redeploy
if [ -n "$GITHUB_TOKEN" ] && [ -n "$GITHUB_REPOSITORY" ]; then
  echo "  Triggering Storybook redeploy..."
  curl -s -X POST \
    "https://api.github.com/repos/$GITHUB_REPOSITORY/actions/workflows/storybook.yml/dispatches" \
    -H "Authorization: Bearer $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    -d "{\"ref\": \"main\"}" \
    || echo "  ⚠️  Storybook redeploy trigger failed (non-blocking)"
fi

echo "✅ Post-release tasks complete for $PACKAGE_NAME@$PACKAGE_VERSION"
