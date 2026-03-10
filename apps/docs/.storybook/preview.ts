import type { Preview } from '@storybook/web-components';

// Import WeldUI tokens (base + semantic)
import '@weldui/core/tokens';

// Import themes for the toolbar switcher
import '@weldui/theme-default/light';
import '@weldui/theme-default/dark';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true }, // We use data-theme instead
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      story: { inline: true },
    },
    a11y: {
      element: '#storybook-root',
      config: {},
      options: {},
      manual: false,
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'WeldUI theme',
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default Light' },
          { value: 'default-dark', title: 'Default Dark' },
          { value: 'ocean', title: 'Ocean' },
          { value: 'ocean-dark', title: 'Ocean Dark' },
          { value: 'forest', title: 'Forest' },
          { value: 'midnight', title: 'Midnight' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'default';
      return `<div data-theme="${theme}" style="padding: 1rem; background: var(--wu-color-background); min-height: 100vh;">${story()}</div>`;
    },
  ],
};

export default preview;
