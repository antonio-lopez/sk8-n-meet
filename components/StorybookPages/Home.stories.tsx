import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Primary as Layout } from '../Layout/Layout.stories';
import { Primary as Hero } from '../Home/Hero.stories';
import { Primary as HomeFlyers } from '../Home/HomeFlyers.stories';
import React from 'react';

export default {
  title: 'Pages/Home',
  component: React.Component,
} as ComponentMeta<typeof React.Component>;

export const Page: ComponentStory<typeof React.Component> = () => (
  <Layout {...Layout.args}>
    <Hero />
    <HomeFlyers />
  </Layout>
);
