import { showMessage } from 'lib/console'
import { AppProps } from 'next/app'
import { Provider } from '~components/Store'
import { LARGE_SIZE } from '~constants'

showMessage()

const NextApp = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>
      {`
        html, body
          box-sizing border-box
          background-color #111
          overflow-y overlay
          color #fdfdfd

          @media only screen and (max-width ${LARGE_SIZE})
            overflow-y initial

        *, *:before, *:after
          box-sizing inherit

        body
          margin 0
          height 100vh
          font 16px/1.5 'Source Sans Pro', system-ui, sans-serif

        ::selection
          background-color rgba(255, 255, 255, 0.2)
      `}
    </style>

    <Provider>
      <Component {...pageProps} />
    </Provider>
  </>
)

export default NextApp
