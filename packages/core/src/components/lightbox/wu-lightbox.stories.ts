import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './wu-lightbox.js';

const meta: Meta = { title: 'Media/Lightbox', component: 'wu-lightbox', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const images = [
  { src: 'https://picsum.photos/seed/a/800/600', alt: 'Mountain', caption: 'Mountain at dawn' },
  { src: 'https://picsum.photos/seed/b/800/600', alt: 'Ocean', caption: 'Ocean sunset' },
  { src: 'https://picsum.photos/seed/c/800/600', alt: 'Forest', caption: 'Forest path' },
];

export const Open: Story = {
  render: () => {
    const el = document.createElement('wu-lightbox') as any;
    el.images = images;
    el.open = true;
    return el;
  }
};
