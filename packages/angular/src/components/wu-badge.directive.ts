import { Directive, Input } from '@angular/core';

/**
 * Directive wrapper for the <wu-badge> Web Component.
 */
@Directive({
  selector: 'wu-badge',
  standalone: true,
})
export class WuBadgeDirective {
  @Input() variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
}
