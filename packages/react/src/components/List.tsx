// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuListProps = {
  type?: 'unordered' | 'ordered' | 'none';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const List = forwardRef<HTMLElement, WuListProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-list', { ref, class: className, style, ...props }, children);
  }
);
List.displayName = 'WuList';

type WuListItemProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ListItem = forwardRef<HTMLElement, WuListItemProps>(
  ({ className, style, children, ...props }, ref) => {
    return React.createElement('wu-list-item', { ref, class: className, style, ...props }, children);
  }
);
ListItem.displayName = 'WuListItem';
