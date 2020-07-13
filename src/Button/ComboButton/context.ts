import { createContext, Dispatch } from 'react'
import { initialState, StateType, ActionType } from './hooks/useButton'

const ComboButtonContext = createContext<{
  state: StateType
  dispatch: Dispatch<ActionType>
}>({
  state: initialState,
  dispatch: () => null
})

export default ComboButtonContext
