import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const future = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString();
const meta: Meta = { title: 'Components/Countdown', component: 'wu-countdown', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-countdown .target=${future}></wu-countdown>` };
export const Compact: Story = { render: () => html`<wu-countdown .target=${future} variant="compact"></wu-countdown>` };
export const Expired: Story = { render: () => html`<wu-countdown target="2000-01-01T00:00:00Z"></wu-countdown>` };
