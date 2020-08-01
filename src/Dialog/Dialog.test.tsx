import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dialog from './Dialog'

describe('Dialog', () => {
  it('Dialog', () => {
    const onCloseSpy = jest.fn()
    const { debug, getByTestId, queryAllByTestId } = render(
      <Dialog
        isOpen
        title="Are you sure?"
        submitText="Delete"
        handleClose={onCloseSpy}
      >
        <p>body</p>
      </Dialog>
    )
    const wrapper = getByTestId('Dialog')
    const heaer = getByTestId('Dialog-header')
    const body = getByTestId('Dialog-body')
    const [submit, cancel] = queryAllByTestId('Button')

    fireEvent.click(submit)
    fireEvent.click(cancel)

    expect(wrapper).toBeInTheDocument()
    expect(heaer).toHaveTextContent(/Are you sure?/)
    expect(body).toHaveTextContent(/body/)
    expect(onCloseSpy).toHaveBeenCalledTimes(2)
  })

  it('isOpen', () => {
    const { queryByTestId } = render(
      <Dialog
        isOpen={false}
        title="Are you sure?"
        submitText="Delete"
        handleClose={() => {}}
      >
        <p />
      </Dialog>
    )
    const wrapper = queryByTestId('Dialog')

    expect(wrapper).not.toBeInTheDocument()
  })
})
