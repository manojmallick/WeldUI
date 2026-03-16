import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Charts/Candlestick',
  component: 'wu-candlestick',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const sample = [
  { date: 'Mon', open: 100, high: 115, low: 95, close: 110 },
  { date: 'Tue', open: 110, high: 120, low: 105, close: 108 },
  { date: 'Wed', open: 108, high: 118, low: 100, close: 115 },
  { date: 'Thu', open: 115, high: 125, low: 112, close: 112 },
  { date: 'Fri', open: 112, high: 116, low: 108, close: 116 },
];

export const Default: Story = {
  render: () => html`<wu-candlestick title="Stock Price" .candles=${sample}></wu-candlestick>`,
};

export const Compact: Story = {
  render: () => html`<wu-candlestick title="Compact" height="60" .candles=${sample}></wu-candlestick>`,
};
