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

// Phase 5 — Form primitives
export { default as WuRadioGroup } from './components/WuRadioGroup.js';
export { default as WuSlider } from './components/WuSlider.js';
export { default as WuColorPicker } from './components/WuColorPicker.js';
export { default as WuRating } from './components/WuRating.js';
export { default as WuSwitch } from './components/WuSwitch.js';
export { default as WuPinInput } from './components/WuPinInput.js';
export { default as WuCombobox } from './components/WuCombobox.js';
export { default as WuTagInput } from './components/WuTagInput.js';
export { default as WuNumberInput } from './components/WuNumberInput.js';
export { default as WuMultiSelect } from './components/WuMultiSelect.js';

// Phase 6 — Data display
export { default as WuStat } from './components/WuStat.js';
export { WuTimeline, WuTimelineItem } from './components/WuTimeline.js';
export { default as WuTag } from './components/WuTag.js';
export { default as WuKbd } from './components/WuKbd.js';
export { default as WuCode } from './components/WuCode.js';
export { default as WuCopyButton } from './components/WuCopyButton.js';
export { default as WuCarousel } from './components/WuCarousel.js';
export { WuList, WuListItem } from './components/WuList.js';
export { default as WuDescriptionList } from './components/WuDescriptionList.js';
export { default as WuCallout } from './components/WuCallout.js';
export { default as WuMeter } from './components/WuMeter.js';
export { default as WuCollapse } from './components/WuCollapse.js';

// Phase 7 — Nav & overlays
export { default as WuDrawer } from './components/WuDrawer.js';
export { default as WuContextMenu } from './components/WuContextMenu.js';
export { default as WuDropdown } from './components/WuDropdown.js';
export { WuTree, WuTreeItem } from './components/WuTree.js';
export { WuBottomNav, WuBottomNavItem } from './components/WuBottomNav.js';
export { default as WuMegaMenu } from './components/WuMegaMenu.js';
export { default as WuNotificationCenter } from './components/WuNotificationCenter.js';
export { default as WuScrollArea } from './components/WuScrollArea.js';
export { default as WuSplitPane } from './components/WuSplitPane.js';
export { default as WuSpeedDial } from './components/WuSpeedDial.js';

// Phase 9 — Rich media
export { default as WuLightbox } from './components/WuLightbox.js';
export { default as WuGallery } from './components/WuGallery.js';
export { default as WuVirtualList } from './components/WuVirtualList.js';
export { default as WuSortable } from './components/WuSortable.js';
export { WuKanban, WuKanbanColumn } from './components/WuKanban.js';
export { default as WuMention } from './components/WuMention.js';
export { default as WuQrCode } from './components/WuQrCode.js';
export { default as WuVideo } from './components/WuVideo.js';

// Plugin for installing all components globally
export const WeldUIPlugin = {
  install(app: App) {
    // Tell Vue 3 to treat wu-* elements as custom elements
    // (no need to resolve as Vue components)
    app.config.compilerOptions.isCustomElement = (tag: string) => tag.startsWith('wu-');
  },
};
