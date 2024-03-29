import { showMessage } from 'lib/console'
import type { AppProps } from 'next/app'
import { Provider } from '~/components/Store'
import '~/styles/styles.css'

showMessage()

const NextApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
)

export default NextApp
