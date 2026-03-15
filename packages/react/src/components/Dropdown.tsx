// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuDropdownProps = {
  label?: string;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  disabled?: boolean;
  onWuSelect?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Dropdown = forwardRef<HTMLElement, WuDropdownProps>(
  ({ onWuSelect, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuSelect) return;
      const handler = (e: Event) => onWuSelect(e as CustomEvent);
      el.addEventListener('wu-select', handler);
      return () => el.removeEventListener('wu-select', handler);
    }, [onWuSelect, resolvedRef]);
    return React.createElement('wu-dropdown', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Dropdown.displayName = 'WuDropdown';
