import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SwitchList from './SwitchList'

describe('SwitchList', () => {
  it('SwitchList', () => {
    const { debug, getByTestId } = render(
      <SwitchList label="Settings">
        <a href="#">List 1</a>
        <a href="#">List 2</a>
        <a href="#">List 3</a>
      </SwitchList>
    )

    const wrapper = getByTestId('Switcher')
    const button = wrapper.querySelector('button')

    expect(button).toHaveTextContent('Settings')
    expect(button).toContainHTML('svg')

    fireEvent.click(button)

    const links = wrapper.querySelectorAll('a')
    expect(links).toHaveLength(3)
  })
})
