import React from 'react'
import Button from './Button'
import PaginationWrapper from '../Pagination'
import ComboButton from '../ComboButton'
import Tabs from '../ButtonGroup'

export default {
  title: 'Buttons',
  component: Button,
}

export function Default(args) {
  return (
    <>
      <Button {...args}>Default</Button>
      <Button {...args} pattern="p0">
        Important
      </Button>
      <Button {...args} pattern="p1">
        Primary Action
      </Button>
      <Button {...args} pattern="p2">
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
          { id: 'phone', name: 'Phone' },
        ]}
        active="desktop"
      />
      <Tabs
        tabs={[
          { id: 'desktop', name: 'Desktop' },
          { id: 'tablet', name: 'Tablet' },
          { id: 'phone', name: 'Phone' },
        ]}
        isNavs
        active="desktop"
      />
    </>
  )
}
