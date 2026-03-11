import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/FileUpload',
  component: 'wu-file-upload',
  tags: ['autodocs'],
  argTypes: {
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    hint: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-file-upload hint="PDF, PNG, JPG up to 10MB"></wu-file-upload>`,
};

export const Multiple: Story = {
  render: () => html`<wu-file-upload multiple accept=".pdf,.png,.jpg" hint="Select multiple files"></wu-file-upload>`,
};

export const Disabled: Story = {
  render: () => html`<wu-file-upload disabled hint="Upload is disabled"></wu-file-upload>`,
};

export const ImageOnly: Story = {
  render: () => html`<wu-file-upload accept="image/*" hint="Images only"></wu-file-upload>`,
};
