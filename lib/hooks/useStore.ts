import { useContext } from 'react'
import { store } from '~components/Store'

// Basically just a helper lol
export const useStore = () => {
  const { state, dispatch } = useContext(store)
  return { state, dispatch }
}
