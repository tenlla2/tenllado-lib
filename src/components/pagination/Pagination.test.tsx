import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { Pagination } from './Pagination'

describe('Pagination component', () => {
  afterEach(cleanup)

  it('renders current page number', () => {
    const currentPage = { number: 1, className: 'current-page' }
    render(
      <Pagination
        currentPage={currentPage}
        prevButton={{ text: 'Prev', onClick: () => {}, disabled: false }}
        nextButton={{ text: 'Next', onClick: () => {}, disabled: false }}
      />,
    )
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('renders previous button', () => {
    const prevButton = { text: 'Prev', onClick: vi.fn(), disabled: false }
    render(
      <Pagination
        currentPage={{ number: 1, className: 'current-page' }}
        prevButton={prevButton}
        nextButton={{ text: 'Next', onClick: () => {}, disabled: false }}
      />,
    )
    const button = screen.getByText('Prev')
    fireEvent.click(button)
    expect(prevButton.onClick).toHaveBeenCalledTimes(1)
  })

  it('renders next button', () => {
    const nextButton = { text: 'Next', onClick: vi.fn(), disabled: false }
    render(
      <Pagination
        currentPage={{ number: 1, className: 'current-page' }}
        prevButton={{ text: 'Prev', onClick: () => {}, disabled: false }}
        nextButton={nextButton}
      />,
    )
    const button = screen.getByText('Next')
    fireEvent.click(button)
    expect(nextButton.onClick).toHaveBeenCalledTimes(1)
  })

  it('disables prev button when disabled prop is true', () => {
    const prevButton = { text: 'Prev', onClick: () => {}, disabled: true }
    render(
      <Pagination
        currentPage={{ number: 1, className: 'current-page' }}
        prevButton={prevButton}
        nextButton={{ text: 'Next', onClick: () => {}, disabled: false }}
      />,
    )
    const button = screen.getByText('Prev') as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })

  it('disables next button when disabled prop is true', () => {
    const nextButton = { text: 'Next', onClick: () => {}, disabled: true }
    render(
      <Pagination
        currentPage={{ number: 1, className: 'current-page' }}
        prevButton={{ text: 'Prev', onClick: () => {}, disabled: false }}
        nextButton={nextButton}
      />,
    )
    const button = screen.getByText('Next') as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })
})
