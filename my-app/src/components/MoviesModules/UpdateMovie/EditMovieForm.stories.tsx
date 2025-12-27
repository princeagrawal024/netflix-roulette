import type { Meta, StoryObj } from '@storybook/react';
import { EditMovieForm } from '@/components';
import { MovieProvider } from '@/context/MovieContext';

const meta: Meta<typeof EditMovieForm> = {
  title: 'MoviesModules/EditMovieForm',
  component: EditMovieForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MovieProvider>
        <Story />
      </MovieProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EditMovieForm>;

const mockCallback = () => {};

export const BlankEditMovieForm: Story = {
  args: {
    movieIdToEdit: '1',
    showEditMoviePortalCallback: mockCallback,
    showGenericMessagePortalCallback: mockCallback,
  },
};
