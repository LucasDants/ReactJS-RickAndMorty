import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CharacterCard } from '.';
import { characterMock } from '../../utils/character';

export default {
  title: 'Components/CharacterCard',
  component: CharacterCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof CharacterCard>;

const Template: ComponentStory<typeof CharacterCard> = (args) => <CharacterCard {...args} />;

export const Primary = Template.bind({});

Primary.args = characterMock