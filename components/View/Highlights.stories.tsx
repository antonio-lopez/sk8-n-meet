import { ComponentStory, ComponentMeta } from '@storybook/react';
import Highlights from './Highlights';

export default {
  title: 'View/Highlights',
  component: Highlights,
} as ComponentMeta<typeof Highlights>;

export const Primary: ComponentStory<typeof Highlights> = () => <Highlights />;
