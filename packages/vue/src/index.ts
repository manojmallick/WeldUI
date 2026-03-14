// Vue 3 wrappers for @weldui/core Web Components.
// Web Components work in Vue 3 natively — these wrappers add
// typed props, v-model bindings and emits.

import type { App } from 'vue';
import '@weldui/core';

// Phase 1 — Core primitives
export { default as WuButton } from './components/WuButton.js';
export { default as WuBadge } from './components/WuBadge.js';
export { default as WuAvatar } from './components/WuAvatar.js';
export { default as WuInput } from './components/WuInput.js';
export { default as WuTextarea } from './components/WuTextarea.js';
export { default as WuSelect } from './components/WuSelect.js';
export { default as WuCheckbox } from './components/WuCheckbox.js';
export { default as WuToggle } from './components/WuToggle.js';

// Phase 3A — Simple complex components
export { default as WuCard } from './components/WuCard.js';
export { default as WuModal } from './components/WuModal.js';
export { default as WuAlert } from './components/WuAlert.js';
export { default as WuSpinner } from './components/WuSpinner.js';
export { default as WuProgress } from './components/WuProgress.js';
export { default as WuSkeleton } from './components/WuSkeleton.js';
export { default as WuDivider } from './components/WuDivider.js';
export { default as WuTooltip } from './components/WuTooltip.js';
export { default as WuPopover } from './components/WuPopover.js';
export { WuToast, WuToastProvider } from './components/WuToast.js';

// Phase 3C — Advanced complex components
export { WuTabs, WuTab, WuTabPanel } from './components/WuTabs.js';
export { WuAccordion, WuAccordionItem } from './components/WuAccordion.js';
export { WuBreadcrumb, WuBreadcrumbItem } from './components/WuBreadcrumb.js';
export { default as WuPagination } from './components/WuPagination.js';
export { default as WuTable } from './components/WuTable.js';
export { default as WuDatePicker } from './components/WuDatePicker.js';
export { default as WuFileUpload } from './components/WuFileUpload.js';
export { WuStepper, WuStep } from './components/WuStepper.js';
export { default as WuCommand } from './components/WuCommand.js';
export { default as WuDataGrid } from './components/WuDataGrid.js';

// Phase 4 — Compound components
export { default as WuNavbar } from './components/WuNavbar.js';
export { WuSidebar, WuSidebarItem } from './components/WuSidebar.js';
export { default as WuForm } from './components/WuForm.js';
export { default as WuDashboard } from './components/WuDashboard.js';
export { default as WuEmptyState } from './components/WuEmptyState.js';
export { default as WuErrorPage } from './components/WuErrorPage.js';
export { default as WuSearch } from './components/WuSearch.js';
export { default as WuDataTable } from './components/WuDataTable.js';

// Plugin for installing all components globally
export const WeldUIPlugin = {
  install(app: App) {
    // Tell Vue 3 to treat wu-* elements as custom elements
    // (no need to resolve as Vue components)
    app.config.compilerOptions.isCustomElement = (tag: string) => tag.startsWith('wu-');
  },
};
