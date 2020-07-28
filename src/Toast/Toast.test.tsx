import React from 'react'
import { render } from '@testing-library/react'
import Toast from './Toast'

describe('Toast', () => {
  it('Toast is visible', () => {
    const { getByTestId } = render(
      <Toast isVisible>May the Chimp be with you.</Toast>
    )
    const wrapper = getByTestId('Toast')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveStyle({
      opacity: 0,
      transform: 'translateY(5px) translateZ(0)'
    })
  })

  it('Toast is invisible', () => {
    const { queryByTestId } = render(
      <Toast isVisible={false}>May the Chimp be with you.</Toast>
    )
    const wrapper = queryByTestId('Toast')

    expect(wrapper).toBeNull()
  })
})
