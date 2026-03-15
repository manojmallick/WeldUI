import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Calendar', component: 'wu-calendar', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-calendar></wu-calendar>` };
export const PreSelected: Story = { render: () => html`<wu-calendar value="2024-06-15"></wu-calendar>` };
export const WithMinMax: Story = { render: () => html`<wu-calendar min="2024-06-01" max="2024-06-30"></wu-calendar>` };
