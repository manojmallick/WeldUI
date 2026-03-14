import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-dashboard', standalone: true })
export class WuDashboardDirective {
  @Input('full-width') fullWidth?: boolean;
}
