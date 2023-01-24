import { type ChangeEventHandler, type FC, useCallback } from 'react'

interface Props {
  checked: boolean
  disabled?: boolean

  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Checkbox: FC<Props> = ({ checked, disabled, onChange }) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ev => {
      if (typeof onChange === 'function') onChange(ev)
    },
    [onChange],
  )

  return (
    <input
      checked={checked}
      className='form-checkbox cursor-pointer rounded !outline-none !ring-0 !ring-offset-0 disabled:cursor-default disabled:opacity-30 motion-safe:transition-all'
      disabled={disabled}
      onChange={handleChange}
      type='checkbox'
    />
  )
}
