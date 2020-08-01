import { css, cx } from 'emotion'
import * as styles from '../style'

export const wrapper = cx([
  styles.wrapper,
  css`
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-brand-peppercorn);
    background-color: var(--color-white);
  `
])

export const icon = css`
  flex: 1;
  color: var(--color-yellow);
`

export const body = cx([styles.body, css``])

export const desc = cx([styles.desc, css``])
