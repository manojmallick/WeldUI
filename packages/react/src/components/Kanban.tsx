// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuKanbanProps = {
  onWuCardMove?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Kanban = forwardRef<HTMLElement, WuKanbanProps>(
  ({ onWuCardMove, className, style, children, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuCardMove) return;
      const handler = (e: Event) => onWuCardMove(e as CustomEvent);
      el.addEventListener('wu-card-move', handler);
      return () => el.removeEventListener('wu-card-move', handler);
    }, [onWuCardMove, resolvedRef]);
    return React.createElement('wu-kanban', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Kanban.displayName = 'WuKanban';

type WuKanbanColumnProps = {
  columnId?: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const KanbanColumn = forwardRef<HTMLElement, WuKanbanColumnProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-kanban-column', { ref, class: className, style, ...props }, children);
  }
);
KanbanColumn.displayName = 'WuKanbanColumn';
