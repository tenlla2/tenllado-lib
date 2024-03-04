import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { Table } from './Table'
import { PAGINATION, DATA, COLUMNS } from '@/mocks'

describe('Table component', () => {
  afterEach(cleanup)

  it('renders table header with provided columns', () => {
    render(<Table data={DATA} columns={COLUMNS} pagination={PAGINATION} />)
    COLUMNS.forEach((column) => {
      const columnHeader = screen.getByTestId(`column-header-${column}`)
      expect(columnHeader).toBeInTheDocument()
    })
  })

  it('renders table body with provided data', () => {
    render(<Table data={DATA} columns={COLUMNS} pagination={PAGINATION} />)
    DATA.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument()
    })
  })

  it('renders pagination component', () => {
    render(<Table data={DATA} columns={COLUMNS} pagination={PAGINATION} />)
    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
