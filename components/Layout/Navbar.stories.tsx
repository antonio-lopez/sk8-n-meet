import { StoryFn, Meta } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "Layout/Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

export const Primary: StoryFn<typeof Navbar> = () => <Navbar />;
