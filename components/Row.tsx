import React, { FC } from 'react'
import { Evidence } from '~data/evidence'
import { GhostState, IRow } from '~hooks/useData'

export const Row: FC<IRow> = ({ type, state, evidence }) => (
  <tr
    style={{
      backgroundColor:
        state === GhostState.SELECTED
          ? '#78ff8c'
          : state === GhostState.DISABLED
          ? '#ff7878'
          : undefined,
    }}
  >
    <td>{type}</td>

    {Object.entries(Evidence).map(([key, ev]) => (
      <td key={key}>{evidence.includes(ev) ? ev : ''}</td>
    ))}
  </tr>
)
