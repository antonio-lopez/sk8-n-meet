import { StoryFn, Meta } from "@storybook/react";
import AboutBios from "./AboutBios";

export default {
  title: "Cards/AboutBios",
  component: AboutBios,
} as Meta<typeof AboutBios>;

export const Primary: StoryFn<typeof AboutBios> = () => <AboutBios />;
