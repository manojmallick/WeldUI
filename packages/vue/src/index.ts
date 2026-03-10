// Vue 3 wrappers for @weldui/core Web Components.
// Web Components work in Vue 3 natively — these wrappers add
// typed props, v-model bindings and emits.

import type { App } from 'vue';
import '@weldui/core';

// Re-export individual component definitions
export { default as WuButton } from './components/WuButton.js';
export { default as WuBadge } from './components/WuBadge.js';
export { default as WuInput } from './components/WuInput.js';

// Plugin for installing all components globally
export const WeldUIPlugin = {
  install(app: App) {
    // Tell Vue 3 to treat wu-* elements as custom elements
    // (no need to resolve as Vue components)
    app.config.compilerOptions.isCustomElement = (tag: string) => tag.startsWith('wu-');
  },
};
