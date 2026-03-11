import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-skeleton', standalone: true })
export class WuSkeletonDirective {
  @Input() variant?: 'text' | 'circle' | 'rect';
  @Input() width?: string;
  @Input() height?: string;
}
