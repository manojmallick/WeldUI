import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/TimePicker', component: 'wu-time-picker', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-time-picker label="Meeting time" value="09:00"></wu-time-picker>` };
export const TwelveHour: Story = { render: () => html`<wu-time-picker label="Time (12h)" hour12 value="14:30"></wu-time-picker>` };
export const WithError: Story = { render: () => html`<wu-time-picker label="Time" error="Time is in the past" value="08:00"></wu-time-picker>` };
export const Disabled: Story = { render: () => html`<wu-time-picker label="Closed at" disabled value="17:00"></wu-time-picker>` };
