// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuAvatarProps = {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  style?: React.CSSProperties;
};

export const Avatar = forwardRef<HTMLElement, WuAvatarProps>(
  ({ className, style, ...props }, ref) =>
    React.createElement('wu-avatar', { ref, class: className, style, ...props })
);

Avatar.displayName = 'WuAvatar';
