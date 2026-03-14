// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';
import type { WuDataTableColumn } from '@weldui/core';

type WuDataTableProps = {
  columns?: WuDataTableColumn[];
  rows?: Record<string, unknown>[];
  total?: number;
  page?: number;
  'page-size'?: number;
  loading?: boolean;
  selectable?: boolean;
  searchable?: boolean;
  'empty-message'?: string;
  onWuPageChange?: (event: CustomEvent) => void;
  onWuSortChange?: (event: CustomEvent) => void;
  onWuSearchChange?: (event: CustomEvent) => void;
  onWuSelectionChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const DataTable = forwardRef<HTMLElement, WuDataTableProps>(
  ({ onWuPageChange, onWuSortChange, onWuSearchChange, onWuSelectionChange, columns, rows, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;

    useEffect(() => {
      const el = resolvedRef.current as any;
      if (!el) return;
      if (columns !== undefined) el.columns = columns;
      if (rows    !== undefined) el.rows    = rows;
    }, [columns, rows, resolvedRef]);

    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const handlers: [string, (e: Event) => void][] = [];
      if (onWuPageChange)      { const h = (e: Event) => onWuPageChange(e as CustomEvent);      el.addEventListener('wu-page-change',      h); handlers.push(['wu-page-change',      h]); }
      if (onWuSortChange)      { const h = (e: Event) => onWuSortChange(e as CustomEvent);      el.addEventListener('wu-sort-change',      h); handlers.push(['wu-sort-change',      h]); }
      if (onWuSearchChange)    { const h = (e: Event) => onWuSearchChange(e as CustomEvent);    el.addEventListener('wu-search-change',    h); handlers.push(['wu-search-change',    h]); }
      if (onWuSelectionChange) { const h = (e: Event) => onWuSelectionChange(e as CustomEvent); el.addEventListener('wu-selection-change', h); handlers.push(['wu-selection-change', h]); }
      return () => handlers.forEach(([ev, h]) => el.removeEventListener(ev, h));
    }, [onWuPageChange, onWuSortChange, onWuSearchChange, onWuSelectionChange, resolvedRef]);

    return React.createElement('wu-data-table', { ref: resolvedRef, class: className, style, ...props });
  }
);

DataTable.displayName = 'WuDataTable';
