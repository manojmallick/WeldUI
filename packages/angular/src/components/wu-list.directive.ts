import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-list', standalone: true })
export class WuListDirective {
  @Input() variant?: string;
}

@Directive({ selector: 'wu-list-item', standalone: true })
export class WuListItemDirective {}
