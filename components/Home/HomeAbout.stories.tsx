import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomeAbout from './HomeAbout';

export default {
  title: 'Home/About',
  component: HomeAbout,
} as ComponentMeta<typeof HomeAbout>;

const Template: ComponentStory<typeof HomeAbout> = () => <HomeAbout />;

export const Primary = Template.bind({});
