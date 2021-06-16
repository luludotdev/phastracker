import Head from 'next/head'
import type { FC } from 'react'

interface RequiredProps {
  siteName: string
}

interface OptionalProps {
  description: string
  image: string
  colour: string
}

export const Meta: FC<RequiredProps & Partial<OptionalProps>> = ({
  siteName,
  description,
  image,
  colour,
}) => (
  <Head>
    <title>{siteName}</title>

    <meta property='og:type' content='website' />
    <meta property='og:title' content={siteName} />

    {description && <meta property='og:description' content={description} />}
    {image && <meta property='og:image' content={image} />}
    {description && <meta name='description' content={description} />}
    {colour && <meta name='theme-color' content={colour} />}
  </Head>
)
