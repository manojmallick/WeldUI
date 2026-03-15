// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuMentionProps = {
  trigger?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onWuSelect?: (event: CustomEvent) => void;
  onWuChange?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Mention = forwardRef<HTMLElement, WuMentionProps>(
  ({ onWuSelect, onWuChange, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const selectHandler = (e: Event) => onWuSelect?.(e as CustomEvent);
      const changeHandler = (e: Event) => onWuChange?.(e as CustomEvent);
      el.addEventListener('wu-select', selectHandler);
      el.addEventListener('wu-change', changeHandler);
      return () => {
        el.removeEventListener('wu-select', selectHandler);
        el.removeEventListener('wu-change', changeHandler);
      };
    }, [onWuSelect, onWuChange, resolvedRef]);
    return React.createElement('wu-mention', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Mention.displayName = 'WuMention';
