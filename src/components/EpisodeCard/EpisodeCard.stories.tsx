import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EpisodeCard } from '.';

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

Primary.args = {
  data: {
    id: '1',
    name: 'Pilot',
    air_date: 'December 2, 2013',
    episode: 'SO1E01',
    characters: [
      {
        "name": "Rick Sanchez"
      },
      {
        "name": "Morty Smith"
      },
      {
        "name": "Bepisian"
      },
      {
        "name": "Beth Smith"
      },
      {
        "name": "Canklanker Thom"
      },
      {
        "name": "Davin"
      },
      {
        "name": "Frank Palicky"
      },
      {
        "name": "Glenn"
      },
      {
        "name": "Hookah Alien"
      },
      {
        "name": "Jerry Smith"
      },
      {
        "name": "Jessica"
      },
      {
        "name": "Jessica's Friend"
      },
      {
        "name": "Mr. Goldenfold"
      },
      {
        "name": "Mrs. Sanchez"
      },
      {
        "name": "Principal Vagina"
      },
      {
        "name": "Summer Smith"
      },
      {
        "name": "Davin"
      },
      {
        "name": "Greebybobe"
      },
      {
        "name": "Pripudlian"
      }
    ]
  }
}