// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuColorPickerProps = {
  value?: string;
  alpha?: boolean;
  format?: 'hex' | 'rgb' | 'hsl';
  disabled?: boolean;
  label?: string;
  onWuChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const ColorPicker = forwardRef<HTMLElement, WuColorPickerProps>(
  ({ onWuChange, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuChange) return;
      const handler = (e: Event) => onWuChange(e as CustomEvent);
      el.addEventListener('wu-change', handler);
      return () => el.removeEventListener('wu-change', handler);
    }, [onWuChange, resolvedRef]);
    return React.createElement('wu-color-picker', { ref: resolvedRef, class: className, style, ...props });
  }
);
ColorPicker.displayName = 'WuColorPicker';
