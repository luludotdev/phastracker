import clsx from 'clsx'
import { useCallback, useMemo } from 'react'
import type { FC } from 'react'
import { Evidence } from '~/lib/data/evidence'
import { GhostState, type Row as RowProps } from '~/lib/hooks/useData'
import { useStore } from '~/lib/hooks/useStore'

export const Row: FC<RowProps> = ({ type, evidence, state }) => {
  const { dispatch } = useStore()
  const onClick = useCallback(() => {
    dispatch({ type: 'setSelectedGhost', value: type })
  }, [dispatch, type])

  const isDisabled = useMemo<boolean>(
    () => state === GhostState.DISABLED,
    [state],
  )

  return (
    <tr
      className={clsx(
        'border-b border-zinc-900 border-opacity-50 bg-zinc-700 text-center last:border-b-0 motion-safe:transition-all',
        isDisabled && 'bg-opacity-20 text-white text-opacity-50',
      )}
    >
      <td
        className='cursor-pointer border-r border-zinc-900 border-opacity-50 px-3 py-[5px] text-left font-semibold hover:border-opacity-70 hover:bg-zinc-600'
        onClick={onClick}
      >
        {type}
      </td>

      {Object.entries(Evidence).map(([key, ev]) => (
        <td
          className={clsx(
            'hidden border-l border-zinc-900 border-opacity-50 text-sm',
            evidence.includes(ev) && 'md:table-cell',
            !evidence.includes(ev) && 'lg:table-cell',
          )}
          key={key}
        >
          {evidence.includes(ev) ? ev : ''}
        </td>
      ))}
    </tr>
  )
}
