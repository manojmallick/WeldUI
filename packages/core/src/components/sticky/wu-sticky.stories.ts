import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Layout & Structure/Sticky',
  component: 'wu-sticky',
  tags: ['autodocs'],
  argTypes: {
    top: { control: 'text' },
    bottom: { control: 'text' },
    zIndex: { control: 'number', name: 'z-index' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { top: '0', zIndex: 10 },
  render: (args) => html`
    <div style="height:300px;overflow-y:scroll;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      <wu-sticky top=${args.top} z-index=${args.zIndex}>
        <div
          style="padding:var(--wu-space-3) var(--wu-space-4);background:var(--wu-color-surface-raised);border-bottom:1px solid var(--wu-color-border);font-weight:var(--wu-font-semibold);font-size:var(--wu-text-sm);"
        >
          Sticky Header
        </div>
      </wu-sticky>
      <div style="padding:var(--wu-space-4);">
        ${Array.from({ length: 20 }, (_, i) => html`<p style="margin:0 0 var(--wu-space-3);">Content line ${i + 1}</p>`)}
      </div>
    </div>
  `,
};

export const NavBar: Story = {
  render: () => html`
    <div style="height:300px;overflow-y:scroll;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      <wu-sticky top="0" z-index="20">
        <nav
          style="padding:var(--wu-space-3) var(--wu-space-6);background:var(--wu-color-background);border-bottom:1px solid var(--wu-color-border);display:flex;gap:var(--wu-space-4);font-size:var(--wu-text-sm);"
        >
          <span style="font-weight:var(--wu-font-bold);">Brand</span>
          <a href="#" style="color:var(--wu-color-text);">Home</a>
          <a href="#" style="color:var(--wu-color-text);">About</a>
        </nav>
      </wu-sticky>
      <div style="padding:var(--wu-space-6);">
        ${Array.from({ length: 20 }, (_, i) => html`<p style="margin:0 0 var(--wu-space-3);">Scroll me ${i + 1}</p>`)}
      </div>
    </div>
  `,
};
