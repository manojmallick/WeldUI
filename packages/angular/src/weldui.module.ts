import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@weldui/core';

// Phase 1
import { WuButtonDirective } from './components/wu-button.directive.js';
import { WuBadgeDirective } from './components/wu-badge.directive.js';
import { WuAvatarDirective } from './components/wu-avatar.directive.js';
import { WuInputDirective } from './components/wu-input.directive.js';
import { WuTextareaDirective } from './components/wu-textarea.directive.js';
import { WuSelectDirective } from './components/wu-select.directive.js';
import { WuCheckboxDirective } from './components/wu-checkbox.directive.js';
import { WuToggleDirective } from './components/wu-toggle.directive.js';
// Phase 3A
import { WuCardDirective } from './components/wu-card.directive.js';
import { WuModalDirective } from './components/wu-modal.directive.js';
import { WuAlertDirective } from './components/wu-alert.directive.js';
import { WuSpinnerDirective } from './components/wu-spinner.directive.js';
import { WuProgressDirective } from './components/wu-progress.directive.js';
import { WuSkeletonDirective } from './components/wu-skeleton.directive.js';
import { WuDividerDirective } from './components/wu-divider.directive.js';
import { WuTooltipDirective } from './components/wu-tooltip.directive.js';
import { WuPopoverDirective } from './components/wu-popover.directive.js';
import { WuToastDirective, WuToastProviderDirective } from './components/wu-toast.directive.js';
// Phase 3C
import { WuTabsDirective, WuTabDirective, WuTabPanelDirective } from './components/wu-tabs.directive.js';
import { WuAccordionDirective, WuAccordionItemDirective } from './components/wu-accordion.directive.js';
import { WuBreadcrumbDirective, WuBreadcrumbItemDirective } from './components/wu-breadcrumb.directive.js';
import { WuPaginationDirective } from './components/wu-pagination.directive.js';
import { WuTableDirective } from './components/wu-table.directive.js';
import { WuDatePickerDirective } from './components/wu-date-picker.directive.js';
import { WuFileUploadDirective } from './components/wu-file-upload.directive.js';
import { WuStepperDirective, WuStepDirective } from './components/wu-stepper.directive.js';
import { WuCommandDirective } from './components/wu-command.directive.js';
import { WuDataGridDirective } from './components/wu-data-grid.directive.js';
// Phase 4
import { WuNavbarDirective } from './components/wu-navbar.directive.js';
import { WuSidebarDirective, WuSidebarItemDirective } from './components/wu-sidebar.directive.js';
import { WuFormDirective } from './components/wu-form.directive.js';
import { WuDashboardDirective } from './components/wu-dashboard.directive.js';
import { WuEmptyStateDirective } from './components/wu-empty-state.directive.js';
import { WuErrorPageDirective } from './components/wu-error-page.directive.js';
import { WuSearchDirective } from './components/wu-search.directive.js';
import { WuDataTableDirective } from './components/wu-data-table.directive.js';
// Phase 5
import { WuRadioGroupDirective, WuRadioDirective } from './components/wu-radio.directive.js';
import { WuSliderDirective } from './components/wu-slider.directive.js';
import { WuColorPickerDirective } from './components/wu-color-picker.directive.js';
import { WuRatingDirective } from './components/wu-rating.directive.js';
import { WuSwitchDirective } from './components/wu-switch.directive.js';
import { WuPinInputDirective } from './components/wu-pin-input.directive.js';
import { WuComboboxDirective } from './components/wu-combobox.directive.js';
import { WuTagInputDirective } from './components/wu-tag-input.directive.js';
import { WuNumberInputDirective } from './components/wu-number-input.directive.js';
import { WuMultiSelectDirective } from './components/wu-multi-select.directive.js';
// Phase 6
import { WuStatDirective } from './components/wu-stat.directive.js';
import { WuTimelineDirective, WuTimelineItemDirective } from './components/wu-timeline.directive.js';
import { WuTagDirective } from './components/wu-tag.directive.js';
import { WuKbdDirective } from './components/wu-kbd.directive.js';
import { WuCodeDirective } from './components/wu-code.directive.js';
import { WuCopyButtonDirective } from './components/wu-copy-button.directive.js';
import { WuCarouselDirective } from './components/wu-carousel.directive.js';
import { WuListDirective, WuListItemDirective } from './components/wu-list.directive.js';
import { WuDescriptionListDirective } from './components/wu-description-list.directive.js';
import { WuCalloutDirective } from './components/wu-callout.directive.js';
import { WuMeterDirective } from './components/wu-meter.directive.js';
import { WuCollapseDirective } from './components/wu-collapse.directive.js';
// Phase 7
import { WuDrawerDirective } from './components/wu-drawer.directive.js';
import { WuContextMenuDirective } from './components/wu-context-menu.directive.js';
import { WuDropdownDirective } from './components/wu-dropdown.directive.js';
import { WuTreeDirective, WuTreeItemDirective } from './components/wu-tree.directive.js';
import { WuBottomNavDirective, WuBottomNavItemDirective } from './components/wu-bottom-nav.directive.js';
import { WuMegaMenuDirective } from './components/wu-mega-menu.directive.js';
import { WuNotificationCenterDirective } from './components/wu-notification-center.directive.js';
import { WuScrollAreaDirective } from './components/wu-scroll-area.directive.js';
import { WuSplitPaneDirective } from './components/wu-split-pane.directive.js';
import { WuSpeedDialDirective } from './components/wu-speed-dial.directive.js';
// Phase 9
import { WuLightboxDirective } from './components/wu-lightbox.directive.js';
import { WuGalleryDirective } from './components/wu-gallery.directive.js';
import { WuVirtualListDirective } from './components/wu-virtual-list.directive.js';
import { WuSortableDirective } from './components/wu-sortable.directive.js';
import { WuKanbanDirective, WuKanbanColumnDirective } from './components/wu-kanban.directive.js';
import { WuMentionDirective } from './components/wu-mention.directive.js';
import { WuQrCodeDirective } from './components/wu-qr-code.directive.js';
import { WuVideoDirective } from './components/wu-video.directive.js';

