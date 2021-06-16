import { useMemo } from 'react'
import type { FC } from 'react'
import { LARGE_SIZE } from '~constants'
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
      <style jsx>
        {`
          h2
            font-weight 500
            margin-top 0.8rem
            margin-bottom 0.2rem

            &:first-child
              margin-top 0

          p
            margin 0

          .profile
            @media only screen and (max-width ${LARGE_SIZE})
              font-size 0.9rem
        `}
      </style>

      <h2>{state.selected}</h2>
      <p>{ghost.description}</p>

      <h2>Strength</h2>
      <p>{ghost.strength}</p>

      <h2>Weakness</h2>
      <p>{ghost.weakness}</p>
    </div>
  )
}
