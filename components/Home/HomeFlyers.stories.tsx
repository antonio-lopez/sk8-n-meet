import { StoryFn, Meta } from "@storybook/react";
import HomeFlyers from "./HomeFlyers";

export default {
  title: "Cards/Flyers",
  component: HomeFlyers,
} as Meta<typeof HomeFlyers>;

const Template: StoryFn<typeof HomeFlyers> = () => <></>;

export const Primary = Template.bind({});
