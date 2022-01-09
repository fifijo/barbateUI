import type { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  background: 'white',
  color: {
    primary: 'black',
    secondary: 'white'
  },
  text: {
    label: 'black',
    paragraph: 'white'
  }
}

export const lightTheme: DefaultTheme = {
  background: 'white',
  color: {
    primary: 'white',
    secondary: 'black'
  },
  text: {
    label: 'black',
    paragraph: 'white'
  }
}
