import { ComponentStory, ComponentMeta } from '@storybook/react';
import Gallery from './Gallery';

export default {
  title: 'View/Gallery',
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

export const Primary: ComponentStory<typeof Gallery> = () => <Gallery />;
