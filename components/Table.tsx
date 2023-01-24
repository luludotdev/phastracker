import type { FC } from 'react'
import { Row } from '~/components/Row'
import { useData } from '~/lib/hooks/useData'

export const Table: FC = () => {
  const { ghosts } = useData()

  return (
    <div className='overflow-hidden rounded-lg border border-zinc-900 border-opacity-50 shadow-lg'>
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
