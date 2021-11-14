import { css } from 'styled-components';
import text from './text';
const { font, size, weight } = text

const typography = css`
  font-family: ${font.body};
  font-weight: ${weight.regular};

  h1 {
    font-size: ${size.heading.desktop.h1}px;
  }
`;

export default typography
