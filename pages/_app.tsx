import { AppProps } from 'next/app'
import { Provider } from '~components/Store'

const NextApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
)

export default NextApp
