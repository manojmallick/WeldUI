// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuMultiSelectProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  maxItems?: number;
  label?: string;
  name?: string;
  onWuChange?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const MultiSelect = forwardRef<HTMLElement, WuMultiSelectProps>(
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
    return React.createElement('wu-multi-select', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
MultiSelect.displayName = 'WuMultiSelect';
