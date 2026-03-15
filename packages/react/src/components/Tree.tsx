// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuTreeProps = {
  selectable?: boolean;
  multiple?: boolean;
  onWuSelect?: (event: CustomEvent) => void;
  onWuExpand?: (event: CustomEvent) => void;
  onWuCollapse?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Tree = forwardRef<HTMLElement, WuTreeProps>(
  ({ onWuSelect, onWuExpand, onWuCollapse, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const selectHandler = (e: Event) => onWuSelect?.(e as CustomEvent);
      const expandHandler = (e: Event) => onWuExpand?.(e as CustomEvent);
      const collapseHandler = (e: Event) => onWuCollapse?.(e as CustomEvent);
      el.addEventListener('wu-select', selectHandler);
      el.addEventListener('wu-expand', expandHandler);
      el.addEventListener('wu-collapse', collapseHandler);
      return () => {
        el.removeEventListener('wu-select', selectHandler);
        el.removeEventListener('wu-expand', expandHandler);
        el.removeEventListener('wu-collapse', collapseHandler);
      };
    }, [onWuSelect, onWuExpand, onWuCollapse, resolvedRef]);
    return React.createElement('wu-tree', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Tree.displayName = 'WuTree';

type WuTreeItemProps = {
  label?: string;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const TreeItem = forwardRef<HTMLElement, WuTreeItemProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-tree-item', { ref, class: className, style, ...props }, children);
  }
);
TreeItem.displayName = 'WuTreeItem';
