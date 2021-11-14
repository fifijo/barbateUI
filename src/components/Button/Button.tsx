import styled from 'styled-components/native'
import React from 'react'

type Props = {
  disabled: boolean,
  label: string,
  children: React.ReactNode
}

const Button = ({ disabled = false, label = 'Button' }: Props) => (
  <Button disabled={disabled} label={label}>
    <ButtonText>{label}</ButtonText>
  </Button>
)

const ButtonText = styled.Text`
  font-size: 17px;
`

export default Button
