import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Slider',
  component: 'wu-slider',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-slider label="Volume" value="50" show-value></wu-slider>`,
};

export const WithTicks: Story = {
  render: () => html`
    <wu-slider
      label="Quantity"
      min="0"
      max="100"
      step="25"
      value="50"
      show-value
      .ticks=${[0, 25, 50, 75, 100]}
    ></wu-slider>
  `,
};

export const Disabled: Story = {
  render: () => html`<wu-slider label="Disabled" value="30" disabled></wu-slider>`,
};

export const WithHint: Story = {
  render: () => html`
    <wu-slider
      label="Brightness"
      value="70"
      hint="Adjust screen brightness (0–100)"
      show-value
    ></wu-slider>
  `,
};
