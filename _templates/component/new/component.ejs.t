---
to: src/<%= name %>/<%= name %>.tsx
---
import React from 'react'
import { cx } from 'emotion'
import * as styles from './style'

interface Props {
  className?: string
  children: ReactNode
}

function <%= name %>({
  className = '',
  children,
  ...props
}: Props) {
  return <div className={styles.wrapper}>{children}</div>
}

export default <%= name %>
