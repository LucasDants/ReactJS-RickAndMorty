import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EpisodeCard } from '.';
import { episodeMock } from '../../utils/episode'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/EpisodeCard',
  component: EpisodeCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof EpisodeCard>;

const Template: ComponentStory<typeof EpisodeCard> = (args) => <EpisodeCard {...args} />;

export const Primary = Template.bind({});

Primary.args = episodeMock