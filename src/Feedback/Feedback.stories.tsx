import React from 'react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Badge, { Status as BadgeStatus } from '../Badge'
import Toast from '../Toast'
import Callout from './Callout'
import Feedback from './Feedback'
import { Status } from './types'
import media from './assets/art-other-first-purchase.png'
import Progress from '../Progress'

export default {
  title: 'Feedback',
  component: Feedback,
  decorators: [withKnobs]
}

export function FeedbackBlocks() {
  const title = text('Title', 'Account status')
  const desc = text('Desc', 'All good!')
  const status = select('Status', Object.values(Status), Status.Success)

  return (
    <Feedback title={title} status={status}>
      {desc}
    </Feedback>
  )
}

export function SystemAlerts() {
  const status = select(
    'Status',
    [Status.Warning, Status.Error],
    Status.Warning
  )

  return (
    <Feedback isSystem status={status}>
      Your account has one or more issues that need to be resolved.{' '}
      <a href="#">View issues</a>
    </Feedback>
  )
}

export function UpgradeActionBlock() {
  return (
    <Feedback
      title="Upgrade your account to unlock new features"
      status={Status.Custom}
      media={media}
      action={{
        text: 'Upgrade Now',
        handleClick: action('feedback-action')
      }}
      theme={{
        backgroundColor: 'var(--color-brand-radish)'
      }}
    >
      The list you're importing has more contacts than your account allows. You
      can upgrade your account, archive, or delete contacts
    </Feedback>
  )
}

export function Badges() {
  return (
    <>
      <Badge>Base</Badge>
      <Badge status={BadgeStatus.success}>Success</Badge>
      <Badge status={BadgeStatus.warning}>Warning</Badge>
      <Badge status={BadgeStatus.error}>Error</Badge>
      <Badge status={BadgeStatus.info}>Information</Badge>
      <Badge status={BadgeStatus.new}>New!</Badge>
      <Badge status={BadgeStatus.pro}>Pro</Badge>
      <Badge status={BadgeStatus.notification}>1,234</Badge>
    </>
  )
}

export function Toasts() {
  const isVisible = boolean('show', false)

  return <Toast isVisible={isVisible}>May the Chimp be with you.</Toast>
}

export function CalloutTips() {
  return (
    <Callout>
      This is a tip with a single column. It will automatically have
      .readable-max-width applied, so no need to worry that it will get too big
      for its britches. That's why it doesn't go all the way to the edge like
      its columned brethren below.
    </Callout>
  )
}

export function ProgressDots() {
  return <Progress step={5} activeStepIndex={3} />
}
