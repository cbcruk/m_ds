import { css } from 'emotion'

const styles = {
  wrapper: css({
    display: 'flex'
  }),
  isNavs: css({}),
  button: css({
    '--color-border': '#bdbbb9',
    '--color-border-focus': '#007c89',
    '--color-background': '#fff',
    '--color-background-hover': '#e6f2f3',
    '--color-background-active': '#cce5e7',
    '--width-border-radius': '2px',
    position: 'relative',
    border: '1px solid var(--color-border)',
    borderRadius: 0,
    marginLeft: -1,
    '&:first-of-type': {
      borderRadius: 'var(--width-border-radius) 0 0 var(--width-border-radius)',
      marginLeft: 0
    },
    '&:last-of-type': {
      borderRadius: '0 var(--width-border-radius) var(--width-border-radius) 0'
    },
    ':active, :focus, &.is-active': {
      borderColor: 'var(--color-border-focus)',
      zIndex: 1
    }
  })
}

export default styles
