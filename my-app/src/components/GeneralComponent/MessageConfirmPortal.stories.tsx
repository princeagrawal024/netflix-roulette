import type { Meta, StoryObj } from '@storybook/react';
import { MovieProvider } from '@/context/MovieContext';
import { MessageConfirmPortal } from '@/components/GeneralComponent';

const meta: Meta<typeof MessageConfirmPortal> = {
  title: 'GeneralComponent/MessageConfirmPortal',
  component: MessageConfirmPortal,
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
type Story = StoryObj<typeof MessageConfirmPortal>;

const noopShow = (heading = '', message = '', show = false, isSuccess = false) => {};
const noopSetShow = (visible = false) => {};

export const Default: Story = {
  args: {
    heading: 'Delete Movie',
    message: 'Are you sure you want to delete this movie?',
    movieId: '1',
    showGenericMessagePortalCallback: noopShow,
    setShowDeleteMovieWarningCallback: noopSetShow,
  },
};

export const LongMessage: Story = {
  args: {
    heading: 'Confirm Deletion',
    message:
      'Deleting this movie will remove it permanently from your collection and cannot be undone. Please confirm that you want to proceed with this action.',
    movieId: '123',
    showGenericMessagePortalCallback: noopShow,
    setShowDeleteMovieWarningCallback: noopSetShow,
  },
};

export const NoMovieId: Story = {
  args: {
    heading: 'Delete Movie',
    message: 'No movie id provided. Confirm will be a no-op.',
    movieId: '',
    showGenericMessagePortalCallback: noopShow,
    setShowDeleteMovieWarningCallback: noopSetShow,
  },
};
