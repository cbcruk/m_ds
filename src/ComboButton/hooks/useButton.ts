import { useReducer, Reducer, useRef } from 'react'
import useOnClickOutside from './useOnClickOutside'

export const SHOW_SELECT = 'SHOW_SELECT'
export const HIDE_SELECT = 'HIDE_SELECT'
export const SET_VALUE = 'SET_VALUE'

export type StateType = {
  showCombo: boolean
  options: string[]
  value: string
}

type ShowOrHideSelectAction = {
  type: typeof SHOW_SELECT | typeof HIDE_SELECT
}

type SetValueAction = {
  type: typeof SET_VALUE
  payload: string
}

export type ActionType = ShowOrHideSelectAction | SetValueAction

export const initialState = {
  showCombo: false,
  options: [],
  value: ''
}

function reducer(state, action) {
  switch (action.type) {
    case SHOW_SELECT:
      return {
        ...state,
        showCombo: true
      }
    case HIDE_SELECT:
      return {
        ...state,
        showCombo: false
      }
    case SET_VALUE:
      return {
        ...state,
        showCombo: false,
        value: action.payload
      }
    default:
      return state
  }
}

function useButton(defaultValues?: Partial<StateType>) {
  const ref = useRef()
  const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(
    reducer,
    {
      ...initialState,
      ...defaultValues
    }
  )

  useOnClickOutside(ref, () => {
    if (state.showCombo) {
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

export default useButton
