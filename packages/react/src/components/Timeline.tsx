// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuTimelineProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Timeline = forwardRef<HTMLElement, WuTimelineProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-timeline', { ref, class: className, style, ...props }, children);
  }
);
Timeline.displayName = 'WuTimeline';

type WuTimelineItemProps = {
  label?: string;
  time?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const TimelineItem = forwardRef<HTMLElement, WuTimelineItemProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-timeline-item', { ref, class: className, style, ...props }, children);
  }
);
TimelineItem.displayName = 'WuTimelineItem';
