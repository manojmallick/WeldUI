// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuDescriptionListProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const DescriptionList = forwardRef<HTMLElement, WuDescriptionListProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-dl', { ref, class: className, style, ...props }, children);
  }
);
DescriptionList.displayName = 'WuDl';
