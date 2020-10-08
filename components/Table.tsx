import React, { FC } from 'react'
import { useData } from '~hooks/useData'
import type { IStyledProps } from '~utils/styledProps'
import { Row } from './Row'

export const Table: FC<IStyledProps> = ({ className, style }) => {
  const { ghosts } = useData()

  return (
    <table className={className} style={style}>
      <tbody>
        {ghosts.map(ghost => (
          <Row key={ghost.type} {...ghost} />
        ))}
      </tbody>
    </table>
  )
}
