/**
 * @weldui/svelte
 *
 * Svelte 5 wrappers for WeldUI Web Components.
 * Registers all wu-* custom elements as a side-effect.
 *
 * @example
 * ```svelte
 * <script>
 *   import { WuButton, WuInput } from '@weldui/svelte';
 * </script>
 *
 * <WuButton variant="primary" onWuClick={handleClick}>Save</WuButton>
 * <WuInput bind:value={name} label="Name" />
 * ```
 */

// Side-effect import: registers all wu-* custom elements
import '@weldui/core';

// ── Phase 1 — Foundation Components ──
export { default as WuButton } from './components/WuButton.svelte';
export { default as WuBadge } from './components/WuBadge.svelte';
export { default as WuAvatar } from './components/WuAvatar.svelte';
export { default as WuInput } from './components/WuInput.svelte';
export { default as WuTextarea } from './components/WuTextarea.svelte';
export { default as WuSelect } from './components/WuSelect.svelte';
export { default as WuCheckbox } from './components/WuCheckbox.svelte';
export { default as WuToggle } from './components/WuToggle.svelte';

// ── Phase 3A — Simple Complex Components ──
export { default as WuCard } from './components/WuCard.svelte';
export { default as WuModal } from './components/WuModal.svelte';
export { default as WuAlert } from './components/WuAlert.svelte';
export { default as WuSpinner } from './components/WuSpinner.svelte';
export { default as WuProgress } from './components/WuProgress.svelte';
export { default as WuSkeleton } from './components/WuSkeleton.svelte';
export { default as WuDivider } from './components/WuDivider.svelte';
export { default as WuTooltip } from './components/WuTooltip.svelte';
export { default as WuPopover } from './components/WuPopover.svelte';
export { default as WuToast } from './components/WuToast.svelte';
export { default as WuToastProvider } from './components/WuToastProvider.svelte';

// ── Phase 3C — Advanced Complex Components ──
export { default as WuTabs } from './components/WuTabs.svelte';
export { default as WuTab } from './components/WuTab.svelte';
export { default as WuTabPanel } from './components/WuTabPanel.svelte';
export { default as WuAccordion } from './components/WuAccordion.svelte';
export { default as WuAccordionItem } from './components/WuAccordionItem.svelte';
export { default as WuBreadcrumb } from './components/WuBreadcrumb.svelte';
export { default as WuBreadcrumbItem } from './components/WuBreadcrumbItem.svelte';
export { default as WuPagination } from './components/WuPagination.svelte';
export { default as WuTable } from './components/WuTable.svelte';
export { default as WuDatePicker } from './components/WuDatePicker.svelte';
export { default as WuFileUpload } from './components/WuFileUpload.svelte';
export { default as WuStepper } from './components/WuStepper.svelte';
export { default as WuStep } from './components/WuStep.svelte';
export { default as WuCommand } from './components/WuCommand.svelte';
export { default as WuDataGrid } from './components/WuDataGrid.svelte';
