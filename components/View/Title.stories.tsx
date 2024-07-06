import { StoryFn, Meta } from "@storybook/react";
import Title from "./Title";

export default {
  title: "View/Title",
  component: Title,
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Meetups",
};
