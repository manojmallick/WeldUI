// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuTextareaProps = {
  value?: string;
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  maxlength?: number;
  rows?: number;
  name?: string;
  onWuChange?: (event: CustomEvent) => void;
  onWuBlur?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Textarea = forwardRef<HTMLElement, WuTextareaProps>(
  ({ onWuChange, onWuBlur, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;

    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const onChange = (e: Event) => onWuChange?.(e as CustomEvent);
      const onBlur = (e: Event) => onWuBlur?.(e as CustomEvent);
      el.addEventListener('wu-change', onChange);
      el.addEventListener('wu-blur', onBlur);
      return () => {
        el.removeEventListener('wu-change', onChange);
        el.removeEventListener('wu-blur', onBlur);
      };
    }, [onWuChange, onWuBlur, resolvedRef]);

    return React.createElement('wu-textarea', { ref: resolvedRef, class: className, style, ...props });
  }
);

Textarea.displayName = 'WuTextarea';
