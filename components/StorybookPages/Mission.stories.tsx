import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import { Primary as Layout } from "../Layout/Layout.stories";
import Mission from "../../pages/mission";

export default {
  title: "Pages/Mission",
  component: React.Component,
} as Meta<typeof React.Component>;

export const Page: StoryFn<typeof React.Component> = () => (
  <Layout {...Layout.args}>
    <Mission />
  </Layout>
);
