// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuRatingProps = {
  value?: number;
  max?: number;
  precision?: number;
  readonly?: boolean;
  disabled?: boolean;
  label?: string;
  onWuChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Rating = forwardRef<HTMLElement, WuRatingProps>(
  ({ onWuChange, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuChange) return;
      const handler = (e: Event) => onWuChange(e as CustomEvent);
      el.addEventListener('wu-change', handler);
      return () => el.removeEventListener('wu-change', handler);
    }, [onWuChange, resolvedRef]);
    return React.createElement('wu-rating', { ref: resolvedRef, class: className, style, ...props });
  }
);
Rating.displayName = 'WuRating';
