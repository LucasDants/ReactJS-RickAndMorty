import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from './index';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    totalCountOfRegisters: 100,
    registersPerPage: 2,
    currentPage: 1,
    onPageChange: () => {}
}