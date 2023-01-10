import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutBlurb from './AboutBlurb';

export default {
  title: 'About/AboutBlurb',
  component: AboutBlurb,
} as ComponentMeta<typeof AboutBlurb>;

export const Primary: ComponentStory<typeof AboutBlurb> = () => <AboutBlurb />;
