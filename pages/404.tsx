import Error from 'next/error'
import type { FC } from 'react'
import { ErrorContainer } from '~/components/ErrorContainer'

const Error404: FC = () => (
  <ErrorContainer>
    <Error statusCode={404} />
  </ErrorContainer>
)

export default Error404
