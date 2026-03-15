// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuBottomNavProps = {
  value?: string;
  onWuChange?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const BottomNav = forwardRef<HTMLElement, WuBottomNavProps>(
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
    return React.createElement('wu-bottom-nav', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
BottomNav.displayName = 'WuBottomNav';

type WuBottomNavItemProps = {
  value?: string;
  label?: string;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const BottomNavItem = forwardRef<HTMLElement, WuBottomNavItemProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-bottom-nav-item', { ref, class: className, style, ...props }, children);
  }
);
BottomNavItem.displayName = 'WuBottomNavItem';
