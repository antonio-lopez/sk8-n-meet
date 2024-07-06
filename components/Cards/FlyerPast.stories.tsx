import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import { Primary as Layout } from "../Layout/Layout.stories";
// import PastMeetUp from '../../pages/past-events';

export default {
  title: "Pages/PastMeetUp",
  component: React.Component,
} as Meta<typeof React.Component>;

export const Page: StoryFn<typeof React.Component> = () => (
  <Layout {...Layout.args}>
    <></>
  </Layout>
);
