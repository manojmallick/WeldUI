import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@weldui/core';

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
 * <wu-button variant="primary" (wu-click)="handleClick($event)">
 *   Save
 * </wu-button>
 */
@NgModule({
  imports: [CommonModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow wu-* custom elements
})
export class WeldUIModule {}
