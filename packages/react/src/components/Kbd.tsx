// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuKbdProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Kbd = forwardRef<HTMLElement, WuKbdProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-kbd', { ref, class: className, style, ...props }, children);
  }
);
Kbd.displayName = 'WuKbd';
