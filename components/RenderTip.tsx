import { FC, useMemo } from 'react'
import { Tip } from '~data/tips'

interface IProps {
  tip: Tip
}

export const RenderTip: FC<IProps> = ({ tip }) => {
  const elements = useMemo(
    () =>
      tip.split('*').reduce<Array<string | JSX.Element>>((acc, curr, i) => {
        const key = `${i}-${curr}`
        return [...acc, i % 2 === 0 ? curr : <b key={key}>{curr}</b>]
      }, []),
    [tip]
  )

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{elements}</>
}
