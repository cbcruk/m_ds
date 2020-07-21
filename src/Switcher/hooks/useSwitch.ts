import { useReducer, Reducer, useRef } from 'react'
import useOnClickOutside from './useOnClickOutside'

export const SHOW_SELECT = 'SHOW_SELECT'
export const HIDE_SELECT = 'HIDE_SELECT'

export type StateType = {
  showSelect: boolean
}

type ShowOrHideSelectAction = {
  type: typeof SHOW_SELECT | typeof HIDE_SELECT
}

export type ActionType = ShowOrHideSelectAction

export const initialState = {
  showSelect: false
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case SHOW_SELECT:
      return {
        ...state,
        showSelect: true
      }
    case HIDE_SELECT:
      return {
        ...state,
        showSelect: false
      }
    default:
      return state
  }
}

function useSwitch(defaultValues?: Partial<StateType>) {
  const ref = useRef()
  const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(
    reducer,
    {
      ...initialState,
      ...defaultValues
    }
  )

  useOnClickOutside(ref, () => {
    if (state.showSelect) {
      dispatch({
        type: HIDE_SELECT
      })
    }
  })

  return {
    ref,
    state,
    dispatch
  }
}

export default useSwitch
