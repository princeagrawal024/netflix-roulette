import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MovieTile } from '@/components';

const meta: Meta<typeof MovieTile> = {
  title: 'Components/MovieTile',
  component: MovieTile,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'URL for the movie poster image',
    },
    movieName: {
      control: 'text',
      description: 'The name of the movie',
    },
    releaseYear: {
      control: 'text',
      description: 'Release year or formatted date of the movie',
    },
    relevantGenres: {
      control: 'object',
      description: 'List of genres for the movie',
    },
    movieId: {
      control: 'text',
      description: 'Unique movie identifier (used for navigation)',
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          'Displays an individual movie tile with poster, title, release year, and genres. Clicking navigates to the movie details page.',
      },
    },
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof MovieTile>;

export const TitanicMovieTile: Story = {
  args: {
    imageUrl: '/no-poster.png',
    movieName: 'Titanic',
    releaseYear: '1997',
    relevantGenres: ['Romance', 'Drama'],
    movieId: '1',
  },
};

export const InceptionMovieTile: Story = {
  args: {
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    movieName: 'Inception',
    releaseYear: '2003',
    relevantGenres: ['SCI-FI', 'Action'],
    movieId: '2',
  },
};
