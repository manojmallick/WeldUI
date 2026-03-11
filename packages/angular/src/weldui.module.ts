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
