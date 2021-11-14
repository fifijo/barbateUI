import React from 'react'
import { ButtonWrapper } from './Button.styles'

type Props = {
  disabled?: boolean
  label: string
  children?: React.ReactNode
}

const Button = ({ label = 'Button' }: Props) => (
  <ButtonWrapper>{label}</ButtonWrapper>
)

export default Button
