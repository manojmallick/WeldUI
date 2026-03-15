import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const demoCard = (label: string) => html`
  <div
    style="padding:16px;border:1px solid var(--wu-color-border);background:var(--wu-color-surface);border-radius:var(--wu-radius-md);"
  >
    ${label}
  </div>
`;

const meta: Meta = {
  title: 'V3/Layout & Structure/Container',
  component: 'wu-container',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    flush: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { size: 'lg', flush: false },
  render: (args) => html`
    <div style="background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size=${args.size} ?flush=${args.flush}>
        ${demoCard('Centered content constrained by max width')}
      </wu-container>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:grid;gap:12px;background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size="sm">${demoCard('Small')}</wu-container>
      <wu-container size="md">${demoCard('Medium')}</wu-container>
      <wu-container size="lg">${demoCard('Large')}</wu-container>
      <wu-container size="xl">${demoCard('Extra Large')}</wu-container>
    </div>
  `,
};

export const Flush: Story = {
  render: () => html`
    <div style="background:var(--wu-color-surface);padding:16px 0;">
      <wu-container size="lg" flush>
        <div style="padding:16px;background:var(--wu-color-primary-subtle);color:var(--wu-color-text);">
          Flush mode removes the built-in inline gutter.
        </div>
      </wu-container>
    </div>
  `,
};