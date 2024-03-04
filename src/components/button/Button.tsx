import React from 'react'
import './Button.css'
import type { ButtonProps } from './Button.model'

export const Button: React.FC<ButtonProps> = ({
  text,
  className = '',
  onClick,
  disabled = false,
}) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
