import styled from 'styled-components'

export const ButtonWrapper = styled.main`
  ${({theme}) => theme.typography};
  background-color: ${({theme}) => theme.colors.secondary.secondary1};
  color: ${({theme}) => theme.colors.primary.primary1} ;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`
