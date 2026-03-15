import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-callout', standalone: true })
export class WuCalloutDirective {
  @Input() variant?: 'info' | 'success' | 'warning' | 'danger';
  @Input() heading?: string;
}
