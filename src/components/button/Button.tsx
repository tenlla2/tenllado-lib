import React from 'react'
import './Button.css'

export interface ButtonProps {
  text: string
  className?: string
  onClick: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick, disabled = false }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
