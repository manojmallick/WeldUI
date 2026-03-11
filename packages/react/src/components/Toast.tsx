// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuToastProps = {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  duration?: number;
  dismissible?: boolean;
  onWuClose?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Toast = forwardRef<HTMLElement, WuToastProps>(
  ({ onWuClose, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuClose) return;
      const handler = (e: Event) => onWuClose(e as CustomEvent);
      el.addEventListener('wu-close', handler);
      return () => el.removeEventListener('wu-close', handler);
    }, [onWuClose, resolvedRef]);
    return React.createElement('wu-toast', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Toast.displayName = 'WuToast';

type WuToastProviderProps = {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  className?: string;
  style?: React.CSSProperties;
};

export const ToastProvider = forwardRef<HTMLElement, WuToastProviderProps>(
  ({ className, style, ...props }, ref) => {
    return React.createElement('wu-toast-provider', { ref, class: className, style, ...props });
  }
);
ToastProvider.displayName = 'WuToastProvider';
