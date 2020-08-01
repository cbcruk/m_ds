import { css } from 'emotion'

export const wrapper = css`
  display: flex;
`

export const button = css`
  --color-border: #bdbbb9;
  --color-border-focus: #007c89;
  --color-background: #fff;
  --color-background-hover: #e6f2f3;
  --color-background-active: #cce5e7;
  --width-border-radius: 2px;
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 0px;
  margin-left: ${-1};

  &:first-of-type {
    border-radius: var(--width-border-radius) 0 0 var(--width-border-radius);
    margin-left: 0px;
  }

  &:last-of-type {
    border-radius: 0 var(--width-border-radius) var(--width-border-radius) 0;
  }

  &:active,
  &:focus,
  &.is-active {
    border-color: var(--color-border-focus);
    z-index: 1;
  }
`
