import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/themes'
import { Wrapper } from './styles'

type Props = {
  children?: React.ReactNode
}

const Cacao = ({}: Props) => (
  <ThemeProvider theme={theme.default}>
    <Wrapper>Cacao demo</Wrapper>
  </ThemeProvider>
)

export default Cacao
