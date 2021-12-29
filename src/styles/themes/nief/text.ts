import type { Text } from '../themeTypes'

const text: Text = {
  font: {
    heading: '"Inter", Georgia, serif',
    body: '"Open Sans", Helvetica, Arial, sans-serif'
  },
  size: {
    heading: {
      desktop: {
        h1: 28,
        h2: 26,
        h3: 22,
        h4: 18,
        h5: 16,
        h6: 14
      }
    },
    body: {
      desktop: {
        regular: 24
      }
    }
  },
  weight: {
    light: 200,
    regular: 400,
    bold: 700
  }
}

export default text
