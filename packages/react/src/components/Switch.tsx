// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuSwitchProps = {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition?: 'start' | 'end';
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  value?: string;
  required?: boolean;
  onWuChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Switch = forwardRef<HTMLElement, WuSwitchProps>(
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
    return React.createElement('wu-switch', { ref: resolvedRef, class: className, style, ...props });
  }
);
Switch.displayName = 'WuSwitch';
