import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Rich Media/Video',
  component: 'wu-video',
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    poster: { control: 'text' },
    autoplay: { control: 'boolean' },
    muted: { control: 'boolean' },
    loop: { control: 'boolean' },
  }
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://www.w3schools.com/html/pic_trulli.jpg"
    ></wu-video>`
};

export const Muted: Story = {
  render: () => html`
    <wu-video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      muted
    ></wu-video>`
};
