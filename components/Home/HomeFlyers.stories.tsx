import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomeFlyers from './HomeFlyers';

export default {
  title: 'Cards/Flyers',
  component: HomeFlyers,
} as ComponentMeta<typeof HomeFlyers>;

const Template: ComponentStory<typeof HomeFlyers> = () => <></>;

export const Primary = Template.bind({});
