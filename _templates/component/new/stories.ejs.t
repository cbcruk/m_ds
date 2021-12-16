---
to: src/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react'
import <%= name %> from './<%= name %>'

export default {
  title: '<%= name %>',
  component: <%= name %>,
}

export function Default(args) {
  return (
    <>
      <<%= name %> {...args}></<%= name %>>
    </>
  )
}