// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuGalleryProps = {
  columns?: number;
  gap?: string;
  onWuClick?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Gallery = forwardRef<HTMLElement, WuGalleryProps>(
  ({ onWuClick, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuClick) return;
      const handler = (e: Event) => onWuClick(e as CustomEvent);
      el.addEventListener('wu-click', handler);
      return () => el.removeEventListener('wu-click', handler);
    }, [onWuClick, resolvedRef]);
    return React.createElement('wu-gallery', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Gallery.displayName = 'WuGallery';
