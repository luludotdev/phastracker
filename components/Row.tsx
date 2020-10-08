import React, { FC } from 'react'
import { Evidence } from '~data/evidence'
import { IRow } from '~hooks/useData'

export const Row: FC<IRow> = ({ type, evidence }) => (
  <tr>
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

          &.ghost
            text-align left
            font-weight bold

        tr:first-child
          & > td
            border-top 0
          & > td:first-child
            border-radius $border-radius 0 0 0
          & > td:last-child
            border-radius 0 $border-radius 0 0


        tr:last-child
          & > td
            border-bottom 0
          & > td:first-child
            border-radius 0 0 0 $border-radius
          & > td:last-child
            border-radius 0 0 $border-radius 0

      `}
    </style>

    <td className='ghost'>{type}</td>

    {Object.entries(Evidence).map(([key, ev]) => (
      <td key={key}>{evidence.includes(ev) ? ev : ''}</td>
    ))}
  </tr>
)
