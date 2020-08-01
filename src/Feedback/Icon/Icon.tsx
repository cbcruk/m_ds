import React from 'react'
import { CheckCircleIcon, InfoIcon, SkipIcon } from '@primer/octicons-react'
import { Status } from '../types'
import { Props } from '../Feedback'

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

export default Icon
