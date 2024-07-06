import { StoryFn, Meta } from "@storybook/react";
import { Primary as Layout } from "../Layout/Layout.stories";
import { Primary as Hero } from "../Home/Hero.stories";
// import { Primary as HomeFlyers } from '../Home/HomeFlyers.stories';
import { Primary as Title } from "../View/Title.stories";
import { Primary as HomeAbout } from "../Home/HomeAbout.stories";
import { Primary as HomeHighlights } from "../Home/HomeHighlights.stories";
import React from "react";

export default {
  title: "Pages/Home",
  component: React.Component,
} as Meta<typeof React.Component>;

export const Page: StoryFn<typeof React.Component> = () => (
  <Layout {...Layout.args}>
    <Hero />
    <Title title="Meet-ups" />
    {/* <HomeFlyers /> */}
    <Title title="What We’re About" />
    <HomeAbout />
    <Title title="Follow Us!" />
    <HomeHighlights />
  </Layout>
);
