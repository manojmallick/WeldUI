import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-tooltip', standalone: true })
export class WuTooltipDirective {
  @Input() content?: string;
  @Input() placement?: 'top' | 'bottom' | 'left' | 'right';
  @Input() delay?: number;
}
