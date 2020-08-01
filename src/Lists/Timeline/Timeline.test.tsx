import React from 'react'
import { render } from '@testing-library/react'
import Timeline from './Timeline'
import Time from './Time'

describe('Timeline', () => {
  it('Timeline', () => {
    const { debug, getByTestId, rerender } = render(
      <Timeline activityDate="Yesterday">children</Timeline>
    )
    const wrapper = getByTestId('Timeline')
    const date = getByTestId('Timeline-date')
    const children = getByTestId('Timeline-children')

    expect(wrapper).toBeInTheDocument()
    expect(date).toHaveTextContent(/Yesterday/)
    expect(children).toHaveTextContent(/children/)

    rerender(
      <Timeline activityDate="Yesterday">
        <Time activityTime="6:03am" icon="subscribe" title="Unsubscribed">
          <a href="#">Mailchimp UX · View Results</a>
        </Time>
      </Timeline>
    )

    expect(children).toHaveTextContent(/Mailchimp UX · View Results/)
  })
})
