// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuErrorPageProps = {
  code?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ErrorPage = forwardRef<HTMLElement, WuErrorPageProps>(
  ({ children, className, style, ...props }, ref) =>
    React.createElement('wu-error-page', { ref, class: className, style, ...props }, children)
);

ErrorPage.displayName = 'WuErrorPage';
