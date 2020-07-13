import { css } from 'emotion'

const styles = {
  wrapper: css({
    display: 'flex'
  }),
  item: css({
    '&:first-child': {
      borderRadius: '2px 0 0 2px'
    },
    '&:last-child': {
      borderRadius: '0 2px 2px 0'
    }
  })
}

export default styles
