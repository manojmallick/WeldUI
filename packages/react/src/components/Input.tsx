// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuInputProps = {
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  onWuChange?: (event: CustomEvent) => void;
  onWuBlur?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Input = forwardRef<HTMLElement, WuInputProps>(
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

    return React.createElement('wu-input', { ref: resolvedRef, class: className, style, ...props });
  }
);

Input.displayName = 'WuInput';
