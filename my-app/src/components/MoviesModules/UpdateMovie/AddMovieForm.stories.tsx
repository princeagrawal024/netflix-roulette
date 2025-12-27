import type { Meta, StoryObj } from '@storybook/react';
import { AddMovieForm } from '@/components';
import { MovieProvider } from '@/context/MovieContext';

const meta: Meta<typeof AddMovieForm> = {
  title: 'MoviesModules/AddMovieForm',
  component: AddMovieForm,
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
type Story = StoryObj<typeof AddMovieForm>;

export const Default: Story = {
  args: {},
};

const mockCallback = () => {};

export const BlankAddMovieForm: Story = {
  args: {
    setDisplayAddMovieFormCallBack: mockCallback,
    showGenericMessagePortalCallback: mockCallback,
  },
};
