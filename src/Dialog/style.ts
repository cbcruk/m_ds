import { css } from 'emotion'

export const wrapper = css`
  width: 400px;
  min-width: 400px;
  border-radius: 4px;
  font-size: 16px;
`

export const header = css`
  position: relative;
  height: 60px;
  padding: 18px;
  background-color: var(--color-brand-parsnip);
  text-align: center;
  color: var(--color-brand-peppercorn);
`

export const body = css`
  padding-top: 24px;
  padding-right: 18px;
  padding-bottom: 24px;
  padding-left: 18px;
`

export const footer = css`
  padding: 18px;
  border-top: 1px solid #dedddc;
  font-size: 14px;
`

export const close = css`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 60px;
  height: 60px;
`

export const modal = css`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0px;
`
