// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuSearchProps = {
  value?: string;
  placeholder?: string;
  loading?: boolean;
  clearable?: boolean;
  debounce?: number;
  onWuSearch?: (event: CustomEvent) => void;
  onWuClear?: (event: CustomEvent) => void;
  onWuChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Search = forwardRef<HTMLElement, WuSearchProps>(
  ({ onWuSearch, onWuClear, onWuChange, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;

    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const handlers: [string, (e: Event) => void][] = [];
      if (onWuSearch) { const h = (e: Event) => onWuSearch(e as CustomEvent); el.addEventListener('wu-search', h); handlers.push(['wu-search', h]); }
      if (onWuClear)  { const h = (e: Event) => onWuClear(e as CustomEvent);  el.addEventListener('wu-clear',  h); handlers.push(['wu-clear',  h]); }
      if (onWuChange) { const h = (e: Event) => onWuChange(e as CustomEvent); el.addEventListener('wu-change', h); handlers.push(['wu-change', h]); }
      return () => handlers.forEach(([ev, h]) => el.removeEventListener(ev, h));
    }, [onWuSearch, onWuClear, onWuChange, resolvedRef]);

    return React.createElement('wu-search', { ref: resolvedRef, class: className, style, ...props });
  }
);

Search.displayName = 'WuSearch';
