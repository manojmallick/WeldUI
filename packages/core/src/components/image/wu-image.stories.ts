import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Image', component: 'wu-image', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-image src="https://picsum.photos/400/300" alt="Sample" width="400px" height="300px"></wu-image>` };
export const Rounded: Story = { render: () => html`<wu-image src="https://picsum.photos/300/200" alt="Rounded" width="300px" height="200px" rounded></wu-image>` };
export const Broken: Story = { render: () => html`<wu-image src="broken-url.jpg" alt="Broken image" width="200px" height="150px"></wu-image>` };
export const NoSrc: Story = { render: () => html`<wu-image alt="No source" width="200px" height="150px"></wu-image>` };
