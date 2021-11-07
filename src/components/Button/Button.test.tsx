import React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'

it('renders button', () => {
  mount(<Button />)

  cy.get('button').should('be.visible')
})
