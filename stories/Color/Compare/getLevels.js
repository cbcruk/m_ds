// @ts-check
import chroma from 'chroma-js'
import { COLORS } from '../constants'

/**
 * @param {string} color
 */
export default function getLevels(color) {
  const color1 = chroma(color).luminance()
  const result = [
    COLORS.brandColors.coconut.rgb,
    COLORS.brandColors.kale.rgb,
    COLORS.brandColors.peppercorn.rgb,
  ]
    .map((color) => {
      const color2 = chroma(color).luminance()

      return color1 > color2
        ? (color2 + 0.05) / (color1 + 0.05)
        : (color1 + 0.05) / (color2 + 0.05)
    })
    .map((ratio) => {
      return {
        AA: [ratio < 1 / 4.5, ratio < 1 / 3],
        AAA: [ratio < 1 / 7, ratio < 1 / 4.5],
      }
    })
    .map(({ AA }) => AA)

  return result
}
