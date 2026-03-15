// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuSliderProps = {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  label?: string;
  showValue?: boolean;
  onWuChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Slider = forwardRef<HTMLElement, WuSliderProps>(
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
    return React.createElement('wu-slider', { ref: resolvedRef, class: className, style, ...props });
  }
);
Slider.displayName = 'WuSlider';
