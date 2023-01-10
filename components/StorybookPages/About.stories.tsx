import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Primary as Layout } from '../Layout/Layout.stories';
import React from 'react';
import { Primary as AboutBlurbStories } from '../About/AboutBlurb.stories';
import { Primary as PageHeaderStories } from '../View/PageHeader.stories';
import { Primary as AboutBiosStories } from '../Cards/AboutBios.stories';

export default {
  title: 'Pages/About',
  component: React.Component,
} as ComponentMeta<typeof React.Component>;

export const Page: ComponentStory<typeof React.Component> = () => (
  <Layout {...Layout.args}>
    <PageHeaderStories header='About' />
    <AboutBlurbStories />
    <AboutBiosStories />
  </Layout>
);
