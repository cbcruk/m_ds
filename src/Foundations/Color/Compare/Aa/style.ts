import { css } from 'emotion'

const styles = {
  tr: css({
    '&:first-of-type': {
      borderTop: '1px solid',
      borderBottom: '1px solid'
    }
  }),
  name: css({
    textTransform: 'capitalize',
    color: 'var(--color)'
  })
}

export default styles
