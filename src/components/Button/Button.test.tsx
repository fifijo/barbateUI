import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes'

const { getByText } = screen

test('renders a button', () => {
  render(<ThemeProvider theme={theme.default}><Button label='Just a button' /></ThemeProvider>)

  expect(getByText('Just a button')).toBeInTheDocument()
})
