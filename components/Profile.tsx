import { type FC, useMemo } from 'react'
import { type Ghost, ghosts } from '~/lib/data/ghosts'
import { useStore } from '~/lib/hooks/useStore'

export const Profile: FC = () => {
  const { state } = useStore()
  const ghost = useMemo<Ghost>(() => {
    const selected = ghosts[state.selected]
    if (selected === undefined) throw new Error('Unknown ghost selected!')

    return selected
  }, [state.selected])

  return (
    <div>
      <Entry body={ghost.description} title={state.selected} />
      <Entry body={ghost.strength} title='Strength' />
      <Entry body={ghost.weakness} title='Weakness' />
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
    <h2 className='mb-[2px] text-2xl font-semibold'>{title}</h2>
    <p>{body}</p>
  </div>
)
