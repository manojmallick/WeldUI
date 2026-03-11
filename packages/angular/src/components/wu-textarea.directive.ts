import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Directive wrapper for the <wu-textarea> Web Component.
 * Implements ControlValueAccessor for Angular forms.
 */
@Directive({
  selector: 'wu-textarea',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WuTextareaDirective),
      multi: true,
    },
  ],
})
export class WuTextareaDirective implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() hint?: string;
  @Input() error?: string;
  @Input() disabled?: boolean;
  @Input() required?: boolean;
  @Input() rows?: number;
  @Input() maxlength?: number;
  @Input() name?: string;

  @Output() wuChange = new EventEmitter<CustomEvent>();
  @Output() wuBlur = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;
  private blurHandler?: (e: Event) => void;

  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor(elRef: ElementRef<HTMLElement>) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
    this.changeHandler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { value: string };
      this.onChange(detail.value);
      this.wuChange.emit(e as CustomEvent);
    };
    this.blurHandler = (e: Event) => {
      this.onTouched();
      this.wuBlur.emit(e as CustomEvent);
    };
    this.el.addEventListener('wu-change', this.changeHandler);
    this.el.addEventListener('wu-blur', this.blurHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
    if (this.blurHandler) this.el.removeEventListener('wu-blur', this.blurHandler);
  }

  writeValue(value: string): void {
    (this.el as HTMLElement & { value: string }).value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    (this.el as HTMLElement & { disabled: boolean }).disabled = isDisabled;
  }
}
