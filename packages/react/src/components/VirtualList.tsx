// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuVirtualListProps = {
  itemHeight?: number;
  overscan?: number;
  onWuScroll?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const VirtualList = forwardRef<HTMLElement, WuVirtualListProps>(
  ({ onWuScroll, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuScroll) return;
      const handler = (e: Event) => onWuScroll(e as CustomEvent);
      el.addEventListener('wu-scroll', handler);
      return () => el.removeEventListener('wu-scroll', handler);
    }, [onWuScroll, resolvedRef]);
    return React.createElement('wu-virtual-list', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
VirtualList.displayName = 'WuVirtualList';
