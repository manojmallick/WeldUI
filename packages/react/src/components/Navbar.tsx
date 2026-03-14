// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuNavbarProps = {
  sticky?: boolean;
  fixed?: boolean;
  onWuMenuOpen?: (event: CustomEvent) => void;
  onWuMenuClose?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Navbar = forwardRef<HTMLElement, WuNavbarProps>(
  ({ onWuMenuOpen, onWuMenuClose, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;

    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const handlers: [string, (e: Event) => void][] = [];
      if (onWuMenuOpen) { const h = (e: Event) => onWuMenuOpen(e as CustomEvent); el.addEventListener('wu-menu-open', h); handlers.push(['wu-menu-open', h]); }
      if (onWuMenuClose) { const h = (e: Event) => onWuMenuClose(e as CustomEvent); el.addEventListener('wu-menu-close', h); handlers.push(['wu-menu-close', h]); }
      return () => handlers.forEach(([ev, h]) => el.removeEventListener(ev, h));
    }, [onWuMenuOpen, onWuMenuClose, resolvedRef]);

    return React.createElement('wu-navbar', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);

Navbar.displayName = 'WuNavbar';
