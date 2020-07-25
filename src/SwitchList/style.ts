import { css, cx } from 'emotion'
import { text } from '../Button/style'

export const wrapper = css`
  position: relative;
`

export const button = cx([
  text,
  css`
    display: flex;
    align-items: center;
    font-size: inherit;
    color: var(--color-brand-kale);

    .octicon {
      margin-left: 10px;
    }
  `
])

export const list = css`
  position: absolute;
  top: calc(100% + 5px);
  overflow: hidden;
  overflow-y: auto;
  min-width: 320px;
  max-height: 480px;
  border: 1px solid #dedddc;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 #dedddc;
  font-size: 14px;
  white-space: nowrap;
`
