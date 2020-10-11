import { FC } from 'react'

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
          max-width 1150px
          border-radius 0.5rem
          background-color rgba(255, 255, 255, 0.08)
          box-shadow 0 5px 15px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.2)
          padding 1rem 1.2rem
          margin-bottom 2rem
      `}
    </style>

    <div className='box'>{children}</div>
  </div>
)
