import { css } from 'emotion'

export const wrapper = css`
  display: flex;
  align-items: center;
`

export const step = css`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-gray);
  margin-left: 12px;
  font-size: 0px;

  &:first-of-type {
    margin-left: 0px;
  }

  &.is-active {
    background-color: var(--color-brand-kale);
    transform: scale(1.2);
  }
`
