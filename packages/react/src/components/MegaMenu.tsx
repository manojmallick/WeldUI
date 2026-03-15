// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuMegaMenuProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const MegaMenu = forwardRef<HTMLElement, WuMegaMenuProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-mega-menu', { ref, class: className, style, ...props }, children);
  }
);
MegaMenu.displayName = 'WuMegaMenu';
