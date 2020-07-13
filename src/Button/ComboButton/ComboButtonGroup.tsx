import React, { useContext } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'
import Button from '../Button'
import { SHOW_SELECT } from './hooks/useButton'
import ComboButtonContext from './context'
import styles from './style'

const ComboButtonGroup: React.FC = () => {
  const { state, dispatch } = useContext(ComboButtonContext)

  return (
    <>
      <Button as="span">{state.value}</Button>
      <Button
        className={styles.button}
        onClick={() => {
          if (!state.showCombo) {
            dispatch({
              type: SHOW_SELECT
            })
          }
        }}
      >
        <ChevronDownIcon size={16} />
      </Button>
    </>
  )
}

export default ComboButtonGroup
