import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-accordion', standalone: true })
export class WuAccordionDirective {
  @Input() single?: boolean;
}

@Directive({ selector: 'wu-accordion-item', standalone: true })
export class WuAccordionItemDirective {
  @Input() summary?: string;
  @Input() open?: boolean;
  @Input() disabled?: boolean;
}
