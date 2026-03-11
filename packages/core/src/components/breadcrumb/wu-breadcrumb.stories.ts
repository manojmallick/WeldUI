import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'wu-breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Hierarchical navigation trail. Compose `<wu-breadcrumb>` with `<wu-breadcrumb-item>` elements. The last item without an `href` is treated as the current page.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-breadcrumb>
      <li><a href="/">Home</a></li>
      <li><a href="/docs">Documentation</a></li>
      <li><span aria-current="page">Components</span></li>
    </wu-breadcrumb>
  `,
};

export const ChevronSeparator: Story = {
  render: () => html`
    <wu-breadcrumb separator="›">
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><span aria-current="page">WeldUI Pro</span></li>
    </wu-breadcrumb>
  `,
};
