// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuScrollAreaProps = {
  maxHeight?: string;
  maxWidth?: string;
  orientation?: 'vertical' | 'horizontal' | 'both';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ScrollArea = forwardRef<HTMLElement, WuScrollAreaProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-scroll-area', { ref, class: className, style, ...props }, children);
  }
);
ScrollArea.displayName = 'WuScrollArea';
