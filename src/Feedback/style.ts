import { css } from 'emotion'

export const base = css`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 14px;
  color: var(--color-brand-peppercorn);

  &.is-system {
    justify-content: center;
    font-weight: 500;
  }
`

export const status = css`
  &.is-success {
    background-color: var(--color-brand-cucumber);
  }

  &.is-warning {
    background-color: var(--color-brand-squash);
  }

  &.is-error {
    background-color: var(--color-brand-yam);
  }

  &.is-info {
    background-color: var(--color-brand-cornflower);
  }
`

export const wrapper = [base, status]

export const media = css`
  width: 72px;
  height: 72px;
`

export const body = css`
  padding-right: 15px;
  margin-right: auto;
  margin-left: 15px;
`

export const title = css`
  font-weight: 500;
`

export const desc = css`
  > a {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    color: inherit;
    text-decoration: none;
  }
`
