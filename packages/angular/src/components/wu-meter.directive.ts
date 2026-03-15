import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-meter', standalone: true })
export class WuMeterDirective {
  @Input() value?: number;
  @Input() min?: number;
  @Input() max?: number;
  @Input() label?: string;
  @Input() unit?: string;
  @Input() variant?: string;
}
