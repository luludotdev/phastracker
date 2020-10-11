import { AppProps } from 'next/app'
import { Provider } from '~components/Store'

const NextApp = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>
      {`
        html, body
          box-sizing border-box
          background-color #111
          overflow-y overlay
          color #fdfdfd

        *, *:before, *:after
          box-sizing inherit

        body
          height 100vh
          margin 0
          padding 2rem 1rem
          padding-bottom 0
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
