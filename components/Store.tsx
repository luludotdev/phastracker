import {
  createContext,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type Reducer,
  useMemo,
  useReducer,
} from 'react'
import { Evidence } from '~/lib/data/evidence'
import { GhostType } from '~/lib/data/ghosts'

interface State {
  confirmed: Map<Evidence, boolean>
  ruledOut: Map<Evidence, boolean>

  selected: GhostType
}

interface Context {
  state: State
  dispatch: Dispatch<Action>
}

const initialState: State = {
  confirmed: new Map(Object.values(Evidence).map(x => [x, false])),
  ruledOut: new Map(Object.values(Evidence).map(x => [x, false])),

  selected: GhostType.SPIRIT,
}

// @ts-expect-error Does not include Dispatch
export const store = createContext<Readonly<Context>>({ state: initialState })

type Action =
  | { type: 'resetSelector'; value?: never }
  | { type: 'setConfirmed'; value: [Evidence, boolean] }
  | { type: 'setRuledOut'; value: [Evidence, boolean] }
  | { type: 'setSelectedGhost'; value: GhostType }

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    (previousState, action) => {
      switch (action.type) {
        case 'setConfirmed':
          return {
            ...previousState,
            confirmed: setEvidence(previousState.confirmed, ...action.value),
          }

        case 'setRuledOut':
          return {
            ...previousState,
            ruledOut: setEvidence(previousState.ruledOut, ...action.value),
          }

        case 'resetSelector':
          return {
            ...previousState,
            confirmed: initialState.confirmed,
            ruledOut: initialState.ruledOut,
          }

        case 'setSelectedGhost':
          return { ...previousState, selected: action.value }

        default:
          throw new Error('Invalid Action')
      }
    },
    initialState,
  )

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return <store.Provider value={value}>{children}</store.Provider>
}

const setEvidence: (
  previous: Map<Evidence, boolean>,
  type: Evidence,
  value: boolean,
) => Map<Evidence, boolean> = (previous, type, value) => {
  const clone = new Map(previous.entries())
  clone.set(type, value)

  return clone
}
