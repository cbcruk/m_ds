import * as React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Button from './Button'
import PaginationWrapper from '../Pagination'
import ComboButton from './ComboButton'
import Tabs from '../Tabs'

export default {
  title: 'Buttons',
  component: Button,
  decorators: [withKnobs]
}

export const Default = () => {
  const isDisabled = boolean('Disabled', false)
  const isLoading = boolean('Loading', false)

  return (
    <>
      <Button disabled={isDisabled} isLoading={isLoading}>
        Default
      </Button>
      <Button disabled={isDisabled} isLoading={isLoading} pattern="p0">
        Important
      </Button>
      <Button disabled={isDisabled} isLoading={isLoading} pattern="p1">
        Primary Action
      </Button>
      <Button disabled={isDisabled} isLoading={isLoading} pattern="p2">
        Caution
      </Button>
    </>
  )
}

export const Pagination = () => {
  return (
    <PaginationWrapper>
      <Button disabled>&lt;</Button>
      <Button>&gt;</Button>
    </PaginationWrapper>
  )
}

export const Combo = () => {
  return <ComboButton options={['Hoo hoo!', 'Eep eep!']} />
}

export const Group = () => {
  return (
    <>
      <Tabs
        tabs={[
          { id: 'desktop', name: 'Desktop' },
          { id: 'tablet', name: 'Tablet' },
          { id: 'phone', name: 'Phone' }
        ]}
      />
      <Tabs
        tabs={[
          { id: 'desktop', name: 'Desktop' },
          { id: 'tablet', name: 'Tablet' },
          { id: 'phone', name: 'Phone' }
        ]}
        isNavs
      />
    </>
  )
}
