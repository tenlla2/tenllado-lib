import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components'
import { COLUMNS, DATA, PAGINATION } from '@/mocks'

const meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const POKEMON_TABLE: Story = {
  args: {
    data: DATA,
    columns: COLUMNS,
    tableClassName: 'pokemon-table',
    pagination: PAGINATION,
  },
}
