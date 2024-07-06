import { StoryFn, Meta } from "@storybook/react";
import HomeHighlights from "./HomeHighlights";

export default {
  title: "Home/Highlights",
  component: HomeHighlights,
} as Meta<typeof HomeHighlights>;

const Template: StoryFn<typeof HomeHighlights> = () => <HomeHighlights />;

export const Primary = Template.bind({});
