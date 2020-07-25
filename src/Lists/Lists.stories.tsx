import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Leaders from './Leaders'
import Linear, { Separated } from './Linear'
import UnorderedList from './UnorderedList'
import Timeline, { Time } from './Timeline'

export default {
  title: 'Lists',
  decorators: [withKnobs]
}

export function LeadersList() {
  return (
    <Leaders
      items={[
        { label: 'List average', value: '61.7%' },
        {
          label: 'Industry average',
          value: '61.7%'
        }
      ]}
    />
  )
}

export function LinearList() {
  const separated = select(
    'Separated',
    Object.values(Separated),
    Separated.Dots
  )

  return (
    <Linear
      items={['item uno', 'item dos', 'item tres']}
      separated={separated}
    />
  )
}

export function Unordered_List() {
  return (
    <UnorderedList>
      <a href="#one" className="is-selected">
        item one
      </a>
      <a href="#two">item two</a>
      <a href="#three">item three</a>
    </UnorderedList>
  )
}

export function ActivityTimeline() {
  return (
    <Timeline activityDate="Yesterday">
      <Time
        activityTime="1:23pm"
        icon="subscribe"
        title={<a>1 new subscribers to "Mailchimp UX Newsletter"</a>}
      >
        Nice! Guess people like what you're saying. Here are a few:{' '}
        <a href="mailto:freddie@mailchimp.com">freddie@mailchimp.com.</a>
      </Time>
      <Time activityTime="10:24am" icon="subscribe" title="Inbox Preview">
        <a href="#">Check your profile</a>
      </Time>
      <Time activityTime="6:03am" icon="subscribe" title="Unsubscribed">
        <a href="#">Mailchimp UX · View Results</a>
      </Time>
    </Timeline>
  )
}
