import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Primary as Layout } from '../Layout/Layout.stories';
import Mission from '../../pages/mission';

export default {
  title: 'Pages/Mission',
  component: React.Component,
} as ComponentMeta<typeof React.Component>;

export const Page: ComponentStory<typeof React.Component> = () => (
  <Layout {...Layout.args}>
    <Mission />
  </Layout>
);
