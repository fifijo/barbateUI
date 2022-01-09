import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@themes/acme'
import { resetCSS as ResetCSS } from '@styles/reset'
import { Button, Toggler } from '@components'
import useThemeMode from '@hooks/useThemeMode'
import { wrapper as Wrapper } from './styles'

interface Props {
  children?: React.ReactNode
}

const acme = ({}: Props) => {
  const { theme, themeToggler } = useThemeMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <ResetCSS />
      <Wrapper>
        <header>
          <Toggler themeToggler={themeToggler} />
        </header>
        ACME {''}
        <Button label='Just a fancy button' />
      </Wrapper>
    </ThemeProvider>
  )
}

export default acme
