import React, { ReactElement } from 'react'

interface Props {
  activityDate: string
  activityTime: string
  icon: string
  children: ReactElement[]
}

function Timeline({ activityDate, activityTime, icon, children }: Props) {
  return (
    <div>
      <div>{activityDate}</div>
      <div>
        <div>
          {activityTime}
          <img src={icon} />
        </div>
        <div>
          <div>{children[0]}</div>
          <div>{children[1]}</div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
