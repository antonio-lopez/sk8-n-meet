import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageHeader from './PageHeader';

export default {
  title: 'View/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  header: 'About',
};
