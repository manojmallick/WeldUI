import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@weldui/core';

import { WuButtonDirective } from './components/wu-button.directive.js';
import { WuBadgeDirective } from './components/wu-badge.directive.js';
import { WuAvatarDirective } from './components/wu-avatar.directive.js';
import { WuInputDirective } from './components/wu-input.directive.js';
import { WuTextareaDirective } from './components/wu-textarea.directive.js';
import { WuSelectDirective } from './components/wu-select.directive.js';
import { WuCheckboxDirective } from './components/wu-checkbox.directive.js';
import { WuToggleDirective } from './components/wu-toggle.directive.js';

const DIRECTIVES = [
  WuButtonDirective,
  WuBadgeDirective,
  WuAvatarDirective,
  WuInputDirective,
  WuTextareaDirective,
  WuSelectDirective,
  WuCheckboxDirective,
  WuToggleDirective,
];

/**
 * Imports this module to use WeldUI Web Components in Angular templates.
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
