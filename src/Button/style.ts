import { cx, css } from 'emotion'
import loaderLight from './assets/loader-light@2x.png'

export const vars = css`
  --color-border-focus: var(--color-brand-kale);
  --color-border-disabled: #dedddc;
  --color-background: var(--color-brand-parsnip);
  --color-background-hover: #d9d7cd;
  --color-background-active: #cecbbf;
  --color-shadow-focus: var(--color-brand-kale);
  --color-font: var(--color-brand-peppercorn);
  --color-font-visited: var(--color-brand-peppercorn);
  --color-font-hover: var(--color-brand-peppercorn);
  --color-font-disabled: #bdbbb9;
  --transition-button-duration: 0.2s;
`

export const base = css`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding-right: 18px;
  padding-left: 18px;
  color: var(--color-font);
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline-width: 0px;
  }

  &:disabled,
  .is-disabled {
    color: var(--color-font-disabled);
    pointer-events: none;
  }
`
const shape = css`
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: 2px;
  background-color: var(--color-background);
  text-align: center;
  user-select: none;
  transition: ${`
    background-color var(--transition-button-duration) ease-in-out 0s,
    opacity var(--transition-button-duration) ease-in-out 0s,
    border var(--transition-button-duration) ease-in-out 0s,
    box-shadow var(--transition-button-duration) ease-in-out 0s
  `};

  :visited {
    color: var(--color-font-visited);
  }

  &:hover {
    background-color: var(--color-background-hover);
    color: var(--color-font-hover);
  }

  &:focus {
    border-color: var(--color-border-focus);
    box-shadow: ${`
      inset 0 0 0 1px var(--color-shadow-focus),
      inset 0 0 0 2px #fff
    `};
  }

  &:active,
  &.is-active {
    background-color: var(--color-background-active);
  }

  &:disabled {
    border-color: var(--color-border-disabled);
    background-color: transparent;
  }
`

export const wrapper = cx([base, shape])

export const text = css`
  border: 0px;
  background-color: transparent;
  color: rgba(36, 28, 21, 0.65);
  font-family: inherit;
  cursor: pointer;

  &:hover,
  &:active,
  &.is-active {
    color: var(--color-brand-peppercorn);
  }

  &:focus {
    outline: none;
  }
`

export const link = cx([base, text])

export const anchor = css`
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: transparent;

  .is-active & {
    border-bottom-color: var(--color-border-focus);
  }
`

export const p0 = css`
  --color-border-focus: #004e56;
  --color-border-disabled: #dedddc;
  --color-background: #716b67;
  --color-background-hover: #56524f;
  --color-background-active: #494542;
  --color-shadow-focus: #004e56;
  --color-font: #fff;
  --color-font-visited: #fff;
  --color-font-hover: #fff;
  --color-font-disabled: #bdbbb9;
`

export const p1 = css`
  --color-border-focus: #004e56;
  --color-border-disabled: #dedddc;
  --color-background: #007c89;
  --color-background-hover: #006570;
  --color-background-active: #004e56;
  --color-shadow-focus: #004e56;
  --color-font: #fff;
  --color-font-visited: #fff;
  --color-font-hover: #fff;
  --color-font-disabled: #bdbbb9;
`

export const p2 = css`
  --color-border-focus: #004e56;
  --color-border-disabled: #dedddc;
  --color-background: #f25f25;
  --color-background-hover: #d7460d;
  --color-background-active: #bf3e0b;
  --color-shadow-focus: #bf3e0b;
  --color-font: #fff;
  --color-font-visited: #fff;
  --color-font-hover: #fff;
  --color-font-disabled: #bdbbb9;
`

export const loader = css`
  padding-left: 44px;
  background-image: ${`url(${loaderLight})`};
  background-repeat: no-repeat;
  background-size: 20px;
  background-position-x: 18px;
  background-position-y: center;
`
