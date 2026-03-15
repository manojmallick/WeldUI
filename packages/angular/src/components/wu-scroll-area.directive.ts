import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-scroll-area', standalone: true })
export class WuScrollAreaDirective {
  @Input() maxHeight?: string;
  @Input() maxWidth?: string;
  @Input() orientation?: 'vertical' | 'horizontal' | 'both';
}
