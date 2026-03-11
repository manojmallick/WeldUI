// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuSkeletonProps = {
  variant?: 'text' | 'circle' | 'rect';
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Skeleton = forwardRef<HTMLElement, WuSkeletonProps>(
  ({ className, style, ...props }, ref) => {
    return React.createElement('wu-skeleton', { ref, class: className, style, ...props });
  }
);
Skeleton.displayName = 'WuSkeleton';
