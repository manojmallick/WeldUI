// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuSpeedDialProps = {
  icon?: string;
  placement?: 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start';
  direction?: 'up' | 'down' | 'left' | 'right';
  onWuActionClick?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const SpeedDial = forwardRef<HTMLElement, WuSpeedDialProps>(
  ({ onWuActionClick, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuActionClick) return;
      const handler = (e: Event) => onWuActionClick(e as CustomEvent);
      el.addEventListener('wu-action-click', handler);
      return () => el.removeEventListener('wu-action-click', handler);
    }, [onWuActionClick, resolvedRef]);
    return React.createElement('wu-speed-dial', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
SpeedDial.displayName = 'WuSpeedDial';
