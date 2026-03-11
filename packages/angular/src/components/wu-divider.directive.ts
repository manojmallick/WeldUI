import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-divider', standalone: true })
export class WuDividerDirective {
  @Input() vertical?: boolean;
}
