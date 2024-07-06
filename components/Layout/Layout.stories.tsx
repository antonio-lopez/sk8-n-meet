import { StoryFn, Meta } from "@storybook/react";
import Layout from "./Layout";

export default {
  title: "Layout/Layout",
  component: Layout,
} as Meta<typeof Layout>;

export const Primary: StoryFn<typeof Layout> = (args) => <Layout {...args} />;
