import { StoryFn, Meta } from "@storybook/react";
import Hero from "./Hero";

export default {
  title: "Home/Hero",
  component: Hero,
} as Meta<typeof Hero>;

export const Primary: StoryFn<typeof Hero> = () => <Hero />;
