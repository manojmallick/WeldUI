// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuDatePickerProps = {
  value?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  open?: boolean;
  onWuDateChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const DatePicker = forwardRef<HTMLElement, WuDatePickerProps>(
  ({ onWuDateChange, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuDateChange) return;
      const handler = (e: Event) => onWuDateChange(e as CustomEvent);
      el.addEventListener('wu-date-change', handler);
      return () => el.removeEventListener('wu-date-change', handler);
    }, [onWuDateChange, resolvedRef]);
    return React.createElement('wu-date-picker', { ref: resolvedRef, class: className, style, ...props });
  }
);
DatePicker.displayName = 'WuDatePicker';
