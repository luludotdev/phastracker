import { FC } from 'react'
import { Row } from '../components/row'
import { ghosts } from '../data/ghosts'

export const Table: FC = () => (
  <table>
    <tbody>
      {ghosts.map(ghost => (
        <Row key={ghost.type} ghost={ghost} />
      ))}
    </tbody>
  </table>
)
