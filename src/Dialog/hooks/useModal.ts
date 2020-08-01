import { useReducer, Reducer, useCallback } from 'react'

export enum ActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
  HIDE_MODAL = 'HIDE_MODAL'
}

interface State {
  isOpen: boolean
}

interface ShowOrHideAction {
  type: ActionTypes
}

type Action = ShowOrHideAction

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case ActionTypes.HIDE_MODAL:
      return {
        ...state,
        isOpen: false
      }
  }
}

function useModal() {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    isOpen: false
  })
  const handleModal = useCallback(
    type => {
      dispatch({
        type
      })
    },
    [dispatch]
  )

  return {
    state,
    dispatch,
    handleModal
  }
}

export default useModal
