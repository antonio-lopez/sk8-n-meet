import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from './Divider';

export default {
  title: 'View/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Primary: ComponentStory<typeof Divider> = () => <Divider />;
