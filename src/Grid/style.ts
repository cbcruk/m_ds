import { css } from 'emotion'
import { Props } from './Grid'

export const wrapper = css`
  display: grid;
  grid-gap: 16px;
  padding: 15px;
  background-color: #bcdba8;
`

export function repeat(size: Props['size']) {
  return css`
    grid-template-columns: ${`repeat(${size}, 1fr)`};
  `
}
