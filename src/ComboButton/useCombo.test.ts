import { renderHook, act } from '@testing-library/react-hooks'
import useCombo, { SET_VALUE } from './hooks/useCombo'

test('Switch', () => {
  const { result } = renderHook(() => useCombo())

  expect(result.current.state.value).toBe('Default')

  act(() => {
    result.current.dispatch({
      type: SET_VALUE,
      payload: 'Hello'
    })
  })

  expect(result.current.state.value).toBe('Hello')
})
