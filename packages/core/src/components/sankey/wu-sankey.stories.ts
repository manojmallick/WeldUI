import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'V3/Charts/Sankey', component: 'wu-sankey', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-sankey
      title="Budget Allocation"
      .nodes=${[{id:'a',label:'Revenue'},{id:'b',label:'R&D'},{id:'c',label:'Sales'}]}
      .links=${[{source:'a',target:'b',value:40},{source:'a',target:'c',value:60}]}
    ></wu-sankey>
  `,
};
