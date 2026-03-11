// ── Phase 1: Foundation Components ─────────────────────────────────────────
export { WuButton } from './components/button/wu-button.js';
export { WuBadge } from './components/badge/wu-badge.js';
export { WuAvatar } from './components/avatar/wu-avatar.js';
export { WuInput } from './components/input/wu-input.js';
export { WuTextarea } from './components/textarea/wu-textarea.js';
export { WuSelect } from './components/select/wu-select.js';
export { WuCheckbox } from './components/checkbox/wu-checkbox.js';
export { WuToggle } from './components/toggle/wu-toggle.js';

// ── Phase 3A: Simple Complex Components ────────────────────────────────────
export { WuCard } from './components/card/wu-card.js';
export { WuModal } from './components/modal/wu-modal.js';
export { WuAlert } from './components/alert/wu-alert.js';
export { WuSpinner } from './components/spinner/wu-spinner.js';
export { WuProgress } from './components/progress/wu-progress.js';
export { WuSkeleton } from './components/skeleton/wu-skeleton.js';
export { WuDivider } from './components/divider/wu-divider.js';
export { WuTooltip } from './components/tooltip/wu-tooltip.js';
export { WuPopover } from './components/popover/wu-popover.js';
export { WuToast, WuToastProvider } from './components/toast/wu-toast.js';

// ── Phase 3C: Advanced Complex Components ──────────────────────────────────
export { WuTabs, WuTab, WuTabPanel } from './components/tabs/wu-tabs.js';
export { WuAccordion, WuAccordionItem } from './components/accordion/wu-accordion.js';
export { WuBreadcrumb } from './components/breadcrumb/wu-breadcrumb.js';
export { WuPagination } from './components/pagination/wu-pagination.js';
export { WuTable } from './components/table/wu-table.js';
export type { WuTableColumn } from './components/table/wu-table.js';
export { WuDatePicker } from './components/date-picker/wu-date-picker.js';
export { WuFileUpload } from './components/file-upload/wu-file-upload.js';
export { WuStepper, WuStep } from './components/stepper/wu-stepper.js';
export { WuCommand } from './components/command/wu-command.js';
export type { WuCommandItem } from './components/command/wu-command.js';
export { WuDataGrid } from './components/data-grid/wu-data-grid.js';
export type { WuDataGridColumn } from './components/data-grid/wu-data-grid.js';

// Types
export type * from './types/index.js';

// ── Side-effects: register all custom elements ──────────────────────────────
// Phase 1
import './components/button/wu-button.js';
import './components/badge/wu-badge.js';
import './components/avatar/wu-avatar.js';
import './components/input/wu-input.js';
import './components/textarea/wu-textarea.js';
import './components/select/wu-select.js';
import './components/checkbox/wu-checkbox.js';
import './components/toggle/wu-toggle.js';
// Phase 3A
import './components/card/wu-card.js';
import './components/modal/wu-modal.js';
import './components/alert/wu-alert.js';
import './components/spinner/wu-spinner.js';
import './components/progress/wu-progress.js';
import './components/skeleton/wu-skeleton.js';
import './components/divider/wu-divider.js';
import './components/tooltip/wu-tooltip.js';
import './components/popover/wu-popover.js';
import './components/toast/wu-toast.js';
// Phase 3C
import './components/tabs/wu-tabs.js';
import './components/accordion/wu-accordion.js';
import './components/breadcrumb/wu-breadcrumb.js';
import './components/pagination/wu-pagination.js';
import './components/table/wu-table.js';
import './components/date-picker/wu-date-picker.js';
import './components/file-upload/wu-file-upload.js';
import './components/stepper/wu-stepper.js';
import './components/command/wu-command.js';
import './components/data-grid/wu-data-grid.js';
