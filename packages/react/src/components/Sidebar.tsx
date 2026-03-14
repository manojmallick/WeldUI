// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuSidebarProps = {
  collapsed?: boolean;
  hideToggle?: boolean;
  onWuCollapse?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Sidebar = forwardRef<HTMLElement, WuSidebarProps>(
  ({ onWuCollapse, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;

    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuCollapse) return;
      const h = (e: Event) => onWuCollapse(e as CustomEvent);
      el.addEventListener('wu-collapse', h);
      return () => el.removeEventListener('wu-collapse', h);
    }, [onWuCollapse, resolvedRef]);

    return React.createElement('wu-sidebar', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);

Sidebar.displayName = 'WuSidebar';

type WuSidebarItemProps = {
  href?: string;
  active?: boolean;
  disabled?: boolean;
  collapsed?: boolean;
  onWuNav?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const SidebarItem = forwardRef<HTMLElement, WuSidebarItemProps>(
  ({ onWuNav, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;

    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuNav) return;
      const h = (e: Event) => onWuNav(e as CustomEvent);
      el.addEventListener('wu-nav', h);
      return () => el.removeEventListener('wu-nav', h);
    }, [onWuNav, resolvedRef]);

    return React.createElement('wu-sidebar-item', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);

SidebarItem.displayName = 'WuSidebarItem';
