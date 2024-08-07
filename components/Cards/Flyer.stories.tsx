import { StoryFn, Meta } from "@storybook/react";
import Flyer from "./Flyer";

export default {
  title: "Cards/Flyer",
  component: Flyer,
} as Meta<typeof Flyer>;

const Template: StoryFn<typeof Flyer> = (args) => <Flyer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  image: {
    secure_url:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp",
    public_id: "",
    _key: "",
    height: "",
    width: "",
  },
  title: "event flyer",
};
