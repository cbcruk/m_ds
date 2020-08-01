import React, { ReactNode, CSSProperties } from 'react'
import { cx } from 'emotion'
import Button from '../Button'
import Icon from './Icon'
import { Status } from './types'
import * as styles from './style'

interface Action {
  text: string
  handleClick(): void
}

export interface Props {
  title?: string
  isSystem?: boolean
  status: Status
  action?: Action
  theme?: CSSProperties
  media?: string
  children: ReactNode
}

function Feedback({
  status,
  title,
  isSystem = false,
  action,
  theme,
  media,
  children
}: Props) {
  return (
    <div
      className={cx(
        styles.wrapper,
        {
          'is-system': isSystem
        },
        {
          'is-success': status === Status.Success,
          'is-info': status === Status.Info,
          'is-warning': status === Status.Warning,
          'is-error': status === Status.Error
        }
      )}
      style={{
        ...theme
      }}
      data-testid="Feedback"
    >
      {media ? (
        <img
          src={media}
          className={styles.media}
          data-testid="Feedback-media"
        />
      ) : (
        <Icon status={status} data-testid="Feedback-icon" />
      )}

      <div className={styles.body} data-testid="Feedback-body">
        {title && (
          <strong className={styles.title} data-testid="Feedback-title">
            {title}
          </strong>
        )}
        <p className={styles.desc} data-testid="Feedback-desc">
          {children}
        </p>
      </div>

      {action && (
        <Button pattern="p0" onClick={action.handleClick}>
          {action.text}
        </Button>
      )}
    </div>
  )
}

export default Feedback
