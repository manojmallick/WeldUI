// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuMeterProps = {
  value?: number;
  min?: number;
  max?: number;
  label?: string;
  unit?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
  style?: React.CSSProperties;
};

export const Meter = forwardRef<HTMLElement, WuMeterProps>(
  ({ className, style, ...props }, ref) => {
    return React.createElement('wu-meter', { ref, class: className, style, ...props });
  }
);
Meter.displayName = 'WuMeter';
