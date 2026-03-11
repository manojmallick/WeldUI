// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuDataGridColumn = {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
};

type WuDataGridProps = {
  columns?: WuDataGridColumn[];
  data?: Record<string, unknown>[];
  totalRows?: number;
  page?: number;
  pageSize?: number;
  showToolbar?: boolean;
  emptyMessage?: string;
  onWuSortChange?: (event: CustomEvent) => void;
  onWuFilterChange?: (event: CustomEvent) => void;
  onWuPageChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const DataGrid = forwardRef<HTMLElement, WuDataGridProps>(
  ({ columns, data, onWuSortChange, onWuFilterChange, onWuPageChange, className, style, ...props }, ref) => {
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
      const sortHandler = (e: Event) => onWuSortChange?.(e as CustomEvent);
      const filterHandler = (e: Event) => onWuFilterChange?.(e as CustomEvent);
      const pageHandler = (e: Event) => onWuPageChange?.(e as CustomEvent);
      el.addEventListener('wu-sort-change', sortHandler);
      el.addEventListener('wu-filter-change', filterHandler);
      el.addEventListener('wu-page-change', pageHandler);
      return () => {
        el.removeEventListener('wu-sort-change', sortHandler);
        el.removeEventListener('wu-filter-change', filterHandler);
        el.removeEventListener('wu-page-change', pageHandler);
      };
    }, [onWuSortChange, onWuFilterChange, onWuPageChange, resolvedRef]);
    return React.createElement('wu-data-grid', { ref: resolvedRef, class: className, style, ...props });
  }
);
DataGrid.displayName = 'WuDataGrid';
