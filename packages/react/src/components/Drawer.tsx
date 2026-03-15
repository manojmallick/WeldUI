// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuDrawerProps = {
  open?: boolean;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'full';
  label?: string;
  noBackdrop?: boolean;
  onWuOpen?: (event: CustomEvent) => void;
  onWuClose?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Drawer = forwardRef<HTMLElement, WuDrawerProps>(
  ({ onWuOpen, onWuClose, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const openHandler = (e: Event) => onWuOpen?.(e as CustomEvent);
      const closeHandler = (e: Event) => onWuClose?.(e as CustomEvent);
      el.addEventListener('wu-open', openHandler);
      el.addEventListener('wu-close', closeHandler);
      return () => {
        el.removeEventListener('wu-open', openHandler);
        el.removeEventListener('wu-close', closeHandler);
      };
    }, [onWuOpen, onWuClose, resolvedRef]);
    return React.createElement('wu-drawer', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Drawer.displayName = 'WuDrawer';
