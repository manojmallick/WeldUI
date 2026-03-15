// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuComboboxProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  loading?: boolean;
  label?: string;
  name?: string;
  onWuChange?: (event: CustomEvent) => void;
  onWuInput?: (event: CustomEvent) => void;
  onWuClear?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Combobox = forwardRef<HTMLElement, WuComboboxProps>(
  ({ onWuChange, onWuInput, onWuClear, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const changeHandler = (e: Event) => onWuChange?.(e as CustomEvent);
      const inputHandler = (e: Event) => onWuInput?.(e as CustomEvent);
      const clearHandler = (e: Event) => onWuClear?.(e as CustomEvent);
      el.addEventListener('wu-change', changeHandler);
      el.addEventListener('wu-input', inputHandler);
      el.addEventListener('wu-clear', clearHandler);
      return () => {
        el.removeEventListener('wu-change', changeHandler);
        el.removeEventListener('wu-input', inputHandler);
        el.removeEventListener('wu-clear', clearHandler);
      };
    }, [onWuChange, onWuInput, onWuClear, resolvedRef]);
    return React.createElement('wu-combobox', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Combobox.displayName = 'WuCombobox';
