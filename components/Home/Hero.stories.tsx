import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Home/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const Primary: ComponentStory<typeof Hero> = () => <Hero />;
