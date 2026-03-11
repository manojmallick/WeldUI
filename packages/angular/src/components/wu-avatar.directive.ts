import { Directive, Input } from '@angular/core';

/**
 * Directive wrapper for the <wu-avatar> Web Component.
 */
@Directive({
  selector: 'wu-avatar',
  standalone: true,
})
export class WuAvatarDirective {
  @Input() src?: string;
  @Input() alt?: string;
  @Input() initials?: string;
  @Input() size?: 'sm' | 'md' | 'lg' | 'xl';
}
