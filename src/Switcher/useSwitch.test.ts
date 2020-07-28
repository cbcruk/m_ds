import { renderHook, act } from '@testing-library/react-hooks'
import useSwitch, { SHOW_SELECT } from './hooks/useSwitch'

test('Switch', () => {
  const { result } = renderHook(() => useSwitch())

  expect(result.current.state.showSelect).toBeFalsy()

  act(() => {
    result.current.dispatch({
      type: SHOW_SELECT
    })
  })

  expect(result.current.state.showSelect).toBeTruthy()
})
