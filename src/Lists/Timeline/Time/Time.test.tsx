import React from 'react'
import { render } from '@testing-library/react'
import Time from './Time'

describe('Time', () => {
  it('Time', () => {
    const { debug, getByTestId, queryByTestId } = render(
      <Time activityTime="6:03am" icon="subscribe" title="Unsubscribed">
        <a href="#">Mailchimp UX · View Results</a>
      </Time>
    )
    const wrapper = getByTestId('Time')
    const time = queryByTestId('Time-activity')
    const icon = queryByTestId('Time-icon')
    const title = queryByTestId('Time-title')
    const children = queryByTestId('Time-children')

    expect(wrapper).toBeInTheDocument()
    expect(time).toHaveTextContent(/6:03am/)
    expect(title).toHaveTextContent(/Unsubscribed/i)
    expect(icon).toHaveClass('subscribe')
    expect(children).toHaveTextContent(/Mailchimp UX · View Results/)
  })
})
