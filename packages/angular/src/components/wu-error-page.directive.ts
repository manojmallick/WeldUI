import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-error-page', standalone: true })
export class WuErrorPageDirective {
  @Input() code?: string;
  @Input() title?: string;
  @Input() description?: string;
}
