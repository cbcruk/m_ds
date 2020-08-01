import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ComboButton from './ComboButton'

describe('ComboButton', () => {
  beforeEach(() => {})

  it('ComboButton', () => {
    const { debug, getByTestId } = render(
      <ComboButton options={['Hoo hoo!', 'Eep eep!']} />
    )
    const wrapper = getByTestId('ComboButton')

    expect(wrapper).toBeInTheDocument()

    fireEvent.click(wrapper.querySelector('button'))
    expect(wrapper).toHaveTextContent(/Hoo hoo!|Eep eep!/)
  })
})
