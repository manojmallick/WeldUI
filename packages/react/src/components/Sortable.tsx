// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuSortableProps = {
  group?: string;
  animation?: number;
  disabled?: boolean;
  onWuSortEnd?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Sortable = forwardRef<HTMLElement, WuSortableProps>(
  ({ onWuSortEnd, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuSortEnd) return;
      const handler = (e: Event) => onWuSortEnd(e as CustomEvent);
      el.addEventListener('wu-sort-end', handler);
      return () => el.removeEventListener('wu-sort-end', handler);
    }, [onWuSortEnd, resolvedRef]);
    return React.createElement('wu-sortable', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Sortable.displayName = 'WuSortable';
