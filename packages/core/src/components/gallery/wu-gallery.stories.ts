import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Media/Gallery', component: 'wu-gallery', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const images = Array.from({ length: 9 }, (_, i) => ({
  src: `https://picsum.photos/seed/${i + 10}/400/400`,
  alt: `Photo ${i + 1}`,
  caption: `Caption for photo ${i + 1}`
}));

export const ThreeColumns: Story = { render: () => { const el = document.createElement('wu-gallery') as any; el.images = images; el.cols = 3; return el; } };
export const FourColumns: Story = { render: () => { const el = document.createElement('wu-gallery') as any; el.images = images; el.cols = 4; return el; } };
