import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'V3/Charts/RadarChart', component: 'wu-radar-chart', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-radar-chart title="Skills" .axes=${[{label:'Speed',value:80},{label:'Strength',value:65},{label:'Agility',value:90},{label:'Intelligence',value:75}]}></wu-radar-chart>`,
};
