// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuSpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Spinner = forwardRef<HTMLElement, WuSpinnerProps>(
  ({ className, style, ...props }, ref) => {
    return React.createElement('wu-spinner', { ref, class: className, style, ...props });
  }
);
Spinner.displayName = 'WuSpinner';
