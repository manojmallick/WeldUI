// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuBadgeProps = {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Badge = forwardRef<HTMLElement, WuBadgeProps>(
  ({ children, className, style, ...props }, ref) =>
    React.createElement('wu-badge', { ref, class: className, style, ...props }, children)
);

Badge.displayName = 'WuBadge';
