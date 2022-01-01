import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@themes/nief'
import { resetCSS as ResetCSS } from '@themes/reset'
import { wrapper as Wrapper } from './styles'
import { Button } from '@components'

interface Props {
  children?: React.ReactNode
}

const nief = ({}: Props) => (
  <ThemeProvider theme={theme}>
    <ResetCSS />
    <Wrapper>
      NIEF {''}
      <Button label='Just a fancy button' />
    </Wrapper>
  </ThemeProvider>
)

export default nief
