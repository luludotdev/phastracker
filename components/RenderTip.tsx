import { FC, useMemo } from 'react'
import { Tip } from '~data/tips'

interface IProps {
  tip: Tip
}

export const RenderTip: FC<IProps> = ({ tip }) => {
  const elements = useMemo(() => {
    const array = tip.split('*')
    return array.reduce<any[]>((acc, curr, i) => {
      const key = `${i}-${curr}`
      return [...acc, i % 2 === 0 ? curr : <b key={key}>{curr}</b>]
    }, [])
  }, [tip])

  return <span>{elements}</span>
}
