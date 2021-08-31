import clsx from 'clsx'
import { Fragment, useCallback, useMemo } from 'react'
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

  const className = useMemo(
    () =>
      clsx(
        state === GhostState.SELECTED && 'selected',
        state === GhostState.DISABLED && 'disabled'
      ),
    [state]
  )

  return (
    <tr className={className}>
      <td className='ghost' onClick={onClick}>
        {type}
      </td>

      {Object.entries(Evidence).map(([key, ev]) => (
        <Fragment key={key}>
          <td>{ev}</td>
          <td>{evidence.includes(ev) ? ev : ''}</td>
        </Fragment>
      ))}
    </tr>
  )
}
