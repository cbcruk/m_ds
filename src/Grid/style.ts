import { css } from 'emotion'
import { Props } from './types'

const styles = {
  wrapper: css({
    display: 'grid',
    gridGap: 16,
    padding: 15,
    backgroundColor: '#bcdba8'
  }),
  repeat: (size: Props['size']) =>
    css({
      gridTemplateColumns: `repeat(${size}, 1fr)`
    })
}

export default styles
