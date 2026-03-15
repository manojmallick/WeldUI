// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuPinInputProps = {
  length?: number;
  value?: string;
  type?: 'text' | 'number' | 'password';
  disabled?: boolean;
  placeholder?: string;
  onWuChange?: (event: CustomEvent) => void;
  onWuComplete?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const PinInput = forwardRef<HTMLElement, WuPinInputProps>(
  ({ onWuChange, onWuComplete, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const changeHandler = (e: Event) => onWuChange?.(e as CustomEvent);
      const completeHandler = (e: Event) => onWuComplete?.(e as CustomEvent);
      el.addEventListener('wu-change', changeHandler);
      el.addEventListener('wu-complete', completeHandler);
      return () => {
        el.removeEventListener('wu-change', changeHandler);
        el.removeEventListener('wu-complete', completeHandler);
      };
    }, [onWuChange, onWuComplete, resolvedRef]);
    return React.createElement('wu-pin-input', { ref: resolvedRef, class: className, style, ...props });
  }
);
PinInput.displayName = 'WuPinInput';
