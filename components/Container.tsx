import type { FC } from 'react'
import { BORDER_RADIUS, LARGE_SIZE } from '~constants'

export const Container: FC = ({ children }) => (
  <div className='container'>
    <style jsx>
      {`
        .container
          display flex
          flex-direction column
          align-items center

        .box
          width 100%
          max-width ${LARGE_SIZE}
          border-radius ${BORDER_RADIUS}
          background-color rgba(255, 255, 255, 0.08)
          box-shadow 0 5px 15px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.2)
          padding 1rem 1.2rem
          margin 1rem 2rem

          @media only screen and (max-width ${LARGE_SIZE})
            border-radius 0
            margin 0
            flex 1
      `}
    </style>

    <div className='box'>{children}</div>
  </div>
)
