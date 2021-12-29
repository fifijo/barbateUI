import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import { themeApp } from '../../styles/themes'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { getByText } = screen

test('renders a button', () => {
  render(
    <ThemeProvider theme={themeApp}>
      <Button label='Just a button' />
    </ThemeProvider>
  )

  expect(getByText('Just a button')).toBeInTheDocument()
})
