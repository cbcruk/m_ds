import { css } from 'emotion'
import { scale } from 'chroma-js'

export const wrapper = css({
  display: 'flex',
  alignItems: 'center'
})

export const step = css({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: 'var(--color-gray)',
  marginLeft: 12,
  fontSize: 0,
  '&:first-of-type': {
    marginLeft: 0
  },
  '&.is-active': {
    backgroundColor: 'var(--color-brand-kale)',
    transform: 'scale(1.2)'
  }
})
