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
 * Directive wrapper for the <wu-toggle> Web Component.
 * Implements ControlValueAccessor (boolean value) for Angular forms.
 */
@Directive({
  selector: 'wu-toggle',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WuToggleDirective),
      multi: true,
    },
  ],
})
export class WuToggleDirective implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() disabled?: boolean;
  @Input() label?: string;
  @Input('label-position') labelPosition?: 'start' | 'end';
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() name?: string;

  @Output() wuChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;

  private onChange: (checked: boolean) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor(elRef: ElementRef<HTMLElement>) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
    this.changeHandler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { checked: boolean };
      this.onTouched();
      this.onChange(detail.checked);
      this.wuChange.emit(e as CustomEvent);
    };
    this.el.addEventListener('wu-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
  }

  writeValue(checked: boolean): void {
    (this.el as HTMLElement & { checked: boolean }).checked = !!checked;
  }

  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    (this.el as HTMLElement & { disabled: boolean }).disabled = isDisabled;
  }
}
