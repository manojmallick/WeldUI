// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuDividerProps = {
  vertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Divider = forwardRef<HTMLElement, WuDividerProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-divider', { ref, class: className, style, ...props }, children);
  }
);
Divider.displayName = 'WuDivider';
