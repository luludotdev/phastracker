import clsx from 'clsx'
import { FC, useCallback, useMemo } from 'react'
import { SMALL_SIZE } from '~constants'
import { Evidence } from '~data/evidence'
import { GhostState, IRow } from '~hooks/useData'
import { useSizes } from '~hooks/useSizes'
import { useStore } from '~hooks/useStore'

export const Row: FC<IRow> = ({ type, evidence, state }) => {
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

  const { isSmall, isTiny } = useSizes()
  return (
    <tr className={className}>
      <style jsx>
        {`
          $border-radius = 0.5rem

          td
            &:first-child
              border-left 0
            &:last-child
              border-right 0

            border 1px solid rgb(80, 80, 80)
            padding 0.35rem 0.6rem
            text-align center
            background-color rgba(255, 255, 255, 0.08)

            @media only screen and (max-width ${SMALL_SIZE})
              &
                font-size 0.9rem

            &.ghost
              text-align left
              font-weight bold

              &:hover
                cursor pointer
                background-color rgba(255, 255, 255, 0.15)

            tr.disabled &
              background-color rgba(255, 255, 255, 0.02)
              color rgba(255, 255, 255, 0.25)

              &.ghost:hover
                background-color rgba(255, 255, 255, 0.05)

          tr:first-child
            & > td
              border-top 0
            & > td:first-child
              border-top-left-radius $border-radius
            & > td:last-child
              border-top-right-radius $border-radius

          tr:last-child
            & > td
              border-bottom 0
            & > td:first-child
              border-bottom-left-radius $border-radius
            & > td:last-child
              border-bottom-right-radius $border-radius

        `}
      </style>

      <td className='ghost' onClick={onClick}>
        {type}
      </td>

      {Object.entries(Evidence).map(([key, ev]) =>
        isTiny ? null : isSmall ? (
          evidence.includes(ev) ? (
            <td key={key}>{ev}</td>
          ) : null
        ) : (
          <td key={key}>{evidence.includes(ev) ? ev : ''}</td>
        )
      )}
    </tr>
  )
}
