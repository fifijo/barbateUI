import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly color: {
      readonly primary: string
      readonly secondary: string
    }
    readonly text: {
      readonly label: string
      readonly paragraph: string
    }
  }
}
