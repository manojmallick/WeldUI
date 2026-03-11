import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-breadcrumb', standalone: true })
export class WuBreadcrumbDirective {
  @Input() separator?: string;
  @Input() label?: string;
}

@Directive({ selector: 'wu-breadcrumb-item', standalone: true })
export class WuBreadcrumbItemDirective {
  @Input() href?: string;
  @Input() current?: boolean;
}
