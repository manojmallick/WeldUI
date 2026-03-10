#!/usr/bin/env tsx
/**
 * React wrapper generator for WeldUI Web Components.
 * Reads component exports from @weldui/core and generates
 * typed React wrapper components.
 *
 * Usage: pnpm --filter @weldui/react generate
 */

import fs from 'fs';
import path from 'path';

// Component definitions to generate wrappers for
const components = [
  {
    name: 'Button',
    tag: 'wu-button',
    events: ['wu-click'],
    props: `{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}`,
  },
  {
    name: 'Badge',
    tag: 'wu-badge',
    events: [],
    props: `{
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}`,
  },
  {
    name: 'Input',
    tag: 'wu-input',
    events: ['wu-change', 'wu-input', 'wu-focus', 'wu-blur'],
    props: `{
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}`,
  },
];

const outputDir = path.join(process.cwd(), 'src/components');
fs.mkdirSync(outputDir, { recursive: true });

for (const component of components) {
  const eventHandlers = component.events
    .map((e) => {
      const handlerName = `on${e.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')}`;
      return `  ${handlerName}?: (event: CustomEvent) => void;`;
    })
    .join('\n');

  const eventListeners = component.events
    .map((e) => {
      const handlerName = `on${e.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')}`;
      return `
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !${handlerName}) return;
      const handler = (ev: Event) => ${handlerName}(ev as CustomEvent);
      el.addEventListener('${e}', handler);
      return () => el.removeEventListener('${e}', handler);
    }, [${handlerName}, resolvedRef]);`;
    })
    .join('\n');

  const destructured = component.events
    .map((e) => `on${e.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')}`)
    .join(', ');

  const content = `// AUTO-GENERATED — DO NOT EDIT
// Run: pnpm --filter @weldui/react generate

import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type Uf${component.name}Props = ${component.props} & {
${eventHandlers}
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ${component.name} = forwardRef<HTMLElement, Uf${component.name}Props>(
  ({ ${destructured}${destructured ? ', ' : ''}children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
${eventListeners}
    return React.createElement(
      '${component.tag}',
      { ref: resolvedRef, class: className, style, ...props },
      children
    );
  }
);

${component.name}.displayName = 'Uf${component.name}';
`;

  fs.writeFileSync(path.join(outputDir, `${component.name}.tsx`), content);
  console.log(`✅ Generated ${component.name}.tsx`);
}

// Update index.ts
const indexContent = components
  .map((c) => `export { ${c.name} } from './components/${c.name}.js';`)
  .join('\n') + '\n';

fs.writeFileSync(path.join(process.cwd(), 'src/index.ts'), `// AUTO-GENERATED — DO NOT EDIT\n// Run: pnpm --filter @weldui/react generate\n\n${indexContent}`);
console.log('✅ Updated src/index.ts');
