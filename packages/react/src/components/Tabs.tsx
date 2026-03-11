// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuTabsProps = {
  orientation?: 'horizontal' | 'vertical';
  activePanel?: string;
  onWuTabChange?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Tabs = forwardRef<HTMLElement, WuTabsProps>(
  ({ onWuTabChange, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuTabChange) return;
      const handler = (e: Event) => onWuTabChange(e as CustomEvent);
      el.addEventListener('wu-tab-change', handler);
      return () => el.removeEventListener('wu-tab-change', handler);
    }, [onWuTabChange, resolvedRef]);
    return React.createElement('wu-tabs', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Tabs.displayName = 'WuTabs';

type WuTabProps = {
  panel?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Tab = forwardRef<HTMLElement, WuTabProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-tab', { ref, class: className, style, ...props }, children);
  }
);
Tab.displayName = 'WuTab';

type WuTabPanelProps = {
  name?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const TabPanel = forwardRef<HTMLElement, WuTabPanelProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-tab-panel', { ref, class: className, style, ...props }, children);
  }
);
TabPanel.displayName = 'WuTabPanel';
