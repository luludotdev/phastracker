import { type FC, useMemo } from 'react'
import type { Tip } from '~/lib/data/tips'

interface Props {
  tip: Tip
}

export const RenderTip: FC<Props> = ({ tip }) => {
  const elements = useMemo(
    () =>
      tip.split('*').reduce<(JSX.Element | string)[]>((acc, curr, idx) => {
        const key = `${idx}-${curr}`
        return [...acc, idx % 2 === 0 ? curr : <b key={key}>{curr}</b>]
      }, []),
    [tip],
  )

  return <>{elements}</>
}
