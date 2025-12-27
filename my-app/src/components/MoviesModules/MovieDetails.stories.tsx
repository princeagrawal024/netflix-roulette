// MovieTile.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MovieDetails } from '@/components';

const meta: Meta<typeof MovieDetails> = {
  title: 'Components/MovieDetails',
  component: MovieDetails,
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
      description: 'Poster image URL for the movie',
    },
    name: {
      control: 'text',
      description: 'Title of the movie',
    },
    releaseYear: {
      control: 'text',
      description: 'Movie release year',
    },
    relevantGenres: {
      control: 'object',
      description: 'Array of genres associated with the movie',
    },
    movieId: {
      control: 'text',
      description: 'Unique ID of the movie (used for navigation)',
    },
    runtime: {
      control: { type: 'number', min: 0, step: 1 },
      description: 'Movie runtime in minutes',
    },
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: 'Average movie rating',
    },
    overview: {
      control: 'text',
      description: 'Brief summary of the movie plot',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Displays detailed information about a movie, including poster, title, genres, runtime, rating, and plot summary. Wrapped with MemoryRouter for navigation context.',
      },
    },
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof MovieDetails>;

export const ShawshankRedemptionMovieTile: Story = {
  args: {
    imageUrl:
      'https://www.tallengestore.com/cdn/shop/products/Movie_Poster_Art_-_The_Shawshank_Redemption_-_Tallenge_Hollywood_Poster_Collection_281a20ac-f062-4b7d-8ccc-436d690078af.jpg?v=1578138044',
    name: 'Shawshank Redemption',
    releaseYear: '1994',
    relevantGenres: ['Crime', 'Drama'],
    movieId: '1',
    runtime: 144,
    rating: 4.9,
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  },
};
