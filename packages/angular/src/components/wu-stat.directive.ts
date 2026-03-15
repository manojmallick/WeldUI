import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-stat', standalone: true })
export class WuStatDirective {
  @Input() label?: string;
  @Input() value?: string;
  @Input() delta?: string;
  @Input() trend?: 'up' | 'down' | 'neutral';
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() loading?: boolean;
}
