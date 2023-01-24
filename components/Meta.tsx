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

export const Meta: FC<Partial<OptionalProps> & RequiredProps> = ({
  siteName,
  description,
  image,
  colour,
}) => (
  <Head>
    <title>{siteName}</title>

    <meta content='website' property='og:type' />
    <meta content={siteName} property='og:title' />

    {description && <meta content={description} property='og:description' />}
    {image && <meta content={image} property='og:image' />}
    {description && <meta content={description} name='description' />}
    {colour && <meta content={colour} name='theme-color' />}
  </Head>
)
