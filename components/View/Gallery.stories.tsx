import { StoryFn, Meta } from "@storybook/react";
import Gallery from "./Gallery";

export default {
  title: "View/Gallery",
  component: Gallery,
} as Meta<typeof Gallery>;

export const Primary: StoryFn<typeof Gallery> = () => <Gallery />;
