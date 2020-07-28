import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Switcher from './Switcher'
import { SHOW_SELECT } from './hooks/useSwitch'

describe('Switcher', () => {
  it('Switcher', () => {
    const { debug, getByTestId, queryByTestId } = render(
      <Switcher>
        {({ state, dispatch }) => {
          return (
            <>
              <button
                data-testid="Switcher-button"
                onClick={() => {
                  dispatch({
                    type: SHOW_SELECT
                  })
                }}
              >
                button
              </button>
              {state.showSelect && (
                <div data-testid="Switcher-select">select</div>
              )}
            </>
          )
        }}
      </Switcher>
    )

    const wrapper = getByTestId('Switcher')
    expect(wrapper).toBeInTheDocument()

    const button = queryByTestId('Switcher-button')
    fireEvent.click(button)
    expect(queryByTestId('Switcher-select')).toBeTruthy()

    fireEvent.mouseDown(document)
    expect(queryByTestId('Switcher-select')).toBeNull()
  })
})
