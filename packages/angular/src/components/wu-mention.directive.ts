import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-mention', standalone: true })
export class WuMentionDirective implements OnInit, OnDestroy {
  @Input() trigger?: string;
  @Input() value?: string;
  @Input() placeholder?: string;
  @Input() disabled?: boolean;

  @Output() wuSelect = new EventEmitter<CustomEvent>();
  @Output() wuChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private selectHandler?: (e: Event) => void;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.selectHandler = (e: Event) => this.wuSelect.emit(e as CustomEvent);
    this.changeHandler = (e: Event) => this.wuChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-select', this.selectHandler);
    this.el.addEventListener('wu-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.selectHandler) this.el.removeEventListener('wu-select', this.selectHandler);
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
  }
}
