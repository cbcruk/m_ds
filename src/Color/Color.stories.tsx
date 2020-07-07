import * as React from 'react'
import { Color, Transparent } from './stories'
import { COLORS } from './constants'

export default {
  title: 'Color',
  component: Color
}

export const Brand = () => {
  const { cavendish } = COLORS.brandColors

  return <Color label={cavendish.label} color={cavendish.hex} />
}

export const FunctionalColors = () => {
  const colors = [
    'peppercorn',
    'oyster',
    'tuna',
    'portobello',
    'basmati',
    'parsnip',
    'jasmine',
    'coconut',
    'kale'
  ]

  return colors.map(color => {
    const { label, hex } = COLORS.brandColors[color]
    return <Color key={label} label={label} color={hex} />
  })
}

export const FeedbackColors = () => {
  const colors = ['yam', 'cornflower', 'cucumber', 'squash', 'radish']

  return colors.map(color => {
    const { label, hex } = COLORS.brandColors[color]
    return <Color key={label} label={label} color={hex} />
  })
}

export const AccentColors = () => {
  const colors = ['dragonfruit', 'plum', 'apricot', 'apple', 'pumpkin']

  return colors.map(color => {
    const { label, hex } = COLORS.brandColors[color]
    return <Color key={label} label={label} color={hex} />
  })
}

export const NeutralColors = () => {
  const colors = [
    'peppercorn',
    'peppercorn65',
    'peppercorn30',
    'peppercorn15',
    'coconut',
    'coconut50',
    'coconut20',
    'coconut10'
  ]

  return colors.map(color => {
    const { label, hex, rgb } = COLORS.brandColors[color]
    const isTransparentMode = !hex

    return React.createElement(
      isTransparentMode ? Transparent : React.Fragment,
      {
        key: label
      },
      <Color key={label} label={label} color={hex || rgb} />
    )
  })
}
