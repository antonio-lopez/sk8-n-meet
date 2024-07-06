import { StoryFn, Meta } from "@storybook/react";
import PageHeader from "./PageHeader";

export default {
  title: "View/PageHeader",
  component: PageHeader,
} as Meta<typeof PageHeader>;

const Template: StoryFn<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  header: "About",
};
