import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Media/CanvasSketch',
  component: 'wu-canvas-sketch',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-canvas-sketch label="CanvasSketch"></wu-canvas-sketch>`,
};

export const WithValue: Story = {
  render: () => html`<wu-canvas-sketch label="CanvasSketch" value="Sample value"></wu-canvas-sketch>`,
};
