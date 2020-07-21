import React, { Dispatch, ReactNode } from 'react'
import useSwitch, { StateType, ActionType } from './hooks/useSwitch'

interface Props {
  children: ({
    state,
    dispatch
  }: {
    state: StateType
    dispatch: Dispatch<ActionType>
  }) => ReactNode
}

function Switcher({ children }: Props) {
  const { ref, state, dispatch } = useSwitch()

  return (
    <div ref={ref}>
      {children({
        state,
        dispatch
      })}
    </div>
  )
}

export default Switcher
