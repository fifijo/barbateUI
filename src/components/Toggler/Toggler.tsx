import React from 'react'
import { HiMoon } from 'react-icons/hi'
import { FaSun } from 'react-icons/fa'
import { container as Container, icons as Icons } from './Toggler.styles'

interface Props {
  readonly themeToggler: () => void
}

const toggler = ({ themeToggler }: Props): JSX.Element => (
  <Container>
    <label htmlFor='checkbox' className='switch'>
      <input
        id='checkbox'
        type='checkbox'
        onClick={themeToggler}
        onChange={(): boolean => false}
        checked={window.localStorage.getItem('theme') === 'light'}
      />
      <Icons className='slider round'>
        {window.localStorage.getItem('theme') !== 'light' ? (
          <>
            <HiMoon style={{ marginLeft: '6.3px', height: '10px' }} />
          </>
        ) : (
          <>
            <FaSun size={0} style={{ marginLeft: '41px', height: '10px' }} />
          </>
        )}
      </Icons>
    </label>
  </Container>
)

export default toggler
