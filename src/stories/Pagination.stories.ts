import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components'
import { PAGINATION } from '@/mocks'

const meta = {
  title: 'Example/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const CURRENTPAGE: Story = {
  args: {
    ...PAGINATION,
  },
}
