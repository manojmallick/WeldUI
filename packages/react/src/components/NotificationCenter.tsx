// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuNotificationCenterProps = {
  placement?: 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start';
  onWuDismiss?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const NotificationCenter = forwardRef<HTMLElement, WuNotificationCenterProps>(
  ({ onWuDismiss, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuDismiss) return;
      const handler = (e: Event) => onWuDismiss(e as CustomEvent);
      el.addEventListener('wu-dismiss', handler);
      return () => el.removeEventListener('wu-dismiss', handler);
    }, [onWuDismiss, resolvedRef]);
    return React.createElement('wu-notification-center', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
NotificationCenter.displayName = 'WuNotificationCenter';
