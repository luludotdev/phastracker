import { useMemo } from 'react'
import type { FC } from 'react'
import type { Tip } from '~data/tips'

interface Props {
  tip: Tip
}

export const RenderTip: FC<Props> = ({ tip }) => {
  const elements = useMemo(
    () =>
      // eslint-disable-next-line unicorn/no-array-reduce
      tip.split('*').reduce<Array<string | JSX.Element>>((acc, curr, i) => {
        const key = `${i}-${curr}`
        return [...acc, i % 2 === 0 ? curr : <b key={key}>{curr}</b>]
      }, []),
    [tip]
  )

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{elements}</>
}
