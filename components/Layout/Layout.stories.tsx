import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './Layout';

export default {
  title: 'Layout/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const Primary: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);
