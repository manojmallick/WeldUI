import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/ColorPicker', component: 'wu-color-picker', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-color-picker label="Brand colour"></wu-color-picker>` };
export const PresetValue: Story = { render: () => html`<wu-color-picker label="Red" value="#ef4444"></wu-color-picker>` };
export const WithError: Story = { render: () => html`<wu-color-picker label="Colour" error="Colour does not meet contrast requirements"></wu-color-picker>` };
export const Disabled: Story = { render: () => html`<wu-color-picker label="Colour" disabled value="#64748b"></wu-color-picker>` };
