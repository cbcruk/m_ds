import React from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'
import Button from '../Button'
import Switcher, { SHOW_SELECT, HIDE_SELECT } from '../Switcher'
import useCombo, { SET_VALUE } from './hooks/useCombo'
import * as styles from './style'

interface Props {
  options: string[]
}

function ComboButton({ options }: Props) {
  const { state: comboState, dispatch: comboDispatch } = useCombo()

  return (
    <Switcher>
      {({ state: switchState, dispatch: switchDispatch }) => (
        <div className={styles.wrapper}>
          <Button as="span">{comboState.value}</Button>

          <Button
            className={styles.button}
            onClick={() => {
              if (!switchState.showSelect) {
                switchDispatch({
                  type: SHOW_SELECT
                })
              }
            }}
          >
            <ChevronDownIcon size={16} />
          </Button>

          {switchState.showSelect && (
            <div className={styles.select}>
              {options.map((option, index) => (
                <Button
                  key={index}
                  isText
                  className={styles.option}
                  onClick={() => {
                    comboDispatch({
                      type: SET_VALUE,
                      payload: option
                    })
                    switchDispatch({
                      type: HIDE_SELECT
                    })
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
          )}
        </div>
      )}
    </Switcher>
  )
}

export default ComboButton
