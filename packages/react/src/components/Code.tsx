// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuCodeProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Code = forwardRef<HTMLElement, WuCodeProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-code', { ref, class: className, style, ...props }, children);
  }
);
Code.displayName = 'WuCode';
