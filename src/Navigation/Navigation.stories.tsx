import React from 'react'
import LocalNavigation from '../LocalNavigation'
import SwitchList from '../SwitchList'
import TabsComponent from '../Tabs'

export default {
  title: 'Navigation'
}

export function Local_Navigation() {
  return (
    <LocalNavigation>
      <a href="#overview" className="is-active">
        Overview
      </a>
      <SwitchList label="Settings">
        <a href="#">List 1</a>
        <a href="#">List 2</a>
        <a href="#">List 3</a>
      </SwitchList>
      <a href="#billing">Billing</a>
      <a href="#extras">Extras</a>
      <a href="#integrations">Integrations</a>
    </LocalNavigation>
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
