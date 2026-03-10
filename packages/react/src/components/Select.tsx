// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type SelectOption = { value: string; label: string; disabled?: boolean };

type WuSelectProps = {
  value?: string;
  options?: SelectOption[];
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  onWuChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Select = forwardRef<HTMLElement, WuSelectProps>(
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

    return React.createElement('wu-select', { ref: resolvedRef, class: className, style, ...props });
  }
);

Select.displayName = 'WuSelect';
