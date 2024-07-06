import { StoryFn, Meta } from "@storybook/react";
import Highlights from "./Highlights";

export default {
  title: "View/Highlights",
  component: Highlights,
} as Meta<typeof Highlights>;

export const Primary: StoryFn<typeof Highlights> = () => <Highlights />;
