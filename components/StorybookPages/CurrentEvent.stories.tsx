import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Primary as Layout } from '../Layout/Layout.stories';
// import MeetUpDetails from '../../pages/current-events';

export default {
  title: 'Pages/MeetUpDetails',
  component: React.Component,
} as ComponentMeta<typeof React.Component>;

export const Page: ComponentStory<typeof React.Component> = () => (
  <Layout {...Layout.args}>{/* <MeetUpDetails /> */}</Layout>
);
