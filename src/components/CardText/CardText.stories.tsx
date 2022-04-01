import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardText } from '.';

export default {
  title: 'Components/CardText',
  component: CardText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof CardText>;

const Template: ComponentStory<typeof CardText> = (args) => <CardText {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Name',
    text: 'Rick'
}