import styled from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => theme.typography};
  height: 100vh;
  width: 100%;
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.primary.primary1};
  color: ${({ theme }) => theme.colors.secondary.secondary1};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 30px;
`
