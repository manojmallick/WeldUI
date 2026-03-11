import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/DatePicker',
  component: 'wu-date-picker',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    min: { control: 'text' },
    max: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-date-picker></wu-date-picker>`,
};

export const WithValue: Story = {
  render: () => html`<wu-date-picker value="2025-06-15"></wu-date-picker>`,
};

export const WithMinMax: Story = {
  render: () => {
    const today = new Date().toISOString().slice(0, 10);
    const future = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10);
    return html`
      <wu-date-picker min="${today}" max="${future}" placeholder="Next 30 days only"></wu-date-picker>
    `;
  },
};

export const OpenByDefault: Story = {
  render: () => html`<wu-date-picker open style="padding-bottom:320px"></wu-date-picker>`,
};
