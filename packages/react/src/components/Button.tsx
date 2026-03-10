// AUTO-GENERATED — DO NOT EDIT
// Run: pnpm --filter @weldui/react generate

import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  onWuClick?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Button = forwardRef<HTMLElement, WuButtonProps>(
  ({ onWuClick, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;

    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuClick) return;
      const handler = (e: Event) => onWuClick(e as CustomEvent);
      el.addEventListener('wu-click', handler);
      return () => el.removeEventListener('wu-click', handler);
    }, [onWuClick, resolvedRef]);

    return React.createElement(
      'wu-button',
      { ref: resolvedRef, class: className, style, ...props },
      children
    );
  }
);

Button.displayName = 'WuButton';
