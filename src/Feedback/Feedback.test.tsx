import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Feedback from './Feedback'
import { Status } from './types'

describe('Feedback', () => {
  it('Feedback', () => {
    const { debug, getByTestId, queryByTestId } = render(
      <Feedback title="Account status" status={Status.Success}>
        All good!
      </Feedback>
    )
    const wrapper = getByTestId('Feedback')
    const title = queryByTestId('Feedback-title')
    const desc = queryByTestId('Feedback-desc')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('is-success')
    expect(title).toHaveTextContent(/Account status/)
    expect(desc).toHaveTextContent(/All good!/)
  })

  it('System Alerts', () => {
    const { debug, getByTestId } = render(
      <Feedback isSystem status={Status.Warning}>
        Your account has one or more issues that need to be resolved.{' '}
        <a href="#">View issues</a>
      </Feedback>
    )

    const wrapper = getByTestId('Feedback')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('is-system', 'is-warning')
  })

  it('Upgrade Action Block', () => {
    const onClickSPy = jest.fn()
    const { debug, getByTestId } = render(
      <Feedback
        title="Upgrade your account to unlock new features"
        status={Status.Custom}
        media="media"
        action={{
          text: 'Upgrade Now',
          handleClick: onClickSPy
        }}
        theme={{
          backgroundColor: 'var(--color-brand-radish)'
        }}
      >
        The list you're importing has more contacts than your account allows.
        You can upgrade your account, archive, or delete contacts
      </Feedback>
    )

    const wrapper = getByTestId('Feedback')
    const media = getByTestId('Feedback-media')
    const button = getByTestId('Button')

    fireEvent.click(button)

    expect(wrapper).toBeInTheDocument()
    expect(media).toHaveAttribute('src', 'media')
    expect(onClickSPy).toHaveBeenCalled()
    expect(button).toHaveTextContent(/Upgrade Now/)
  })
})
