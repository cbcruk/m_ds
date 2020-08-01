import React from 'react'
import { render } from '@testing-library/react'
import Icon from './Icon'
import { Status } from '../types'

describe('Icon', () => {
  it.each`
    Name               | Component | props
    ${'Badge success'} | ${Icon}   | ${{ status: Status.Success }}
    ${'Badge info'}    | ${Icon}   | ${{ status: Status.Info }}
    ${'Badge warning'} | ${Icon}   | ${{ status: Status.Warning }}
    ${'Badge error'}   | ${Icon}   | ${{ status: Status.Error }}
  `('$Name', ({ Component, props }) => {
    const { debug } = render(<Icon {...props} />)

    debug()
  })
})
