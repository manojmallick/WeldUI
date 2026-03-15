// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuLightboxProps = {
  open?: boolean;
  currentIndex?: number;
  onWuOpen?: (event: CustomEvent) => void;
  onWuClose?: (event: CustomEvent) => void;
  onWuChange?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Lightbox = forwardRef<HTMLElement, WuLightboxProps>(
  ({ onWuOpen, onWuClose, onWuChange, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const openHandler = (e: Event) => onWuOpen?.(e as CustomEvent);
      const closeHandler = (e: Event) => onWuClose?.(e as CustomEvent);
      const changeHandler = (e: Event) => onWuChange?.(e as CustomEvent);
      el.addEventListener('wu-open', openHandler);
      el.addEventListener('wu-close', closeHandler);
      el.addEventListener('wu-change', changeHandler);
      return () => {
        el.removeEventListener('wu-open', openHandler);
        el.removeEventListener('wu-close', closeHandler);
        el.removeEventListener('wu-change', changeHandler);
      };
    }, [onWuOpen, onWuClose, onWuChange, resolvedRef]);
    return React.createElement('wu-lightbox', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Lightbox.displayName = 'WuLightbox';
