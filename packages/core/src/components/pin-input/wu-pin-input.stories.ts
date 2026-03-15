import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/PinInput', component: 'wu-pin-input', tags: ['autodocs'] };
export default meta;
export const Default: StoryObj = { render: () => html`<wu-pin-input label="Verification code" length="6"></wu-pin-input>` };
export const FourDigit: StoryObj = { render: () => html`<wu-pin-input label="PIN" length="4"></wu-pin-input>` };
export const Masked: StoryObj = { render: () => html`<wu-pin-input label="Password" length="4" mask></wu-pin-input>` };
export const Prefilled: StoryObj = { render: () => html`<wu-pin-input label="Code" length="6" value="123456"></wu-pin-input>` };
export const WithError: StoryObj = { render: () => html`<wu-pin-input label="Code" length="6" error="Invalid verification code"></wu-pin-input>` };
