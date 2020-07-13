import * as React from 'react'
import styles from './style'
import { cx } from 'emotion'

type Pattern = 'p0' | 'p1' | 'p2' | 'p3'

interface Props {
  as?: 'a' | 'button' | 'span'
  disabled?: boolean
  isText?: boolean
  isLoading?: boolean
  className?: string
  pattern?: Pattern
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  as = 'button',
  pattern,
  isText = false,
  isLoading = false,
  disabled,
  className,
  ...props
}: Props) => {
  return React.createElement(as, {
    ...props,
    disabled: disabled || isLoading,
    className: cx(
      isText
        ? styles.text
        : [styles.variables, styles.wrapper, styles[pattern]],
      {
        [styles.loader]: isLoading
      },
      className
    )
  })
}

export default Button
