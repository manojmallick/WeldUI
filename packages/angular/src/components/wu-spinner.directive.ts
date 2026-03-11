import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-spinner', standalone: true })
export class WuSpinnerDirective {
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() label?: string;
}
