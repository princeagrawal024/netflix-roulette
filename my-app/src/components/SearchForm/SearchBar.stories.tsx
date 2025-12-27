import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '@/components';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],

  parameters: {
    docs: {
      description: {
        component: 'This is the SearchBar component used to search movies.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    inputSearchQuery: 'suspense thriller',
    onSearchCallback: () => {},
    setDisplayAddMovieFormCallBack: () => {},
  },
};

export const SearchShawshankRedemption: Story = {
  args: {
    inputSearchQuery: 'Shawshank Redemption',
    onSearchCallback: () => {},
    setDisplayAddMovieFormCallBack: () => {},
  },
};
