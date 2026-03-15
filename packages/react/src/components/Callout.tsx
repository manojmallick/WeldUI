// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuCalloutProps = {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  heading?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Callout = forwardRef<HTMLElement, WuCalloutProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-callout', { ref, class: className, style, ...props }, children);
  }
);
Callout.displayName = 'WuCallout';
