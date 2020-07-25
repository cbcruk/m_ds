import { css } from 'emotion'

export const wrapper = css`
  display: flex;
  border-bottom: 1px solid #dedddc;
`

export const item = css`
  display: inline-flex;
  align-items: center;
  padding-right: 24px;

  > a,
  [aria-haspopup] {
    display: inline-flex;
    align-items: center;
    height: 54px;
    color: inherit;
    text-decoration: none;
    font-weight: 500;

    &.is-active {
      color: var(--color-brand-kale);
    }
  }
`
