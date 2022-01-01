/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import styled from 'styled-components'

export const buttonWrapper = styled.button`
  background-color: ${({ theme: { color } }): string => color.primary};
  color: ${({ theme: { color } }): string => color.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: 0;
  padding: 12px;
  margin: 0 10px;
`
