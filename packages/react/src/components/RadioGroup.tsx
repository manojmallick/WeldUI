// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuRadioGroupProps = {
  value?: string;
  name?: string;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  onWuChange?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const RadioGroup = forwardRef<HTMLElement, WuRadioGroupProps>(
  ({ onWuChange, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuChange) return;
      const handler = (e: Event) => onWuChange(e as CustomEvent);
      el.addEventListener('wu-change', handler);
      return () => el.removeEventListener('wu-change', handler);
    }, [onWuChange, resolvedRef]);
    return React.createElement('wu-radio-group', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
RadioGroup.displayName = 'WuRadioGroup';

type WuRadioProps = {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Radio = forwardRef<HTMLElement, WuRadioProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-radio', { ref, class: className, style, ...props }, children);
  }
);
Radio.displayName = 'WuRadio';
