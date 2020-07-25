import { css } from 'emotion'
import dot from './assets/bg-leaders.png'

export const wrapper = css`
  font-size: 16px;
`

export const item = css`
  display: flex;
  justify-content: space-between;
  background-image: ${`url(${dot})`};
  background-color: #0000;
  background-position-x: 0px;
  background-position-y: 17px;
  background-repeat: repeat-x;

  & + & {
    margin-top: 12px;
  }

  > * {
    background-color: #fff;
  }
`

export const label = css`
  padding-right: 12px;
`

export const value = css`
  padding-left: 12px;
  font-weight: bold;
`
