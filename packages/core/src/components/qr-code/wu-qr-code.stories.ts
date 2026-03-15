import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './wu-qr-code.js';

const meta: Meta = { title: 'Media/QRCode', component: 'wu-qr-code', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = { render: () => html`<wu-qr-code value="https://weldui.dev" size="180"></wu-qr-code>` };
export const Large: Story = { render: () => html`<wu-qr-code value="https://weldui.dev" size="256"></wu-qr-code>` };
export const CustomColors: Story = { render: () => html`<wu-qr-code value="WeldUI" color="var(--wu-color-primary)" background="var(--wu-color-surface)"></wu-qr-code>` };
