import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-combobox', standalone: true })
export class WuComboboxDirective implements OnInit, OnDestroy {
  @Input() value?: string;
  @Input() placeholder?: string;
  @Input() disabled?: boolean;
  @Input() clearable?: boolean;
  @Input() loading?: boolean;
  @Input() label?: string;
  @Input() name?: string;

  @Output() wuChange = new EventEmitter<CustomEvent>();
  @Output() wuInput = new EventEmitter<CustomEvent>();
  @Output() wuClear = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;
  private inputHandler?: (e: Event) => void;
  private clearHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.changeHandler = (e: Event) => this.wuChange.emit(e as CustomEvent);
    this.inputHandler = (e: Event) => this.wuInput.emit(e as CustomEvent);
    this.clearHandler = (e: Event) => this.wuClear.emit(e as CustomEvent);
    this.el.addEventListener('wu-change', this.changeHandler);
    this.el.addEventListener('wu-input', this.inputHandler);
    this.el.addEventListener('wu-clear', this.clearHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
    if (this.inputHandler) this.el.removeEventListener('wu-input', this.inputHandler);
    if (this.clearHandler) this.el.removeEventListener('wu-clear', this.clearHandler);
  }
}
