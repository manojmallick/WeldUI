import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './wu-sortable.js';

const meta: Meta = { title: 'Media/Sortable', component: 'wu-sortable', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const el = document.createElement('wu-sortable') as any;
    el.items = [
      { id: '1', label: 'Design system' },
      { id: '2', label: 'Accessibility audit' },
      { id: '3', label: 'Performance review' },
      { id: '4', label: 'Documentation update' },
    ];
    return el;
  }
};
