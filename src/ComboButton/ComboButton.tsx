import React from 'react'
import useButton, { StateType } from './hooks/useButton'
import ComboButtonContext from './context'
import ComboSelect from './ComboSelect'
import ComboButtonGroup from './ComboButtonGroup'
import ComboWrapper from './ComboWrapper'

type Props = Partial<StateType>

const ComboButton: React.FC<Props> = ({ options }: Props) => {
  const { ref, state, dispatch } = useButton({
    value: 'Default',
    options
  })

  return (
    <ComboButtonContext.Provider value={{ state, dispatch }}>
      <ComboWrapper ref={ref}>
        <ComboButtonGroup />
        <ComboSelect />
      </ComboWrapper>
    </ComboButtonContext.Provider>
  )
}

export default ComboButton
