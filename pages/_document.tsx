import Document, {
  type DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class NextDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  public render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:ital,wght@1,800&display=swap'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
