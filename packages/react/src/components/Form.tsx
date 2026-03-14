// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuFormProps = {
  novalidate?: boolean;
  loading?: boolean;
  onWuSubmit?: (event: CustomEvent) => void;
  onWuInvalid?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Form = forwardRef<HTMLElement, WuFormProps>(
  ({ onWuSubmit, onWuInvalid, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;

    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const handlers: [string, (e: Event) => void][] = [];
      if (onWuSubmit)  { const h = (e: Event) => onWuSubmit(e as CustomEvent);  el.addEventListener('wu-submit',  h); handlers.push(['wu-submit',  h]); }
      if (onWuInvalid) { const h = (e: Event) => onWuInvalid(e as CustomEvent); el.addEventListener('wu-invalid', h); handlers.push(['wu-invalid', h]); }
      return () => handlers.forEach(([ev, h]) => el.removeEventListener(ev, h));
    }, [onWuSubmit, onWuInvalid, resolvedRef]);

    return React.createElement('wu-form', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);

Form.displayName = 'WuForm';
