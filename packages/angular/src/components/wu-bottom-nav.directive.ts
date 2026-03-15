import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-bottom-nav', standalone: true })
export class WuBottomNavDirective implements OnInit, OnDestroy {
  @Output() wuChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.changeHandler = (e: Event) => this.wuChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
  }
}

@Directive({ selector: 'wu-bottom-nav-item', standalone: true })
export class WuBottomNavItemDirective {
  @Input() label?: string;
  @Input() href?: string;
  @Input() active?: boolean;
  @Input() disabled?: boolean;
}
