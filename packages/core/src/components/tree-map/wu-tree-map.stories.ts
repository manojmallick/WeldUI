import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'V3/Charts/TreeMap', component: 'wu-tree-map', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-tree-map title="Market Share" .data=${[{label:'A',value:40},{label:'B',value:30},{label:'C',value:20},{label:'D',value:10}]}></wu-tree-map>`,
};
