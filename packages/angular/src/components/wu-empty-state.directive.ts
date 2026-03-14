import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-empty-state', standalone: true })
export class WuEmptyStateDirective {
  @Input() title?: string;
  @Input() description?: string;
}
