import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-timeline', standalone: true })
export class WuTimelineDirective {
  @Input() direction?: 'vertical' | 'horizontal';
}

@Directive({ selector: 'wu-timeline-item', standalone: true })
export class WuTimelineItemDirective {
  @Input() label?: string;
  @Input() timestamp?: string;
  @Input() status?: string;
}
