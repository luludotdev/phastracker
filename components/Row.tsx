import clsx from 'clsx'
import { useCallback, useMemo } from 'react'
import type { FC } from 'react'
import { Evidence } from '~data/evidence'
import { GhostState } from '~hooks/useData'
import type { Row as RowProps } from '~hooks/useData'
import { useStore } from '~hooks/useStore'

export const Row: FC<RowProps> = ({ type, evidence, state }) => {
  const { dispatch } = useStore()
  const onClick = useCallback(() => {
    dispatch({ type: 'setSelectedGhost', value: type })
  }, [dispatch, type])

  const isDisabled = useMemo<boolean>(
    () => state === GhostState.DISABLED,
    [state]
  )

  return (
    <tr
      className={clsx(
        'text-center bg-gray-700 border-b last:border-b-0 border-gray-900 border-opacity-50',
        isDisabled && 'bg-opacity-20 text-white text-opacity-50'
      )}
    >
      <td
        className='font-semibold text-left hover:bg-gray-600 cursor-pointer px-3 py-[5px] border-r border-gray-900 border-opacity-50 hover:border-opacity-70'
        onClick={onClick}
      >
        {type}
      </td>

      {Object.entries(Evidence).map(([key, ev]) => (
        <td
          key={key}
          className={clsx(
            'text-sm border-r first:border-l last:border-0 border-gray-900 border-opacity-50',
            !evidence.includes(ev) && 'hidden lg:table-cell'
          )}
        >
          {evidence.includes(ev) ? ev : ''}
        </td>
      ))}
    </tr>
  )
}
