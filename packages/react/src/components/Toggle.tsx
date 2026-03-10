// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuToggleProps = {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  required?: boolean;
  onWuChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Toggle = forwardRef<HTMLElement, WuToggleProps>(
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

    return React.createElement('wu-toggle', { ref: resolvedRef, class: className, style, ...props });
  }
);

Toggle.displayName = 'WuToggle';
