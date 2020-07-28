import React, { Dispatch, ReactNode } from 'react'
import useSwitch, { StateType, ActionType } from './hooks/useSwitch'
import { css } from 'emotion'

interface Props {
  children: ({
    state,
    dispatch
  }: {
    state: StateType
    dispatch: Dispatch<ActionType>
  }) => ReactNode
}

const wrapper = css``

function Switcher({ children }: Props) {
  const { ref, state, dispatch } = useSwitch()

  return (
    <div ref={ref} className={wrapper} data-testid="Switcher">
      {children({
        state,
        dispatch
      })}
    </div>
  )
}

export default Switcher
