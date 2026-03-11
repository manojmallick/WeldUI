// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuFileUploadProps = {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  hint?: string;
  onWuFileSelect?: (event: CustomEvent) => void;
  onWuFileRemove?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const FileUpload = forwardRef<HTMLElement, WuFileUploadProps>(
  ({ onWuFileSelect, onWuFileRemove, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const selectHandler = (e: Event) => onWuFileSelect?.(e as CustomEvent);
      const removeHandler = (e: Event) => onWuFileRemove?.(e as CustomEvent);
      el.addEventListener('wu-file-select', selectHandler);
      el.addEventListener('wu-file-remove', removeHandler);
      return () => {
        el.removeEventListener('wu-file-select', selectHandler);
        el.removeEventListener('wu-file-remove', removeHandler);
      };
    }, [onWuFileSelect, onWuFileRemove, resolvedRef]);
    return React.createElement('wu-file-upload', { ref: resolvedRef, class: className, style, ...props });
  }
);
FileUpload.displayName = 'WuFileUpload';
