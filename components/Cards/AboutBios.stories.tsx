import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutBios from './AboutBios';

export default {
  title: 'Cards/AboutBios',
  component: AboutBios,
} as ComponentMeta<typeof AboutBios>;

export const Primary: ComponentStory<typeof AboutBios> = () => <AboutBios />;
