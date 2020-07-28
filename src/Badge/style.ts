import { css } from 'emotion'

const STATUS_COLORS = [
  ['success', 'var(--color-brand-cucumber)'],
  ['warning', 'var(--color-brand-squash)'],
  ['error', 'var(--color-brand-yam)'],
  ['info', 'var(--color-brand-cornflower)'],
  ['new', 'var(--color-brand-radish)'],
  ['pro', 'rgba(36, 28, 21, 0.7)'],
  ['notification', 'var(--color-brand-pumpkin)']
]

export const wrapper = css`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding-right: 9px;
  padding-left: 9px;
  border-radius: 9999px;
  background-color: var(--color-brand-parsnip);
  font-size: 14px;
  color: var(--color-brand-peppercorn);
`

export const status = css`
  ${STATUS_COLORS.map(([key, color]) => {
    return `
      &.is-${key} {
        background-color: ${color};
      }    
    `
  })}

  &.is-pro,
  &.is-notification {
    color: #fff;

    &::selection {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`
