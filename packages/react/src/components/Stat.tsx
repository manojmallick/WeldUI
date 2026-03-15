// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuStatProps = {
  label?: string;
  value?: string;
  delta?: string;
  trend?: 'up' | 'down' | 'neutral';
  prefix?: string;
  suffix?: string;
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Stat = forwardRef<HTMLElement, WuStatProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-stat', { ref, class: className, style, ...props }, children);
  }
);
Stat.displayName = 'WuStat';
