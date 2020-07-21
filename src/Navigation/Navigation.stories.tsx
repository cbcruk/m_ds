import React from 'react'
import LocalNav from '../LocalNavigation'
import SwitchList from '../SwitchList'
import TabsComponent from '../Tabs'

export default {
  title: 'Navigation'
}

export function LocalNavigation() {
  return (
    <LocalNav>
      <a>Overview</a>
      <a>Settings</a>
      <a>Billing</a>
      <a>Extras</a>
      <a>Integrations</a>
    </LocalNav>
  )
}

export function Switcher() {
  return (
    <SwitchList label="Switch list">
      <a href="#">List 1</a>
      <a href="#">List 2</a>
      <a href="#">List 3</a>
    </SwitchList>
  )
}

export function Tabs() {
  return (
    <TabsComponent tabs={['Tab One', 'Tab Two', 'Tab Three']} activeIndex={0}>
      {activeIndex => {
        switch (activeIndex) {
          case 0:
            return <div>Tab1: Column 1</div>
          case 1:
            return <div>Tab2: Column 1</div>
          case 2:
            return <div>Tab3: Column 1</div>
          default:
            return null
        }
      }}
    </TabsComponent>
  )
}
