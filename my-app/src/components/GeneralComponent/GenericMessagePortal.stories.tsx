import type { Meta, StoryObj } from '@storybook/react';
import { GenericMessagePortal } from '@/components/GeneralComponent';

const meta: Meta<typeof GenericMessagePortal> = {
  title: 'GeneralComponent/GenericMessagePortal',
  component: GenericMessagePortal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GenericMessagePortal>;

const mockCallback = () => {};

export const Success: Story = {
  args: {
    heading: 'Success',
    message: 'Operation completed successfully!',
    isSuccess: true,
    showGenericMessagePortalCallback: mockCallback,
  },
};

export const Failure: Story = {
  args: {
    heading: 'Error',
    message: 'Operation failed. Please try again.',
    isSuccess: false,
    showGenericMessagePortalCallback: mockCallback,
  },
};

export const LongMessage: Story = {
  args: {
    heading: 'System Notification',
    message:
      'This is a very long message that demonstrates how the portal handles extended content in a graceful manner.',
    isSuccess: true,
    showGenericMessagePortalCallback: mockCallback,
  },
};

export const CustomHeading: Story = {
  args: {
    heading: 'Custom Alert',
    message: 'This is a custom alert message',
    isSuccess: true,
    showGenericMessagePortalCallback: mockCallback,
  },
};
