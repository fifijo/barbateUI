import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

const { getByText } = screen

test('renders a button', () => {
  render(<Button>Just a button</Button>)

  expect(getByText('Just a button')).toBeInTheDocument()
})
