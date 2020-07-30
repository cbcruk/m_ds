import { css } from 'emotion'

export const wrapper = css`
  display: flex;
`

export const item = css`
  &:first-child {
    border-radius: 2px 0 0 2px;
  }

  &:last-child {
    border-radius: 0 2px 2px 0;
  }
`
