// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuContextMenuProps = {
  onWuSelect?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ContextMenu = forwardRef<HTMLElement, WuContextMenuProps>(
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
    return React.createElement('wu-context-menu', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
ContextMenu.displayName = 'WuContextMenu';
