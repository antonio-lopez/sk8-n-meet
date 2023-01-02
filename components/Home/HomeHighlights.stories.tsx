import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomeHighlights from './HomeHighlights';

export default {
  title: 'Home/Highlights',
  component: HomeHighlights,
} as ComponentMeta<typeof HomeHighlights>;

const Template: ComponentStory<typeof HomeHighlights> = () => (
  <HomeHighlights />
);

export const Primary = Template.bind({});
