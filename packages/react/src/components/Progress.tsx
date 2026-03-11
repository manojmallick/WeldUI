// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuProgressProps = {
  value?: number;
  min?: number;
  max?: number;
  indeterminate?: boolean;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
};

export const Progress = forwardRef<HTMLElement, WuProgressProps>(
  ({ className, style, ...props }, ref) => {
    return React.createElement('wu-progress', { ref, class: className, style, ...props });
  }
);
Progress.displayName = 'WuProgress';
