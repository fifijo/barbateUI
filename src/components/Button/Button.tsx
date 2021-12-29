import React from 'react'
import { buttonWrapper as ButtonWrapper } from './Button.styles'

interface Props {
  readonly disabled?: boolean
  readonly label: string | 'Button'
  readonly children?: React.ReactNode
}

const button = ({ label }: Props): JSX.Element => (
  <ButtonWrapper>{label}</ButtonWrapper>
)

export default button
