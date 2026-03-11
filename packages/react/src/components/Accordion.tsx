// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuAccordionProps = {
  single?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Accordion = forwardRef<HTMLElement, WuAccordionProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-accordion', { ref, class: className, style, ...props }, children);
  }
);
Accordion.displayName = 'WuAccordion';

type WuAccordionItemProps = {
  summary?: string;
  open?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const AccordionItem = forwardRef<HTMLElement, WuAccordionItemProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-accordion-item', { ref, class: className, style, ...props }, children);
  }
);
AccordionItem.displayName = 'WuAccordionItem';
