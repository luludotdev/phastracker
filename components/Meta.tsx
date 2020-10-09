import Head from 'next/head'
import { FC } from 'react'

interface IRequiredProps {
  siteName: string
}

interface IOptionalProps {
  description: string
  image: string
  colour: string
}

export const Meta: FC<IRequiredProps & Partial<IOptionalProps>> = ({
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
