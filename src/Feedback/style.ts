import { css } from 'emotion'

export const base = css({
  display: 'flex',
  alignItems: 'center',
  paddingTop: 12,
  paddingBottom: 12,
  paddingRight: 15,
  paddingLeft: 15,
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
`

export const wrapper = [base, status]

export const media = css({
  width: 72,
  height: 72
})

export const body = css({
  paddingRight: 15,
  marginRight: 'auto',
  marginLeft: 15
})

export const title = css({
  fontWeight: 500
})

export const desc = css({
  '> a': {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    color: 'inherit',
    textDecoration: 'none'
  }
})

export const system = css({
  justifyContent: 'center',
  fontWeight: 500
})

export const callout = {
  base: css({
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'var(--color-brand-peppercorn)',
    backgroundColor: 'var(--color-white)'
  }),
  icon: css({
    flex: 1,
    color: 'var(--color-yellow)'
  })
}
