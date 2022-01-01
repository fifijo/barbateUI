import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { getByText } = screen

test('renders a button', () => {
  render(<Button label='Just a button' />)

  expect(getByText('Just a button')).toBeInTheDocument()
})
