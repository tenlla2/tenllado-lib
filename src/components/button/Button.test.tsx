import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { Button } from '@/components/'

describe('Button component', () => {
  afterEach(cleanup)

  it('renders with the provided text', () => {
    const buttonText = 'Click me'
    render(<Button text={buttonText} onClick={() => {}} />)
    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  it('executes onClick function when clicked', () => {
    const onClickMock = vi.fn()
    render(<Button text="Click me" onClick={onClickMock} />)
    const button = screen.getByText('Click me')
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button text="Click me" onClick={() => {}} disabled={true} />)
    const button = screen.getByText('Click me') as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-class'
    render(<Button text="Click me" onClick={() => {}} className={customClassName} />)
    const button = screen.getByText('Click me') as HTMLElement
    expect(button.classList.contains(customClassName)).toBe(true)
  })
})
