import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  const onPressSpy = jest.fn()

  afterEach(() => {
    onPressSpy.mockClear()
  })

  it('Buttons', () => {
    const { getByTestId } = render(
      <Button onClick={onPressSpy}>Default</Button>
    )
    const wrapper = getByTestId('Button')

    fireEvent.click(wrapper)

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveTextContent('Default')
    expect(onPressSpy).toBeCalled()
  })

  it('Disabled', () => {
    const { getByTestId } = render(<Button disabled>Disabled</Button>)
    const wrapper = getByTestId('Button')

    expect(wrapper).toBeDisabled()
  })

  it('Loading', () => {
    const { getByTestId } = render(<Button isLoading>Loading</Button>)
    const wrapper = getByTestId('Button')

    expect(wrapper).toBeDisabled()
  })

  it.each`
    Name           | Component | props
    ${'Button p0'} | ${Button} | ${{ children: 'p0', pattern: 'p0' }}
    ${'Button p1'} | ${Button} | ${{ children: 'p1', pattern: 'p1' }}
    ${'Button p2'} | ${Button} | ${{ children: 'p2', pattern: 'p2' }}
  `('$Name', ({ Component, props }) => {
    const { debug } = render(<Component {...props} />)
  })
})
