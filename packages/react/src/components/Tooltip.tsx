// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuTooltipProps = {
  content?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Tooltip = forwardRef<HTMLElement, WuTooltipProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-tooltip', { ref, class: className, style, ...props }, children);
  }
);
Tooltip.displayName = 'WuTooltip';
