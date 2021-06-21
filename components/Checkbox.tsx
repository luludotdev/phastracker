import { useCallback } from 'react'
import type { ChangeEventHandler, FC } from 'react'

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
    [onChange]
  )

  return (
    <>
      <style jsx>
        {`
          input[type='checkbox']
            cursor pointer

            &:disabled
              cursor initial
      `}
      </style>

      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
    </>
  )
}
