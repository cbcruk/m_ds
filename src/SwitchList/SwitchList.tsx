import React, { ReactElement } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'
import Switcher, { HIDE_SELECT, TOGGLE_SELECT } from '../Switcher'
import * as styles from './style'
import { UnorderedList } from '../Lists'

interface Props {
  label: string
  children: ReactElement[]
}

function SwitchList({ label, children }: Props) {
  return (
    <Switcher>
      {({ state, dispatch }) => (
        <div className={styles.wrapper}>
          <button
            type="button"
            className={styles.button}
            aria-haspopup={true}
            aria-expanded={state.showSelect}
            onClick={() =>
              dispatch({
                type: TOGGLE_SELECT
              })
            }
          >
            {label}
            <ChevronDownIcon size={12} />
          </button>
          {state.showSelect && (
            <UnorderedList
              className={styles.list}
              onClick={() => {
                dispatch({
                  type: HIDE_SELECT
                })
              }}
            >
              {children}
            </UnorderedList>
          )}
        </div>
      )}
    </Switcher>
  )
}

export default SwitchList
