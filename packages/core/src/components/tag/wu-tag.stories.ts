import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Tag', component: 'wu-tag', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-tag>Label</wu-tag>` };
export const Variants: Story = { render: () => html`<div style="display:flex;gap:8px">
  <wu-tag>Default</wu-tag><wu-tag variant="primary">Primary</wu-tag><wu-tag variant="success">Success</wu-tag><wu-tag variant="warning">Warning</wu-tag><wu-tag variant="danger">Danger</wu-tag>
</div>` };
export const Dismissible: Story = { render: () => html`<div style="display:flex;gap:8px"><wu-tag dismissible>TypeScript</wu-tag><wu-tag variant="primary" dismissible>React</wu-tag></div>` };
