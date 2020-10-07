import React, { FC } from 'react'
import { Evidence } from '~data/evidence'
import { IGhost } from '~data/ghosts'

interface IProps {
  ghost: IGhost
}

export const Row: FC<IProps> = ({ ghost: { type, evidence } }) => (
  <tr>
    <td>{type}</td>

    {Object.entries(Evidence).map(([key, ev]) => (
      <td key={key}>{evidence.includes(ev) ? ev : ''}</td>
    ))}
  </tr>
)
