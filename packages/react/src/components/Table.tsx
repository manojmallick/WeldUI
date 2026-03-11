// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuTableColumn = {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
};

type WuTableProps = {
  columns?: WuTableColumn[];
  data?: Record<string, unknown>[];
  selectable?: boolean;
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  emptyMessage?: string;
  onWuSort?: (event: CustomEvent) => void;
  onWuSelect?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Table = forwardRef<HTMLElement, WuTableProps>(
  ({ columns, data, onWuSort, onWuSelect, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current as any;
      if (!el) return;
      if (columns !== undefined) el.columns = columns;
      if (data !== undefined) el.data = data;
    }, [columns, data]);
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const sortHandler = (e: Event) => onWuSort?.(e as CustomEvent);
      const selectHandler = (e: Event) => onWuSelect?.(e as CustomEvent);
      el.addEventListener('wu-sort', sortHandler);
      el.addEventListener('wu-select', selectHandler);
      return () => {
        el.removeEventListener('wu-sort', sortHandler);
        el.removeEventListener('wu-select', selectHandler);
      };
    }, [onWuSort, onWuSelect, resolvedRef]);
    return React.createElement('wu-table', { ref: resolvedRef, class: className, style, ...props });
  }
);
Table.displayName = 'WuTable';
