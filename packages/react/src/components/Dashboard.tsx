// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuDashboardProps = {
  'full-width'?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Dashboard = forwardRef<HTMLElement, WuDashboardProps>(
  ({ children, className, style, ...props }, ref) =>
    React.createElement('wu-dashboard', { ref, class: className, style, ...props }, children)
);

Dashboard.displayName = 'WuDashboard';
