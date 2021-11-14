import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/themes'
import { Wrapper } from './styles'
import { Button } from '../components'

type Props = {
  children?: React.ReactNode
}

const Cacao = ({}: Props) => (
  <ThemeProvider theme={theme.default}>
    <Wrapper>
      Cacao demo { '' }
      <Button label='Just a fancy button' />
    </Wrapper>
  </ThemeProvider>
)

export default Cacao
