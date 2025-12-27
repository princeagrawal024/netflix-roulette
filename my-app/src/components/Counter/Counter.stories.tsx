import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from '@/components';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    initialValue: {
      control: { type: 'number' },
      description: 'Initial count value shown when component loads',
      defaultValue: 1,
    },
  },
  parameters: {
    docs: {
      description: { component: 'A simple counter with increment and decrement buttons' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: { initialValue: 1 },
};

export const WithInitialValue100: Story = {
  args: { initialValue: 100 },
};

export const WithInitialValue10: Story = {
  args: { initialValue: 10 },
};
