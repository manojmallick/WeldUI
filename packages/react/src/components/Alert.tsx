// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuAlertProps = {
  variant?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  dismissible?: boolean;
  onWuDismiss?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Alert = forwardRef<HTMLElement, WuAlertProps>(
  ({ onWuDismiss, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuDismiss) return;
      const handler = (e: Event) => onWuDismiss(e as CustomEvent);
      el.addEventListener('wu-dismiss', handler);
      return () => el.removeEventListener('wu-dismiss', handler);
    }, [onWuDismiss, resolvedRef]);
    return React.createElement('wu-alert', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Alert.displayName = 'WuAlert';
