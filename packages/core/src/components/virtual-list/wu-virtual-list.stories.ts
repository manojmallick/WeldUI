import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Media/VirtualList', component: 'wu-virtual-list', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1} — Data row`);

export const Default: Story = {
  render: () => {
    const el = document.createElement('wu-virtual-list') as any;
    el.items = items;
    el.viewportHeight = 400;
    return el;
  }
};
