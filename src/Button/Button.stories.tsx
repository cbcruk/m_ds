import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Button from './Button'
import PaginationWrapper from '../Pagination'
import ComboButton from '../ComboButton'
import Tabs from '../ButtonGroup'

export default {
  title: 'Buttons',
  component: Button,
  decorators: [withKnobs]
}

export function Default() {
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
      <Button isText>Text</Button>
    </>
  )
}

export function Pagination() {
  return (
    <PaginationWrapper>
      <Button disabled>&lt;</Button>
      <Button>&gt;</Button>
    </PaginationWrapper>
  )
}

export function Combo() {
  return <ComboButton options={['Hoo hoo!', 'Eep eep!']} />
}

export function Group() {
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
