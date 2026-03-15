import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-code', standalone: true })
export class WuCodeDirective {
  @Input() language?: string;
}
