// @ts-check
/** @jsx h */
import { h } from 'preact'
import Color from './Color'
import { COLORS } from './Color/constants'

export default {
  title: 'Color',
  component: Color,
}

export function Default() {
  const { cavendish } = COLORS.brandColors

  return <Color label={cavendish.label} color={cavendish.hex} />
}
