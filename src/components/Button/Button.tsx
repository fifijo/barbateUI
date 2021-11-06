import type { ButtonHTMLAttributes } from 'react'
import React from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  textColor?: string
}

const BUTTON: React.FC<Props> = ({
  bgColor = 'yellow',
  textColor = 'black',
  children,
  ...rest
}) => {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }} {...rest}>
      {children}
    </button>
  )
}

export default BUTTON
