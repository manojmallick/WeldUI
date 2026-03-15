import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Carousel', component: 'wu-carousel', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
const slides = ['#3b82f6', '#22c55e', '#ef4444', '#f59e0b'];
export const Default: Story = { render: () => html`
  <wu-carousel style="max-width:400px">
    ${slides.map((c, i) => html`<div style="background:${c};height:200px;display:flex;align-items:center;justify-content:center;color:#fff;font-family:sans-serif;font-size:24px">Slide ${i+1}</div>`)}
  </wu-carousel>` };
export const NoControls: Story = { render: () => html`
  <wu-carousel no-controls style="max-width:400px">
    ${slides.map((c, i) => html`<div style="background:${c};height:200px;display:flex;align-items:center;justify-content:center;color:#fff">Slide ${i+1}</div>`)}
  </wu-carousel>` };
