import { useReducer } from 'react'

export const SET_VALUE = 'SET_VALUE'

export type StateType = {
  value: string
}

type setValueAction = {
  type: typeof SET_VALUE
  payload: string
}

export type ActionType = setValueAction

const initialState = {
  value: 'Default'
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}

function useCombo(defaultValue?: Partial<StateType>) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...defaultValue
  })

  return {
    state,
    dispatch
  }
}

export default useCombo
