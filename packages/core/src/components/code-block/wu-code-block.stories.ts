import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/CodeBlock', component: 'wu-code-block', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
const ts = `import { LitElement, html } from 'lit';\n@customElement('wu-button')\nexport class WuButton extends LitElement {}`;
export const Default: Story = { render: () => html`<wu-code-block language="typescript" .code=${ts}></wu-code-block>` };
export const Shell: Story = { render: () => html`<wu-code-block language="bash" code="pnpm add @weldui/core"></wu-code-block>` };
export const NoCopy: Story = { render: () => html`<wu-code-block language="json" code='{"name":"weldui"}' hide-copy></wu-code-block>` };
