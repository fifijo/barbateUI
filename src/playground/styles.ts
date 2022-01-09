import styled from 'styled-components'

export const wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color:  ${({ theme: { color } }): string => color.primary};
`
export const toggler = styled.button`
  display: flex;
  position: absolute;
  right: 20px;
  top: 10px;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  color:  ${({ theme: { color } }): string => color.primary};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    top: 5px;
    right:50%;
    transform: translate(50%, 0%);
  }
`;
