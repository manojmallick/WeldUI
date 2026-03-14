#!/usr/bin/env node
/**
 * @weldui/mcp-server
 *
 * An MCP (Model Context Protocol) server that exposes WeldUI component documentation
 * and code generation tools to AI coding assistants (Claude, Cursor, GitHub Copilot).
 *
 * Usage in MCP config:
 *   { "command": "npx", "args": ["@weldui/mcp-server"] }
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import {
  COMPONENTS,
  SEMANTIC_TOKENS,
  THEMES,
  getComponent,
  type ComponentSpec,
  type ThemeName,
} from './manifest.js';

// ── Server init ────────────────────────────────────────────────────────────

const server = new Server(
  { name: '@weldui/mcp-server', version: '0.1.0' },
  { capabilities: { tools: {} } },
);

// ── Tool registry ──────────────────────────────────────────────────────────

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'list_components',
      description: 'List all WeldUI components with their tags, descriptions, and phases.',
      inputSchema: {
        type: 'object',
        properties: {
          phase: {
            type: 'number',
            enum: [1, 3, 4],
            description: 'Filter by phase (1=Foundation, 3=Complex, 4=Compound). Omit for all.',
          },
        },
      },
    },
    {
      name: 'get_component',
      description: 'Get the full specification for a WeldUI component: properties, slots, events, and CSS custom properties.',
      inputSchema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Component tag or name, e.g. "wu-button" or "button".',
          },
        },
        required: ['name'],
      },
    },
    {
      name: 'generate_usage',
      description: 'Generate framework-specific usage code for a WeldUI component.',
      inputSchema: {
        type: 'object',
        properties: {
          component: {
            type: 'string',
            description: 'Component tag, e.g. "wu-button".',
          },
          framework: {
            type: 'string',
            enum: ['html', 'react', 'vue', 'angular', 'svelte'],
            description: 'Target framework.',
          },
          props: {
            type: 'object',
            description: 'Property values to include in the generated code.',
            additionalProperties: true,
          },
          children: {
            type: 'string',
            description: 'Inner text or child HTML.',
          },
        },
        required: ['component', 'framework'],
      },
    },
    {
      name: 'get_theme_tokens',
      description: 'List all WeldUI CSS custom property token names, optionally filtered by category.',
      inputSchema: {
        type: 'object',
        properties: {
          theme: {
            type: 'string',
            enum: THEMES as unknown as string[],
            description: 'Theme name (currently returns the semantic token list for all themes).',
          },
          category: {
            type: 'string',
            enum: ['color', 'spacing', 'radius', 'typography', 'shadow', 'focus', 'transition'],
            description: 'Limit to a specific token category. Omit for all.',
          },
        },
      },
    },
    {
      name: 'check_accessibility',
      description: 'Static accessibility check for WeldUI component usage code.',
      inputSchema: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
            description: 'HTML (or JSX/template) snippet using wu-* elements.',
          },
        },
        required: ['code'],
      },
    },
  ],
}));

// ── Tool handlers ──────────────────────────────────────────────────────────

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'list_components':
      return handleListComponents(args as { phase?: number });

    case 'get_component':
      return handleGetComponent(args as { name: string });

    case 'generate_usage':
      return handleGenerateUsage(args as {
        component: string;
        framework: string;
        props?: Record<string, unknown>;
        children?: string;
      });

    case 'get_theme_tokens':
      return handleGetThemeTokens(args as { theme?: ThemeName; category?: string });

    case 'check_accessibility':
      return handleCheckAccessibility(args as { code: string });

    default:
      return {
        content: [{ type: 'text', text: `Unknown tool: ${name}` }],
        isError: true,
      };
  }
});

// ── list_components ────────────────────────────────────────────────────────

function handleListComponents(args: { phase?: number }) {
  const components = args.phase
    ? COMPONENTS.filter((c) => c.phase === args.phase)
    : COMPONENTS;

  const lines = [
    `WeldUI has ${COMPONENTS.length} components across 3 phases.\n`,
    ...(args.phase ? [`Filtered to Phase ${args.phase}:\n`] : []),
    ...components.map(
      (c) =>
        `• <${c.tag}> (Phase ${c.phase}) — ${c.description}` +
        (c.subElements?.length
          ? `\n  Sub-elements: ${c.subElements.map((t) => `<${t}>`).join(', ')}`
          : ''),
    ),
    '\nUse get_component("<tag>") for full property/event details.',
  ];

  return { content: [{ type: 'text', text: lines.join('\n') }] };
}

// ── get_component ──────────────────────────────────────────────────────────

function handleGetComponent(args: { name: string }) {
  const tag = args.name.startsWith('wu-') ? args.name : `wu-${args.name}`;
  const spec = getComponent(tag) ?? COMPONENTS.find((c) => c.class.toLowerCase() === args.name.toLowerCase());

  if (!spec) {
    const names = COMPONENTS.map((c) => `<${c.tag}>`).join(', ');
    return {
      content: [{ type: 'text', text: `Component "${args.name}" not found.\n\nAvailable: ${names}` }],
      isError: true,
    };
  }

  const lines: string[] = [
    `## <${spec.tag}>`,
    `**Class:** ${spec.class}   **Phase:** ${spec.phase}`,
    '',
    spec.description,
    '',
  ];

  if (spec.subElements?.length) {
    lines.push(`**Related elements:** ${spec.subElements.map((t) => `<${t}>`).join(', ')}`, '');
  }

  // Properties
  lines.push('### Properties');
  if (spec.properties.length === 0) {
    lines.push('_None_');
  } else {
    const maxName = Math.max(...spec.properties.map((p) => p.name.length));
    spec.properties.forEach((p) => {
      const defStr = p.default !== undefined ? ` (default: \`${p.default}\`)` : '';
      lines.push(`• \`${p.name.padEnd(maxName)}\`  \`${p.type}\`${defStr}  — ${p.description}`);
    });
  }
  lines.push('');

  // Slots
  lines.push('### Slots');
  if (spec.slots.length === 0) {
    lines.push('_None_');
  } else {
    spec.slots.forEach((s) => {
      lines.push(`• \`${s.name || '(default)'}\` — ${s.description}`);
    });
  }
  lines.push('');

  // Events
  lines.push('### Events');
  if (spec.events.length === 0) {
    lines.push('_None_');
  } else {
    spec.events.forEach((e) => {
      const detail = e.detail ? ` — detail: \`${e.detail}\`` : '';
      lines.push(`• \`${e.name}\`${detail}  ${e.description}`);
    });
  }
  lines.push('');

  // Example
  lines.push('### Minimal Example', '```html', spec.example, '```');

  return { content: [{ type: 'text', text: lines.join('\n') }] };
}

// ── generate_usage ─────────────────────────────────────────────────────────

function handleGenerateUsage(args: {
  component: string;
  framework: string;
  props?: Record<string, unknown>;
  children?: string;
}) {
  const tag = args.component.startsWith('wu-') ? args.component : `wu-${args.component}`;
  const spec = getComponent(tag);

  if (!spec) {
    return {
      content: [{ type: 'text', text: `Component <${tag}> not found. Run list_components to see all tags.` }],
      isError: true,
    };
  }

  const props = args.props ?? {};
  const children = args.children ?? spec.example.match(/>(.+?)<\//s)?.[1]?.trim() ?? spec.class.slice(2);
  const framework = args.framework.toLowerCase();

  let code: string;
  let lang: string;

  switch (framework) {
    case 'html':
      code = generateHtml(tag, props, children);
      lang = 'html';
      break;
    case 'react':
      code = generateReact(spec, props, children);
      lang = 'tsx';
      break;
    case 'vue':
      code = generateVue(tag, props, children);
      lang = 'html';
      break;
    case 'angular':
      code = generateAngular(tag, props, children);
      lang = 'html';
      break;
    case 'svelte':
      code = generateSvelte(spec, props, children);
      lang = 'svelte';
      break;
    default:
      return {
        content: [{ type: 'text', text: `Unknown framework "${framework}". Choose: html, react, vue, angular, svelte` }],
        isError: true,
      };
  }

  const output = [
    `**<${tag}> — ${framework.charAt(0).toUpperCase() + framework.slice(1)} usage**\n`,
    `\`\`\`${lang}`,
    code,
    '```',
  ];

  if (framework !== 'html') {
    output.push(`\n**Install:**\n\`\`\`bash\npnpm add @weldui/${framework} @weldui/core @weldui/theme-default\n\`\`\``);
  }

  return { content: [{ type: 'text', text: output.join('\n') }] };
}

function generateHtml(tag: string, props: Record<string, unknown>, children: string): string {
  const attrs = Object.entries(props)
    .map(([k, v]) => {
      if (v === true) return k;
      if (v === false) return null;
      return `${k}="${v}"`;
    })
    .filter(Boolean)
    .join(' ');
  const attrStr = attrs ? ` ${attrs}` : '';
  return `<!-- Import once per page -->
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/@weldui/core/dist/index.js';
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@weldui/core/dist/tokens/base.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@weldui/core/dist/tokens/semantic.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@weldui/theme-default/light.css" />

<${tag}${attrStr}>${children}</${tag}>`;
}

function generateReact(spec: ComponentSpec, props: Record<string, unknown>, children: string): string {
  const componentName = spec.class.slice(2); // WuButton → Button
  const attrs = Object.entries(props)
    .map(([k, v]) => {
      if (v === true) return k;
      if (v === false) return null;
      if (typeof v === 'number') return `${camelize(k)}={${v}}`;
      return `${camelize(k)}="${v}"`;
    })
    .filter(Boolean)
    .join('\n  ');
  const attrStr = attrs ? `\n  ${attrs}\n` : '';
  const eventProps = spec.events
    .map((e) => `  on${pascalize(e.name.replace('wu-', ''))}={() => { /* handle ${e.name} */ }}`)
    .join('\n');
  const allAttrs = [attrStr.trim(), eventProps].filter(Boolean).join('\n  ');

  return `import { ${componentName} } from '@weldui/react';
