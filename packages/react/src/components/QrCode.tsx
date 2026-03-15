// AUTO-GENERATED — DO NOT EDIT
import React, { forwardRef } from 'react';
import '@weldui/core';

type WuQrCodeProps = {
  value?: string;
  size?: number;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  className?: string;
  style?: React.CSSProperties;
};

export const QrCode = forwardRef<HTMLElement, WuQrCodeProps>(
  ({ className, style, ...props }, ref) => {
    return React.createElement('wu-qr-code', { ref, class: className, style, ...props });
  }
);
QrCode.displayName = 'WuQrCode';
