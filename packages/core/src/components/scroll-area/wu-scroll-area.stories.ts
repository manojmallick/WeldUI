import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Layout/ScrollArea', component: 'wu-scroll-area', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const lorem = Array.from({ length: 20 }, (_, i) => html`<p>Line ${i + 1} — Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>`);

export const Vertical: Story = {
  render: () => html`<wu-scroll-area max-height="200px" orientation="vertical">${lorem}</wu-scroll-area>`
};

export const Horizontal: Story = {
  render: () => html`
    <wu-scroll-area max-width="300px" orientation="horizontal">
      <div style="width:800px;white-space:nowrap;padding:16px;background:var(--wu-color-surface);">
        A very wide piece of content that overflows horizontally for demonstration purposes.
      </div>
    </wu-scroll-area>`
};
