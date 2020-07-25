import { css } from 'emotion'

export const wrapper = css``

export const item = css`
  height: 48px;

  &:not(:first-of-type) {
    margin-top: 6px;
  }

  > a {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;

    &:hover {
      background-color: #e6f2f3;
    }

    &.is-selected {
      background-color: #cce5e7;
    }
  }
`
