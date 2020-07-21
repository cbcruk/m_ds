import { css } from 'emotion'

export const wrapper = css({
  display: 'inline-flex',
  position: 'relative'
})

export const button = css({
  justifyContent: 'center',
  width: 43,
  paddingRight: 0,
  paddingLeft: 0,
  marginLeft: 1
})

export const select = css({
  position: 'absolute',
  top: '100%',
  left: 0,
  minWidth: 180,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#dedddc',
  boxShadow: '0 1px 8px rgba(0, 0, 0, 0.2)',
  marginTop: 5
})

export const option = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 48,
  paddingRight: 18,
  paddingLeft: 18,
  ':hover': {
    backgroundColor: '#e6f2f3'
  },
  ':active': {
    backgroundColor: '#cce5e7'
  },
  ':disabled': {
    opacity: 0.5,
    backgroundColor: '#efeeea'
  }
})
