import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS preset that maps WeldUI design tokens to Tailwind utilities.
 * Add to your tailwind.config.ts to share WeldUI tokens across Tailwind classes.
 *
 * @example
 * // tailwind.config.ts
 * import { welduiPreset } from '@weldui/tokens-tailwind';
 *
 * export default { presets: [welduiPreset] };
 */
export const welduiPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        'wu-primary':  'var(--wu-color-primary)',
        'wu-surface':  'var(--wu-color-surface)',
        'wu-text':     'var(--wu-color-text)',
        'wu-border':   'var(--wu-color-border)',
        'wu-success':  'var(--wu-color-success)',
        'wu-warning':  'var(--wu-color-warning)',
        'wu-danger':   'var(--wu-color-danger)',
        'wu-info':     'var(--wu-color-info)',
      },
      borderRadius: {
        'wu-sm':   'var(--wu-radius-sm)',
        'wu-md':   'var(--wu-radius-md)',
        'wu-lg':   'var(--wu-radius-lg)',
        'wu-xl':   'var(--wu-radius-xl)',
        'wu-full': 'var(--wu-radius-full)',
      },
      fontFamily: {
        'wu-sans': 'var(--wu-font-sans)',
        'wu-mono': 'var(--wu-font-mono)',
      },
      spacing: {
        'wu-1': 'var(--wu-space-1)',
        'wu-2': 'var(--wu-space-2)',
        'wu-3': 'var(--wu-space-3)',
        'wu-4': 'var(--wu-space-4)',
        'wu-6': 'var(--wu-space-6)',
        'wu-8': 'var(--wu-space-8)',
      },
      boxShadow: {
        'wu-sm': 'var(--wu-shadow-sm)',
        'wu-md': 'var(--wu-shadow-md)',
        'wu-lg': 'var(--wu-shadow-lg)',
      },
      transitionDuration: {
        'wu-fast':   'var(--wu-duration-fast)',
        'wu-normal': 'var(--wu-duration-normal)',
        'wu-slow':   'var(--wu-duration-slow)',
      },
    },
  },
};
