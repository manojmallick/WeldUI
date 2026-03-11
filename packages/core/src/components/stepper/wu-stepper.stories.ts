import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Stepper',
  component: 'wu-stepper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A multi-step wizard composed of `<wu-stepper>` and `<wu-step>` elements. Supports horizontal and vertical orientation, linear and non-linear navigation, and `pending` / `active` / `complete` / `error` step states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-stepper active-step="1">
      <wu-step label="Account" description="Create your account"></wu-step>
      <wu-step label="Profile" description="Set up your profile"></wu-step>
      <wu-step label="Billing" description="Enter payment details"></wu-step>
      <wu-step label="Confirm" description="Review and confirm"></wu-step>
    </wu-stepper>
  `,
};

export const StepOne: Story = {
  render: () => html`
    <wu-stepper active-step="0">
      <wu-step label="Start"></wu-step>
      <wu-step label="Process"></wu-step>
      <wu-step label="Finish"></wu-step>
    </wu-stepper>
  `,
};

export const AllComplete: Story = {
  render: () => html`
    <wu-stepper active-step="3">
      <wu-step label="Done 1"></wu-step>
      <wu-step label="Done 2"></wu-step>
      <wu-step label="Done 3"></wu-step>
    </wu-stepper>
  `,
};

export const Interactive: Story = {
  render: () => {
    const stepper = document.createElement('wu-stepper') as any;
    stepper.setAttribute('active-step', '0');
    stepper.innerHTML = `
      <wu-step label="Step 1" description="First step"></wu-step>
      <wu-step label="Step 2" description="Second step"></wu-step>
      <wu-step label="Step 3" description="Third step"></wu-step>
    `;
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '16px';
    wrapper.appendChild(stepper);
    const btns = document.createElement('div');
    btns.style.display = 'flex';
    btns.style.gap = '8px';
    const prev = document.createElement('wu-button') as any;
    prev.setAttribute('variant', 'secondary');
    prev.textContent = 'Previous';
    prev.addEventListener('wu-click', () => stepper.prev());
    const next = document.createElement('wu-button') as any;
    next.textContent = 'Next';
    next.addEventListener('wu-click', () => stepper.next());
    btns.appendChild(prev);
    btns.appendChild(next);
    wrapper.appendChild(btns);
    return wrapper;
  },
};
