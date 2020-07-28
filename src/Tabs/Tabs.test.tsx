import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Tabs from './Tabs'

describe('Tabs', () => {
  it('Tabs', () => {
    const { getByTestId, debug } = render(
      <Tabs tabs={['Tab One', 'Tab Two', 'Tab Three']} activeIndex={0}>
        {activeIndex => {
          switch (activeIndex) {
            case 0:
              return <div>Tab1: Column 1</div>
            case 1:
              return <div>Tab2: Column 1</div>
            case 2:
              return <div>Tab3: Column 1</div>
            default:
              return null
          }
        }}
      </Tabs>
    )

    const wrapper = getByTestId('Tabs')
    const tabs = wrapper.querySelectorAll('a')

    let current = wrapper.querySelector('.is-active')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveTextContent('Tab1: Column 1')
    expect(tabs).toHaveLength(3)
    expect(current).toHaveTextContent('Tab One')

    fireEvent.click(tabs[1])
    current = wrapper.querySelector('.is-active')
    expect(wrapper).toHaveTextContent('Tab2: Column 1')
    expect(current).toHaveTextContent('Tab Two')
  })
})
