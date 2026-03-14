// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuEmptyStateProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const EmptyState = forwardRef<HTMLElement, WuEmptyStateProps>(
  ({ children, className, style, ...props }, ref) =>
    React.createElement('wu-empty-state', { ref, class: className, style, ...props }, children)
);

EmptyState.displayName = 'WuEmptyState';