const DIRECTIVES = [
  // Phase 1
  WuButtonDirective, WuBadgeDirective, WuAvatarDirective, WuInputDirective,
  WuTextareaDirective, WuSelectDirective, WuCheckboxDirective, WuToggleDirective,
  // Phase 3A
  WuCardDirective, WuModalDirective, WuAlertDirective, WuSpinnerDirective,
  WuProgressDirective, WuSkeletonDirective, WuDividerDirective, WuTooltipDirective,
  WuPopoverDirective, WuToastDirective, WuToastProviderDirective,
  // Phase 3C
  WuTabsDirective, WuTabDirective, WuTabPanelDirective,
  WuAccordionDirective, WuAccordionItemDirective,
  WuBreadcrumbDirective, WuBreadcrumbItemDirective,
  WuPaginationDirective, WuTableDirective, WuDatePickerDirective,
  WuFileUploadDirective, WuStepperDirective, WuStepDirective,
  WuCommandDirective, WuDataGridDirective,
  // Phase 4
  WuNavbarDirective, WuSidebarDirective, WuSidebarItemDirective,
  WuFormDirective, WuDashboardDirective, WuEmptyStateDirective,
  WuErrorPageDirective, WuSearchDirective, WuDataTableDirective,
  // Phase 5
  WuRadioGroupDirective, WuRadioDirective, WuSliderDirective, WuColorPickerDirective,
  WuRatingDirective, WuSwitchDirective, WuPinInputDirective, WuComboboxDirective,
  WuTagInputDirective, WuNumberInputDirective, WuMultiSelectDirective,
  // Phase 6
  WuStatDirective, WuTimelineDirective, WuTimelineItemDirective, WuTagDirective,
  WuKbdDirective, WuCodeDirective, WuCopyButtonDirective, WuCarouselDirective,
  WuListDirective, WuListItemDirective, WuDescriptionListDirective,
  WuCalloutDirective, WuMeterDirective, WuCollapseDirective,
  // Phase 7
  WuDrawerDirective, WuContextMenuDirective, WuDropdownDirective,
  WuTreeDirective, WuTreeItemDirective, WuBottomNavDirective, WuBottomNavItemDirective,
  WuMegaMenuDirective, WuNotificationCenterDirective, WuScrollAreaDirective,
  WuSplitPaneDirective, WuSpeedDialDirective,
  // Phase 9
  WuLightboxDirective, WuGalleryDirective, WuVirtualListDirective, WuSortableDirective,
  WuKanbanDirective, WuKanbanColumnDirective, WuMentionDirective,
  WuQrCodeDirective, WuVideoDirective,
];

/**
 * Import this module to use WeldUI Web Components in Angular templates.
 *
 * @example
 * // app.module.ts
 * import { WeldUIModule } from '@weldui/angular';
 *
 * @NgModule({
 *   imports: [WeldUIModule],
 *   ...
 * })
 * export class AppModule {}
 *
 * // In template:
 * <wu-button variant="primary" (wuClick)="handleClick($event)">
 *   Save
 * </wu-button>
 */
@NgModule({
  imports: [CommonModule, ...DIRECTIVES],
  exports: [...DIRECTIVES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeldUIModule {}
