// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuPaginationProps = {
  page?: number;
  totalPages?: number;
  showInfo?: boolean;
  totalItems?: number;
  pageSize?: number;
  onWuPageChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Pagination = forwardRef<HTMLElement, WuPaginationProps>(
  ({ onWuPageChange, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuPageChange) return;
      const handler = (e: Event) => onWuPageChange(e as CustomEvent);
      el.addEventListener('wu-page-change', handler);
      return () => el.removeEventListener('wu-page-change', handler);
    }, [onWuPageChange, resolvedRef]);
    return React.createElement('wu-pagination', { ref: resolvedRef, class: className, style, ...props });
  }
);
Pagination.displayName = 'WuPagination';
