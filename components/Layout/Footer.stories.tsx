import { StoryFn, Meta } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
} as Meta<typeof Footer>;

export const Primary: StoryFn<typeof Footer> = () => <Footer />;
