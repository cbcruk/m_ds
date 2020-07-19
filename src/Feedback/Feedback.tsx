import React, { ReactNode, CSSProperties } from 'react'
import { CheckCircleIcon, InfoIcon, SkipIcon } from '@primer/octicons-react'
import { cx } from 'emotion'
import Button from '../Button'
import { Status } from './types'
import * as styles from './style'

interface Action {
  text: string
  handleClick(): void
}

interface Props {
  title?: string
  isSystem?: boolean
  status: Status
  action?: Action
  theme?: CSSProperties
  media?: string
  children: ReactNode
}

interface IconProps {
  status: Props['status']
}

function Icon({ status }: IconProps) {
  switch (status) {
    case Status.Success:
      return <CheckCircleIcon size={16} />
    case Status.Info:
      return <InfoIcon size={16} />
    case Status.Warning:
    case Status.Error:
      return <SkipIcon size={16} />
    default:
      return null
  }
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
          [styles.system]: isSystem
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
    >
      {media ? (
        <img src={media} className={styles.media} />
      ) : (
        <Icon status={status} />
      )}
      <div className={styles.body}>
        {title && <strong className={styles.title}>{title}</strong>}
        <p className={styles.desc}>{children}</p>
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
