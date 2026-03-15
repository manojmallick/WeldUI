import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-dropdown', standalone: true })
export class WuDropdownDirective implements OnInit, OnDestroy {
  @Input() label?: string;
  @Input() placement?: string;
  @Input() disabled?: boolean;

  @Output() wuSelect = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private selectHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.selectHandler = (e: Event) => this.wuSelect.emit(e as CustomEvent);
    this.el.addEventListener('wu-select', this.selectHandler);
  }

  ngOnDestroy() {
    if (this.selectHandler) this.el.removeEventListener('wu-select', this.selectHandler);
  }
}
