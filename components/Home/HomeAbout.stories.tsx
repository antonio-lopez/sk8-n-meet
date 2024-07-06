import { StoryFn, Meta } from "@storybook/react";
import HomeAbout from "./HomeAbout";

export default {
  title: "Home/About",
  component: HomeAbout,
} as Meta<typeof HomeAbout>;

const Template: StoryFn<typeof HomeAbout> = () => <HomeAbout />;

export const Primary = Template.bind({});
