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

/**
 * Tailwind v4 `@theme` block.
 * Import this string and inject it into a CSS file via `@theme { ... }`,
 * or use @weldui/core token CSS files directly with Tailwind v4's `@import`.
 *
 * @example
 * // In your global CSS (Tailwind v4):
 * // @import "@weldui/core/dist/tokens/base.css";
 * // @import "@weldui/core/dist/tokens/semantic.css";
 * // @import "@weldui/theme-default/light.css";
 * //
 * // Then use CSS custom properties directly in Tailwind v4 utilities:
 * // class="bg-[var(--wu-color-primary)] text-[var(--wu-color-primary-fg)]"
 */
export const tailwindV4Theme = `
  /* WeldUI semantic colour tokens */
  --color-wu-primary:        var(--wu-color-primary);
  --color-wu-primary-hover:  var(--wu-color-primary-hover);
  --color-wu-primary-subtle: var(--wu-color-primary-subtle);
  --color-wu-primary-fg:     var(--wu-color-primary-fg);

  --color-wu-background:     var(--wu-color-background);
  --color-wu-surface:        var(--wu-color-surface);
  --color-wu-surface-raised: var(--wu-color-surface-raised);

  --color-wu-text:           var(--wu-color-text);
  --color-wu-text-secondary: var(--wu-color-text-secondary);
  --color-wu-text-disabled:  var(--wu-color-text-disabled);

  --color-wu-border:         var(--wu-color-border);
  --color-wu-border-strong:  var(--wu-color-border-strong);

  --color-wu-success:        var(--wu-color-success);
  --color-wu-warning:        var(--wu-color-warning);
  --color-wu-danger:         var(--wu-color-danger);
  --color-wu-info:           var(--wu-color-info);

  /* WeldUI spacing */
  --spacing-wu-1:  var(--wu-space-1);
  --spacing-wu-2:  var(--wu-space-2);
  --spacing-wu-3:  var(--wu-space-3);
  --spacing-wu-4:  var(--wu-space-4);
  --spacing-wu-6:  var(--wu-space-6);
  --spacing-wu-8:  var(--wu-space-8);

  /* WeldUI border radius */
  --radius-wu-sm:   var(--wu-radius-sm);
  --radius-wu-md:   var(--wu-radius-md);
  --radius-wu-lg:   var(--wu-radius-lg);
  --radius-wu-xl:   var(--wu-radius-xl);
  --radius-wu-full: var(--wu-radius-full);

  /* WeldUI shadows */
  --shadow-wu-sm: var(--wu-shadow-sm);
  --shadow-wu-md: var(--wu-shadow-md);
  --shadow-wu-lg: var(--wu-shadow-lg);
` as const;
