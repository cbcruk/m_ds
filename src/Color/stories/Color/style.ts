import { css } from 'emotion'

const styles = {
  wrapper: css({
    height: 156,
    padding: '24px 18px',
    backgroundColor: 'var(--color-theme)',
    '&.is-darken': {
      color: 'var(--color-white)'
    }
  }),
  label: css({
    fontWeight: 600
  }),
  color: css({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14
  }),
  code: css({
    fontFamily: 'monospace'
  })
}

export default styles
