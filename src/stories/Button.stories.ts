import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const BUTTON: Story = {
  args: {
    text: 'Button',
    className: 'custom-button__pagination',
  },
}
