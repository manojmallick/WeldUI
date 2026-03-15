import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Navigation/MegaMenu', component: 'wu-mega-menu', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-mega-menu .open=${true}>
      <wu-button slot="trigger">Products ▾</wu-button>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Platform</div>
        <a href="#">Analytics</a>
        <a href="#">Automation</a>
        <a href="#">Integrations</a>
      </div>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Solutions</div>
        <a href="#">Enterprise</a>
        <a href="#">Startups</a>
        <a href="#">Developers</a>
      </div>
      <div>
        <div class="column-title" style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:var(--wu-color-text-secondary);margin-bottom:8px;">Resources</div>
        <a href="#">Documentation</a>
        <a href="#">Blog</a>
        <a href="#">Changelog</a>
      </div>
    </wu-mega-menu>`
};
