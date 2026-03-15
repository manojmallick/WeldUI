// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuCopyButtonProps = {
  value?: string;
  label?: string;
  successLabel?: string;
  feedbackDuration?: number;
  onWuCopy?: (event: CustomEvent) => void;
  onWuError?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const CopyButton = forwardRef<HTMLElement, WuCopyButtonProps>(
  ({ onWuCopy, onWuError, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const copyHandler = (e: Event) => onWuCopy?.(e as CustomEvent);
      const errorHandler = (e: Event) => onWuError?.(e as CustomEvent);
      el.addEventListener('wu-copy', copyHandler);
      el.addEventListener('wu-error', errorHandler);
      return () => {
        el.removeEventListener('wu-copy', copyHandler);
        el.removeEventListener('wu-error', errorHandler);
      };
    }, [onWuCopy, onWuError, resolvedRef]);
    return React.createElement('wu-copy-button', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
CopyButton.displayName = 'WuCopyButton';
