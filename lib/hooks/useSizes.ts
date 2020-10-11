import { MEDIUM_SIZE, SMALL_SIZE } from '~constants'
import { useMediaQuery } from './useMediaQuery'

export const useSizes = () => {
  const isSmall = useMediaQuery(`(max-width: ${MEDIUM_SIZE})`)
  const isTiny = useMediaQuery(`(max-width: ${SMALL_SIZE})`)

  return { isSmall, isTiny }
}
