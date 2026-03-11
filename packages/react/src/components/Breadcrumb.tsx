// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuBreadcrumbProps = {
  separator?: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Breadcrumb = forwardRef<HTMLElement, WuBreadcrumbProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-breadcrumb', { ref, class: className, style, ...props }, children);
  }
);
Breadcrumb.displayName = 'WuBreadcrumb';

type WuBreadcrumbItemProps = {
  href?: string;
  current?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const BreadcrumbItem = forwardRef<HTMLElement, WuBreadcrumbItemProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-breadcrumb-item', { ref, class: className, style, ...props }, children);
  }
);
BreadcrumbItem.displayName = 'WuBreadcrumbItem';
