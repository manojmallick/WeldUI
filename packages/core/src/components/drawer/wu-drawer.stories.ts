import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Drawer', component: 'wu-drawer', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Right: Story = { render: () => html`<wu-drawer open label="Settings"><p>Drawer content goes here.</p><wu-button slot="footer">Save</wu-button></wu-drawer>` };
export const Left: Story = { render: () => html`<wu-drawer open placement="left" label="Navigation"><p>Navigation links here.</p></wu-drawer>` };
export const Bottom: Story = { render: () => html`<wu-drawer open placement="bottom" label="Filter"><p>Filter options.</p></wu-drawer>` };
