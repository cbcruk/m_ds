import { css } from 'emotion'

export const wrapper = css({
  width: 400,
  minWidth: 400,
  borderRadius: 4,
  fontSize: 16
})

export const header = css({
  position: 'relative',
  height: 60,
  padding: 18,
  backgroundColor: 'var(--color-brand-parsnip)',
  textAlign: 'center',
  color: 'var(--color-brand-peppercorn)'
})

export const body = css({
  paddingTop: 24,
  paddingRight: 18,
  paddingBottom: 24,
  paddingLeft: 18
})

export const footer = css({
  padding: 18,
  borderTop: '1px solid #dedddc',
  fontSize: 14
})

export const close = css({
  position: 'absolute',
  top: 0,
  right: 0,
  width: 60,
  height: 60
})