import '@weldui/core/dist/tokens/base.css';
import '@weldui/core/dist/tokens/semantic.css';
import '@weldui/theme-default/light.css';

export function Example() {
  return (
    <div data-theme="light">
      <${componentName}${allAttrs ? `\n      ${allAttrs}\n    ` : ''}>
        ${children}
      </${componentName}>
    </div>
  );
}`;
}

function generateVue(tag: string, props: Record<string, unknown>, children: string): string {
  const attrs = Object.entries(props)
    .map(([k, v]) => {
      if (v === true) return k;
      if (v === false) return null;
      return `${k}="${v}"`;
    })
    .filter(Boolean)
    .join('\n  ');
  const attrStr = attrs ? `\n  ${attrs}\n` : '';

  return `<template>
  <${tag}${attrStr}>${children}</${tag}>
</template>

<script setup lang="ts">
// main.ts: import { WeldUIPlugin } from '@weldui/vue'; app.use(WeldUIPlugin);
// vite.config.ts: isCustomElement: tag => tag.startsWith('wu-')
</script>`;
}

function generateAngular(tag: string, props: Record<string, unknown>, children: string): string {
  const attrs = Object.entries(props)
    .map(([k, v]) => {
      if (v === true) return k;
      if (v === false) return null;
      return `${k}="${v}"`;
    })
    .filter(Boolean)
    .join('\n  ');
  const attrStr = attrs ? `\n  ${attrs}\n` : '';

  return `<!-- app.component.html -->
