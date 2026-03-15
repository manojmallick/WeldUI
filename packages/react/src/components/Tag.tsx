// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuTagProps = {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  dismissible?: boolean;
  onWuClose?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Tag = forwardRef<HTMLElement, WuTagProps>(
  ({ onWuClose, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuClose) return;
      const handler = (e: Event) => onWuClose(e as CustomEvent);
      el.addEventListener('wu-close', handler);
      return () => el.removeEventListener('wu-close', handler);
    }, [onWuClose, resolvedRef]);
    return React.createElement('wu-tag', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Tag.displayName = 'WuTag';
