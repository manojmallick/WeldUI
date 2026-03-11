import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-progress', standalone: true })
export class WuProgressDirective {
  @Input() value?: number;
  @Input() min?: number;
  @Input() max?: number;
  @Input() indeterminate?: boolean;
  @Input() showLabel?: boolean;
  @Input() size?: 'sm' | 'md' | 'lg';
}
