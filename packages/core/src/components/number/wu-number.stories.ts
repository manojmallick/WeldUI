import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Number', component: 'wu-number', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Decimal: Story = { render: () => html`<wu-number value="1234567.89" locale="en-US"></wu-number>` };
export const Currency: Story = { render: () => html`<wu-number value="49999.99" format="currency" currency="EUR" locale="de-DE"></wu-number>` };
export const Percent: Story = { render: () => html`<wu-number value="0.724" format="percent" locale="en-US"></wu-number>` };
export const Compact: Story = { render: () => html`<wu-number value="2400000" format="compact" locale="en-US"></wu-number>` };
