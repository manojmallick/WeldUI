import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-navbar', standalone: true })
export class WuNavbarDirective implements OnInit, OnDestroy {
  @Input() sticky?: boolean;
  @Input() fixed?: boolean;

  @Output() wuMenuOpen  = new EventEmitter<CustomEvent>();
  @Output() wuMenuClose = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private openHandler?:  (e: Event) => void;
  private closeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.openHandler  = (e: Event) => this.wuMenuOpen.emit(e as CustomEvent);
    this.closeHandler = (e: Event) => this.wuMenuClose.emit(e as CustomEvent);
    this.el.addEventListener('wu-menu-open',  this.openHandler);
    this.el.addEventListener('wu-menu-close', this.closeHandler);
  }

  ngOnDestroy() {
    if (this.openHandler)  this.el.removeEventListener('wu-menu-open',  this.openHandler);
    if (this.closeHandler) this.el.removeEventListener('wu-menu-close', this.closeHandler);
  }
}
