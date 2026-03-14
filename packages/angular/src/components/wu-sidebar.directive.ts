import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-sidebar', standalone: true })
export class WuSidebarDirective implements OnInit, OnDestroy {
  @Input() collapsed?: boolean;
  @Input() hideToggle?: boolean;

  @Output() wuCollapse = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private handler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.handler = (e: Event) => this.wuCollapse.emit(e as CustomEvent);
    this.el.addEventListener('wu-collapse', this.handler);
  }

  ngOnDestroy() {
    if (this.handler) this.el.removeEventListener('wu-collapse', this.handler);
  }
}

@Directive({ selector: 'wu-sidebar-item', standalone: true })
export class WuSidebarItemDirective implements OnInit, OnDestroy {
  @Input() href?: string;
  @Input() active?: boolean;
  @Input() disabled?: boolean;
  @Input() collapsed?: boolean;

  @Output() wuNav = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private handler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.handler = (e: Event) => this.wuNav.emit(e as CustomEvent);
    this.el.addEventListener('wu-nav', this.handler);
  }

  ngOnDestroy() {
    if (this.handler) this.el.removeEventListener('wu-nav', this.handler);
  }
}
