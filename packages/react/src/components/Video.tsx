// AUTO-GENERATED — DO NOT EDIT
import React, { useRef, useEffect, forwardRef } from 'react';
import '@weldui/core';

type WuVideoProps = {
  src?: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  onWuPlay?: (event: CustomEvent) => void;
  onWuPause?: (event: CustomEvent) => void;
  onWuEnded?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const Video = forwardRef<HTMLElement, WuVideoProps>(
  ({ onWuPlay, onWuPause, onWuEnded, className, style, ...props }, ref) => {
    const elRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || elRef;
    useEffect(() => {
      const el = resolvedRef.current;
      if (!el) return;
      const playHandler = (e: Event) => onWuPlay?.(e as CustomEvent);
      const pauseHandler = (e: Event) => onWuPause?.(e as CustomEvent);
      const endedHandler = (e: Event) => onWuEnded?.(e as CustomEvent);
      el.addEventListener('wu-play', playHandler);
      el.addEventListener('wu-pause', pauseHandler);
      el.addEventListener('wu-ended', endedHandler);
      return () => {
        el.removeEventListener('wu-play', playHandler);
        el.removeEventListener('wu-pause', pauseHandler);
        el.removeEventListener('wu-ended', endedHandler);
      };
    }, [onWuPlay, onWuPause, onWuEnded, resolvedRef]);
    return React.createElement('wu-video', { ref: resolvedRef, class: className, style, ...props });
  }
);
Video.displayName = 'WuVideo';
