import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Rating', component: 'wu-rating', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-rating value="3"></wu-rating>` };
export const WithLabel: Story = { render: () => html`<wu-rating value="4" show-label></wu-rating>` };
export const Readonly: Story = { render: () => html`<wu-rating value="4" readonly></wu-rating>` };
export const TenStar: Story = { render: () => html`<wu-rating value="7" max="10" show-label></wu-rating>` };
