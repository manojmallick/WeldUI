// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuSplitPaneProps = {
  direction?: 'horizontal' | 'vertical';
  initialSize?: number;
  minSize?: number;
  maxSize?: number;
  onWuResize?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const SplitPane = forwardRef<HTMLElement, WuSplitPaneProps>(
  ({ onWuResize, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuResize) return;
      const handler = (e: Event) => onWuResize(e as CustomEvent);
      el.addEventListener('wu-resize', handler);
      return () => el.removeEventListener('wu-resize', handler);
    }, [onWuResize, resolvedRef]);
    return React.createElement('wu-split-pane', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
SplitPane.displayName = 'WuSplitPane';
