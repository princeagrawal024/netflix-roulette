import type { Meta, StoryObj } from '@storybook/react';
import { GenreNavBar } from '@/components';
import { GENRES } from '@/data/app-data';

const meta: Meta<typeof GenreNavBar> = {
  title: 'Components/GenreNavBar',
  component: GenreNavBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A navigation bar to filter movies by genre.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenreNavBar>;

export const Default: Story = {
  args: {
    genres: GENRES,
    selectedGenre: 'ALL',
  },
};

export const WithDocumentarySelected: Story = {
  args: {
    genres: GENRES,
    selectedGenre: 'DOCUMENTARY',
  },
};
