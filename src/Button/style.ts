import { css } from 'emotion'
import loader from './assets/loader-light@2x.png'

const styles = {
  variables: css`
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
  `,
  wrapper: css({
    display: 'inline-flex',
    alignItems: 'center',
    height: 36,
    padding: '0 18px',
    border: '1px solid transparent',
    borderRadius: 2,
    backgroundColor: 'var(--color-background)',
    color: 'var(--color-font)',
    fontWeight: 500,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    transition: `
      background-color var(--transition-button-duration) ease-in-out 0s,
      opacity var(--transition-button-duration) ease-in-out 0s,
      border var(--transition-button-duration) ease-in-out 0s,
      box-shadow var(--transition-button-duration) ease-in-out 0s
    `,
    ':visited': {
      color: 'var(--color-font-visited)'
    },
    ':hover': {
      backgroundColor: 'var(--color-background-hover)',
      color: 'var(--color-font-hover)',
      cursor: 'pointer'
    },
    ':focus': {
      border: '1px solid var(--color-border-focus)',
      boxShadow: `
        inset 0 0 0 1px var(--color-shadow-focus),
        inset 0 0 0 2px #fff
      `,
      outlineWidth: 0
    },
    ':active, &.is-active': {
      backgroundColor: 'var(--color-background-active)'
    },
    ':disabled': {
      border: '1px solid var(--color-border-disabled)',
      backgroundColor: 'transparent',
      color: 'var(--color-font-disabled)',
      pointerEvents: 'none'
    }
  }),
  p0: css`
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
  `,
  p1: css`
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
  `,
  p2: css`
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
  `,
  loader: css({
    paddingLeft: 44,
    backgroundImage: `url(${loader})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 20,
    backgroundPosition: '18px center'
  }),
  text: css({
    border: 0,
    backgroundColor: 'transparent',
    color: 'inherit',
    fontFamily: 'inherit',
    cursor: 'pointer'
  })
}

export default styles
