import { StoryFn, Meta } from "@storybook/react";
import AboutBlurb from "./AboutBlurb";

export default {
  title: "About/AboutBlurb",
  component: AboutBlurb,
} as Meta<typeof AboutBlurb>;

export const Primary: StoryFn<typeof AboutBlurb> = () => <AboutBlurb />;
