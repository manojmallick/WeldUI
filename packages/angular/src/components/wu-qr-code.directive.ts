import { Directive, Input } from '@angular/core';

@Directive({ selector: 'wu-qr-code', standalone: true })
export class WuQrCodeDirective {
  @Input() value?: string;
  @Input() size?: number;
  @Input() errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
}
