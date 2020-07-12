import * as React from 'react'
import Aa from './Aa'
import styles from './style'
import { getLevels } from './helpers'

const Compare: React.FC<Props> = ({ color }) => {
  const [coconut, kale, peppercorn] = getLevels(color)

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th></th>
          <th title=">=14 or <18">16px</th>
          <th title=">=18">24px</th>
        </tr>
      </thead>
      <tbody>
        <Aa name="coconut" result={coconut} />
        <Aa name="kale" result={kale} />
        <Aa name="peppercorn" result={peppercorn} />
      </tbody>
    </table>
  )
}

export default Compare