<${tag}${attrStr}>${children}</${tag}>

<!-- app.module.ts: import { WeldUIModule } from '@weldui/angular'; -->`;
}

function generateSvelte(spec: ComponentSpec, props: Record<string, unknown>, children: string): string {
  const componentName = `Wu${spec.class.slice(2)}`;
  const attrs = Object.entries(props)
    .map(([k, v]) => {
      if (v === true) return k;
      if (v === false) return null;
      if (typeof v === 'number') return `${camelize(k)}={${v}}`;
      return `${camelize(k)}="${v}"`;
    })
    .filter(Boolean)
    .join('\n  ');
  const attrStr = attrs ? `\n  ${attrs}\n` : '';

  return `<script lang="ts">
  import { ${componentName} } from '@weldui/svelte';
  import '@weldui/core/dist/tokens/base.css';
  import '@weldui/core/dist/tokens/semantic.css';
  import '@weldui/theme-default/light.css';
</script>

<${componentName}${attrStr}>${children}</${componentName}>`;
}

// ── get_theme_tokens ───────────────────────────────────────────────────────

function handleGetThemeTokens(args: { theme?: ThemeName; category?: string }) {
  const tokens = args.category
    ? { [args.category]: SEMANTIC_TOKENS[args.category] ?? [] }
    : SEMANTIC_TOKENS;

  const lines = [
    `## WeldUI CSS Custom Properties${args.theme ? ` — ${args.theme} theme` : ''}`,
    '',
    'These variables are inherited by all Shadow DOM children.',
    'Override them on `:root`, `[data-theme]`, or any ancestor element.',
    '',
  ];

  Object.entries(tokens).forEach(([cat, vars]) => {
    lines.push(`### ${cat.charAt(0).toUpperCase() + cat.slice(1)}`);
    vars.forEach((v) => lines.push(`• \`${v}\``));
    lines.push('');
  });

  lines.push(
    '### How to apply a theme',
    '```css',
    '[data-theme="my-brand"] {',
    '  --wu-color-primary: #e11d48;',
    '  --wu-color-primary-hover: #be123c;',
    '  --wu-color-primary-fg: #ffffff;',
    '}',
    '```',
    '',
    `Available built-in themes: ${THEMES.join(', ')}`,
  );

  return { content: [{ type: 'text', text: lines.join('\n') }] };
}

// ── check_accessibility ────────────────────────────────────────────────────

