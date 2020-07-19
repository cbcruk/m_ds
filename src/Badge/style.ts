import { css } from 'emotion'

export const wrapper = css({
  display: 'inline-flex',
  alignItems: 'center',
  height: 24,
  paddingRight: 9,
  paddingLeft: 9,
  borderRadius: 9999,
  backgroundColor: 'var(--color-brand-parsnip)',
  fontSize: 14,
  color: 'var(--color-brand-peppercorn)'
})

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

  &.is-new {
    background-color: var(--color-brand-radish);
  }

  &.is-pro {
    background-color: rgba(36, 28, 21, 0.7);
    color: #fff;

    &::selection {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  &.is-notification {
    background-color: var(--color-brand-pumpkin);
    color: #fff;

    &::selection {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`
