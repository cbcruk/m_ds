import React, { useContext } from 'react'
import Button from '../Button'
import { SET_VALUE } from './hooks/useButton'
import ComboButtonContext from './context'
import styles from './style'

const ComboSelect: React.FC = () => {
  const { state, dispatch } = useContext(ComboButtonContext)

  return (
    <div className={styles.select} hidden={!state.showCombo}>
      {state.options.map((option, index) => (
        <Button
          key={index}
          isText
          className={styles.option}
          onClick={() =>
            dispatch({
              type: SET_VALUE,
              payload: option
            })
          }
        >
          {option}
        </Button>
      ))}
    </div>
  )
}

export default ComboSelect
