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

// ── Phase 4: Compound Components ────────────────────────────────────────────
export { WuNavbar } from './components/navbar/wu-navbar.js';
export { WuSidebar, WuSidebarItem } from './components/sidebar/wu-sidebar.js';
export { WuForm } from './components/form/wu-form.js';
export { WuDashboard } from './components/dashboard/wu-dashboard.js';
export { WuEmptyState } from './components/empty-state/wu-empty-state.js';
export { WuErrorPage } from './components/error-page/wu-error-page.js';
export { WuSearch } from './components/search/wu-search.js';
export type { SuggestionItem } from './components/search/wu-search.js';
export { WuDataTable } from './components/data-table/wu-data-table.js';
export type { WuDataTableColumn } from './components/data-table/wu-data-table.js';

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
// Phase 4
import './components/navbar/wu-navbar.js';
import './components/sidebar/wu-sidebar.js';
import './components/form/wu-form.js';
import './components/dashboard/wu-dashboard.js';
import './components/empty-state/wu-empty-state.js';
import './components/error-page/wu-error-page.js';
import './components/search/wu-search.js';
import './components/data-table/wu-data-table.js';

// ── Phase 5: Form Primitives ────────────────────────────────────────────────
export { WuRadioGroup, WuRadio } from './components/radio/wu-radio.js';
export { WuSlider } from './components/slider/wu-slider.js';
export { WuColorPicker } from './components/color-picker/wu-color-picker.js';
export { WuRating } from './components/rating/wu-rating.js';
export { WuSwitch } from './components/switch/wu-switch.js';
export { WuPinInput } from './components/pin-input/wu-pin-input.js';
export { WuCombobox } from './components/combobox/wu-combobox.js';
export type { ComboboxOption } from './components/combobox/wu-combobox.js';
export { WuTagInput } from './components/tag-input/wu-tag-input.js';
export { WuNumber as WuNumberInput } from './components/number/wu-number.js';
export { WuMultiSelect } from './components/multi-select/wu-multi-select.js';
export type { MultiSelectOption } from './components/multi-select/wu-multi-select.js';

// ── Phase 6: Data Display ───────────────────────────────────────────────────
export { WuStat } from './components/stat/wu-stat.js';
export { WuTimeline, WuTimelineItem } from './components/timeline/wu-timeline.js';
export { WuTag } from './components/tag/wu-tag.js';
export { WuKbd } from './components/kbd/wu-kbd.js';
export { WuCode } from './components/code/wu-code.js';
export { WuCopyButton } from './components/copy-button/wu-copy-button.js';
export { WuCarousel } from './components/carousel/wu-carousel.js';
export { WuList, WuListItem } from './components/list/wu-list.js';
export { WuDl, WuDt, WuDd } from './components/description-list/wu-dl.js';
export { WuCallout } from './components/callout/wu-callout.js';
export { WuMeter } from './components/meter/wu-meter.js';
export { WuCollapse } from './components/collapse/wu-collapse.js';

// ── Phase 7: Nav & Overlays ─────────────────────────────────────────────────
export { WuDrawer } from './components/drawer/wu-drawer.js';
export { WuContextMenu } from './components/context-menu/wu-context-menu.js';
export type { ContextMenuItem } from './components/context-menu/wu-context-menu.js';
export { WuDropdown } from './components/dropdown/wu-dropdown.js';
export type { DropdownItem } from './components/dropdown/wu-dropdown.js';
export { WuTree, WuTreeItem } from './components/tree/wu-tree.js';
export { WuBottomNav, WuBottomNavItem } from './components/bottom-nav/wu-bottom-nav.js';
export { WuMegaMenu } from './components/mega-menu/wu-mega-menu.js';
export { WuNotificationCenter } from './components/notification-center/wu-notification-center.js';
export type { Notification } from './components/notification-center/wu-notification-center.js';
export { WuScrollArea } from './components/scroll-area/wu-scroll-area.js';
export { WuSplitPane } from './components/split-pane/wu-split-pane.js';
export { WuSpeedDial } from './components/speed-dial/wu-speed-dial.js';
export type { SpeedDialAction } from './components/speed-dial/wu-speed-dial.js';

// ── Phase 9: Rich Media ─────────────────────────────────────────────────────
export { WuLightbox } from './components/lightbox/wu-lightbox.js';
export type { LightboxImage } from './components/lightbox/wu-lightbox.js';
export { WuGallery } from './components/gallery/wu-gallery.js';
export type { GalleryImage } from './components/gallery/wu-gallery.js';
export { WuVirtualList } from './components/virtual-list/wu-virtual-list.js';
export { WuSortable } from './components/sortable/wu-sortable.js';
export { WuKanban, WuKanbanColumn } from './components/kanban/wu-kanban.js';
export type { KanbanCard, KanbanColumnData } from './components/kanban/wu-kanban.js';
export { WuMention } from './components/mention/wu-mention.js';
export type { MentionUser } from './components/mention/wu-mention.js';
export { WuQrCode } from './components/qr-code/wu-qr-code.js';
export { WuVideo } from './components/video/wu-video.js';

// Phase 5 side-effects
import './components/radio/wu-radio.js';
import './components/slider/wu-slider.js';
import './components/color-picker/wu-color-picker.js';
import './components/rating/wu-rating.js';
import './components/switch/wu-switch.js';
import './components/pin-input/wu-pin-input.js';
import './components/combobox/wu-combobox.js';
import './components/tag-input/wu-tag-input.js';
import './components/number/wu-number.js';
import './components/multi-select/wu-multi-select.js';
// Phase 6 side-effects
import './components/stat/wu-stat.js';
import './components/timeline/wu-timeline.js';
import './components/tag/wu-tag.js';
import './components/kbd/wu-kbd.js';
import './components/code/wu-code.js';
import './components/copy-button/wu-copy-button.js';
import './components/carousel/wu-carousel.js';
import './components/list/wu-list.js';
import './components/description-list/wu-dl.js';
import './components/callout/wu-callout.js';
import './components/meter/wu-meter.js';
import './components/collapse/wu-collapse.js';
// Phase 7 side-effects
import './components/drawer/wu-drawer.js';
import './components/context-menu/wu-context-menu.js';
import './components/dropdown/wu-dropdown.js';
import './components/tree/wu-tree.js';
import './components/bottom-nav/wu-bottom-nav.js';
import './components/mega-menu/wu-mega-menu.js';
import './components/notification-center/wu-notification-center.js';
import './components/scroll-area/wu-scroll-area.js';
import './components/split-pane/wu-split-pane.js';
import './components/speed-dial/wu-speed-dial.js';
// Phase 9 side-effects
import './components/lightbox/wu-lightbox.js';
import './components/gallery/wu-gallery.js';
import './components/virtual-list/wu-virtual-list.js';
import './components/sortable/wu-sortable.js';
import './components/kanban/wu-kanban.js';
import './components/mention/wu-mention.js';
import './components/qr-code/wu-qr-code.js';
import './components/video/wu-video.js';
