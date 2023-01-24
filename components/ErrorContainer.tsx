import type { FC, PropsWithChildren } from 'react'

export const ErrorContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className='error-container'>{children}</div>
)
