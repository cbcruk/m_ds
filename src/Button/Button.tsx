import React, { ReactNode, createElement } from 'react'
import { cx } from 'emotion'
import * as styles from './style'

type Pattern = 'p0' | 'p1' | 'p2' | 'p3'

interface Props {
  as?: 'a' | 'button' | 'span'
  disabled?: boolean
  isText?: boolean
  isLoading?: boolean
  className?: string
  pattern?: Pattern
  onClick?: () => void
  children: ReactNode
}

function Button({
  as = 'button',
  pattern,
  isText = false,
  isLoading = false,
  disabled,
  className = '',
  children,
  ...props
}: Props) {
  return createElement(
    as,
    {
      ...props,
      disabled: disabled || isLoading,
      className: cx([styles.vars, styles[pattern]], {
        [styles.link]: isText,
        [styles.wrapper]: !isText,
        [styles.loader]: isLoading,
        [className]: true
      }),
      'data-testid': 'Button'
    },
    isText ? <span className={styles.anchor}>{children}</span> : children
  )
}

export default Button
