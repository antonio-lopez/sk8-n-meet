import { StoryFn, Meta } from "@storybook/react";
import Divider from "./Divider";

export default {
  title: "View/Divider",
  component: Divider,
} as Meta<typeof Divider>;

export const Primary: StoryFn<typeof Divider> = () => <Divider />;
