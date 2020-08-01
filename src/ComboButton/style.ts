import { css } from 'emotion'

export const wrapper = css`
  display: inline-flex;
  position: relative;
`

export const button = css`
  justify-content: center;
  width: 43px;
  padding-right: 0px;
  padding-left: 0px;
  margin-left: 1px;
`

export const select = css`
  position: absolute;
  top: 100%;
  left: 0px;
  min-width: 180px;
  border-width: 1px;
  border-style: solid;
  border-color: #dedddc;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  margin-top: 5px;
`

export const option = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-right: 18px;
  padding-left: 18px;

  :hover {
    background-color: #e6f2f3;
  }

  :active {
    background-color: #cce5e7;
  }

  :disabled {
    opacity: 0.5;
    background-color: var(--color-brand-parsnip);
  }
`
