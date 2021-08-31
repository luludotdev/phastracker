import type { FC } from 'react'

export const Container: FC = ({ children }) => (
  <div className='container'>
    <div className='box'>{children}</div>
  </div>
)
