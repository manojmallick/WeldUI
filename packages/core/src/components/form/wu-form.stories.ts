import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Form',
  component: 'wu-form',
  tags: ['autodocs'],
  argTypes: {
    novalidate: { control: 'boolean' },
    loading:    { control: 'boolean' },
  },
  args: { novalidate: false, loading: false },
  parameters: {
    docs: {
      description: {
        component:
          'A form shell that handles validation, error summary, and serialisation. ' +
          'Listen for the `wu-submit` event to receive a `{ values }` object of all field data. ' +
          'If any fields are invalid a dismissible `error-summary` is shown and `wu-invalid` fires. ' +
          'Set `loading` to disable the form while a request is in flight.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/** Contact form with validation — submit with empty fields to see the error summary. */
export const Default: Story = {
  render: (args) => html`
    <wu-form
      ?loading=${args['loading']}
      ?novalidate=${args['novalidate']}
      style="max-width:480px"
      @wu-submit=${(e: CustomEvent) => alert('Submitted: ' + JSON.stringify(e.detail.values, null, 2))}
    >
      <wu-input name="name"  label="Full name"     required placeholder="Jane Smith"></wu-input>
      <wu-input name="email" label="Email address"  required type="email" placeholder="jane@example.com"></wu-input>
      <wu-textarea name="message" label="Message" required rows="4" placeholder="How can we help?"></wu-textarea>
      <wu-button slot="actions" type="submit" ?loading=${args['loading']}>Send message</wu-button>
      <wu-button slot="actions" type="reset" variant="ghost">Clear</wu-button>
    </wu-form>
  `,
};

/** Login form — compact with two fields. */
export const Login: Story = {
  render: () => html`
    <wu-form style="max-width:360px" @wu-submit=${(e: CustomEvent) => alert('Login: ' + JSON.stringify(e.detail.values))}>
      <wu-input name="email"    label="Email"    type="email"    required></wu-input>
      <wu-input name="password" label="Password" type="password" required></wu-input>
      <wu-button slot="actions" type="submit" style="width:100%">Sign in</wu-button>
    </wu-form>
  `,
};

/** Loading state — simulates an in-flight request. */
export const Loading: Story = {
  render: () => html`
    <wu-form loading style="max-width:360px">
      <wu-input name="email"    label="Email"    type="email"    required></wu-input>
      <wu-input name="password" label="Password" type="password" required></wu-input>
      <wu-button slot="actions" type="submit" loading style="width:100%">Sign in</wu-button>
    </wu-form>
  `,
};
