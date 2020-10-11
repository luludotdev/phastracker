import { AppProps } from 'next/app'
import { Provider } from '~components/Store'

const NextApp = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>
      {`
        html, body
          box-sizing border-box
          background-color #111
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

    <style jsx global>
      {`
        $color = rgb(255, 255, 255)

        ::-webkit-scrollbar
          width 13px
          height 0

        ::-webkit-scrollbar-thumb
          height 1em
          border 4px solid transparent
          background-clip padding-box
          border-radius 50px
          box-shadow inset 0 0 0 1px transparent

          background-color alpha($color, 0.4)

        ::-webkit-scrollbar-thumb:hover
          background-color alpha($color, 0.45)

        ::-webkit-scrollbar-thumb:active
          background-color alpha($color, 0.55)

        ::-webkit-scrollbar-button
          width 0
          height 0
          display none

        ::-webkit-scrollbar-corner
          background-color transparent
      `}
    </style>

    <Provider>
      <Component {...pageProps} />
    </Provider>
  </>
)

export default NextApp
