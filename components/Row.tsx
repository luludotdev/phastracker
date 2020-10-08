import React, { FC } from 'react'
import { Evidence } from '~data/evidence'
import { IRow } from '~hooks/useData'
import type { IStyledProps } from '~utils/styledProps'

export const Row: FC<IRow & IStyledProps> = ({
  type,
  evidence,
  className,
  style,
}) => (
  <tr className={className} style={style}>
    <td>{type}</td>

    {Object.entries(Evidence).map(([key, ev]) => (
      <td key={key}>{evidence.includes(ev) ? ev : ''}</td>
    ))}
  </tr>
)
