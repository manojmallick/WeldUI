import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-lightbox', standalone: true })
export class WuLightboxDirective implements OnInit, OnDestroy {
  @Input() open?: boolean;
  @Input() currentIndex?: number;

  @Output() wuOpen = new EventEmitter<CustomEvent>();
  @Output() wuClose = new EventEmitter<CustomEvent>();
  @Output() wuChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private openHandler?: (e: Event) => void;
  private closeHandler?: (e: Event) => void;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.openHandler = (e: Event) => this.wuOpen.emit(e as CustomEvent);
    this.closeHandler = (e: Event) => this.wuClose.emit(e as CustomEvent);
    this.changeHandler = (e: Event) => this.wuChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-open', this.openHandler);
    this.el.addEventListener('wu-close', this.closeHandler);
    this.el.addEventListener('wu-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.openHandler) this.el.removeEventListener('wu-open', this.openHandler);
    if (this.closeHandler) this.el.removeEventListener('wu-close', this.closeHandler);
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
  }
}
