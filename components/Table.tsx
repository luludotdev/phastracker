import type { FC } from 'react'
import { useData } from '~hooks/useData'
import { Row } from './Row'

export const Table: FC = () => {
  const { ghosts } = useData()

  return (
    <div className='shadow-lg overflow-hidden rounded-lg border border-gray-900 border-opacity-50'>
      <table className='w-full'>
        <tbody>
          {ghosts.map(ghost => (
            <Row key={ghost.type} {...ghost} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
