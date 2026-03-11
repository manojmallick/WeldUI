// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuCommandItem = {
  id: string;
  label: string;
  group?: string;
  shortcut?: string;
  icon?: string;
  keywords?: string[];
};

type WuCommandProps = {
  open?: boolean;
  items?: WuCommandItem[];
  placeholder?: string;
  emptyMessage?: string;
  onWuSelect?: (event: CustomEvent) => void;
  onWuClose?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Command = forwardRef<HTMLElement, WuCommandProps>(
  ({ items, onWuSelect, onWuClose, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current as any;
      if (!el) return;
      if (items !== undefined) el.items = items;
    }, [items]);
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const selectHandler = (e: Event) => onWuSelect?.(e as CustomEvent);
      const closeHandler = (e: Event) => onWuClose?.(e as CustomEvent);
      el.addEventListener('wu-select', selectHandler);
      el.addEventListener('wu-close', closeHandler);
      return () => {
        el.removeEventListener('wu-select', selectHandler);
        el.removeEventListener('wu-close', closeHandler);
      };
    }, [onWuSelect, onWuClose, resolvedRef]);
    return React.createElement('wu-command', { ref: resolvedRef, class: className, style, ...props });
  }
);
Command.displayName = 'WuCommand';