interface A11yIssue {
  severity: 'error' | 'warning';
  message: string;
  rule: string;
}

function handleCheckAccessibility(args: { code: string }) {
  const code = args.code;
  const issues: A11yIssue[] = [];

  // Rule: icon-only buttons should have aria-label
  const iconButtonMatches = code.matchAll(/<wu-button(?![^>]*aria-label)(?![^>]*>[^<]+<\/wu-button)[^>]*>/g);
  for (const m of iconButtonMatches) {
    if (!m[0].includes('>') || code.slice(code.indexOf(m[0])).match(/wu-button>\s*<\/wu-button>/)) {
      issues.push({
        severity: 'warning',
        rule: 'button-accessible-name',
        message: 'A <wu-button> with no visible text should have an aria-label attribute for screen readers.',
      });
    }
  }

  // Rule: wu-input without label
  const inputMatches = code.matchAll(/<wu-input(?![^>]*label=)(?![^>]*aria-label=)[^>]*>/g);
  for (const _ of inputMatches) {
    issues.push({
      severity: 'error',
      rule: 'input-label',
      message: '<wu-input> is missing a `label` or `aria-label` attribute. All form inputs must have an accessible label.',
    });
  }

  // Rule: wu-textarea without label
  const textareaMatches = code.matchAll(/<wu-textarea(?![^>]*label=)(?![^>]*aria-label=)[^>]*>/g);
  for (const _ of textareaMatches) {
    issues.push({
      severity: 'error',
      rule: 'textarea-label',
      message: '<wu-textarea> is missing a `label` or `aria-label` attribute.',
    });
  }

  // Rule: wu-select without label
  const selectMatches = code.matchAll(/<wu-select(?![^>]*label=)(?![^>]*aria-label=)[^>]*>/g);
  for (const _ of selectMatches) {
    issues.push({
      severity: 'error',
      rule: 'select-label',
      message: '<wu-select> is missing a `label` or `aria-label` attribute.',
    });
  }

  // Rule: wu-modal without label
  const modalMatches = code.matchAll(/<wu-modal(?![^>]*label=)(?![^>]*aria-labelledby=)[^>]*>/g);
  for (const _ of modalMatches) {
    issues.push({
      severity: 'error',
      rule: 'modal-label',
      message: '<wu-modal> is missing a `label` attribute. All dialogs must have an accessible name.',
    });
  }

  // Rule: wu-avatar without alt
  const avatarMatches = code.matchAll(/<wu-avatar(?![^>]*alt=)[^>]*>/g);
  for (const _ of avatarMatches) {
    issues.push({
      severity: 'warning',
      rule: 'avatar-alt',
      message: '<wu-avatar> should have an `alt` attribute for proper screen reader announcement.',
    });
  }

  // Rule: wu-data-table without accessible column labels
  if (code.includes('<wu-data-table')) {
    issues.push({
      severity: 'warning',
      rule: 'data-table-labels',
      message: 'Ensure <wu-data-table> `columns` array uses descriptive `label` strings, not just key names.',
    });
  }

  // Rule: interactive elements inside disabled containers
  if (code.includes('disabled') && code.includes('wu-button') && !code.includes('?disabled')) {
    issues.push({
      severity: 'warning',
      rule: 'disabled-state',
      message: 'When setting `disabled` on wu-* elements, prefer `?disabled=${condition}` to avoid serializing the string "false" as truthy.',
    });
  }

  const lines: string[] = [
    `## Accessibility Check`,
    `Found **${issues.length} issue${issues.length === 1 ? '' : 's'}** in the provided code.`,
    '',
  ];

  if (issues.length === 0) {
    lines.push('✅ No accessibility issues detected. Good work!');
    lines.push('');
    lines.push('**Reminder:** This is a static analysis tool. Always test with a screen reader (VoiceOver, NVDA) and run axe-core in your test suite.');
  } else {
    issues.forEach((issue, i) => {
      const icon = issue.severity === 'error' ? '❌' : '⚠️';
      lines.push(`${i + 1}. ${icon} **[${issue.rule}]** ${issue.message}`);
    });
    lines.push('');
    lines.push('**Next steps:**');
    lines.push('• Run `axe-core` in your Vitest tests via `@open-wc/testing`.');
    lines.push('• Test with VoiceOver (macOS) or NVDA (Windows).');
    lines.push('• Use the `accessibility` addon in Storybook for visual feedback.');
  }

  return { content: [{ type: 'text', text: lines.join('\n') }] };
}

// ── String helpers ─────────────────────────────────────────────────────────

function camelize(str: string): string {
  return str.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

function pascalize(str: string): string {
  const camel = camelize(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

// ── Start ──────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
