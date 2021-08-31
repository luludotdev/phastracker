import { useMemo } from 'react'
import type { FC } from 'react'
import { ghosts } from '~data/ghosts'
import type { Ghost } from '~data/ghosts'
import { useStore } from '~hooks/useStore'

export const Profile: FC = () => {
  const { state } = useStore()
  const ghost = useMemo<Ghost>(() => {
    const selected = ghosts[state.selected]
    if (selected === undefined) throw new Error('Unknown ghost selected!')

    return selected
  }, [state.selected])

  return (
    <div>
      <Entry title={state.selected} body={ghost.description} />
      <Entry title='Strength' body={ghost.strength} />
      <Entry title='Weakness' body={ghost.weakness} />
    </div>
  )
}

interface Props {
  title: string
  body: string
  children?: never
}

const Entry: FC<Props> = ({ title, body }) => (
  <div className='mb-5 last:mb-0'>
    <h2 className='font-semibold text-2xl mb-[2px]'>{title}</h2>
    <p>{body}</p>
  </div>
)
