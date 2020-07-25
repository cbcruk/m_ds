import { css } from 'emotion'

export const wrapper = css`
  display: flex;
  list-style: none;
`

export const item = css`
  position: relative;
  padding-left: 18px;

  .is-dots &::before {
    content: '•';
    position: absolute;
    top: 0px;
    left: 6px;
    font-size: 12px;
    color: #959595;
  }

  &:first-of-type {
    padding-left: 0px;
  }
`
