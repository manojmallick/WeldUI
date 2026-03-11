// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuStepperProps = {
  activeStep?: number;
  linear?: boolean;
  vertical?: boolean;
  onWuStepChange?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Stepper = forwardRef<HTMLElement, WuStepperProps>(
  ({ onWuStepChange, children, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el || !onWuStepChange) return;
      const handler = (e: Event) => onWuStepChange(e as CustomEvent);
      el.addEventListener('wu-step-change', handler);
      return () => el.removeEventListener('wu-step-change', handler);
    }, [onWuStepChange, resolvedRef]);
    return React.createElement('wu-stepper', { ref: resolvedRef, class: className, style, ...props }, children);
  }
);
Stepper.displayName = 'WuStepper';

type WuStepProps = {
  label?: string;
  description?: string;
  status?: 'pending' | 'active' | 'complete' | 'error';
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Step = forwardRef<HTMLElement, WuStepProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-step', { ref, class: className, style, ...props }, children);
  }
);
Step.displayName = 'WuStep';
