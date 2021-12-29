import type { ThemedStyledInterface } from 'styled-components'
import baseStyled from 'styled-components'
import type { ThemeInterface } from './themeTypes'
import color from './nief'

export const themeApp: ThemeInterface = color

// eslint-disable-next-line @typescript-eslint/no-type-alias
export type Theme = typeof themeApp
export const styled = baseStyled as ThemedStyledInterface<Theme>
