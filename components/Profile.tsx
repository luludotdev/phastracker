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
    <div className='profile'>
      <h2>{state.selected}</h2>
      <p>{ghost.description}</p>

      <h2>Strength</h2>
      <p>{ghost.strength}</p>

      <h2>Weakness</h2>
      <p>{ghost.weakness}</p>
    </div>
  )
}
