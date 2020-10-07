import React, {
  createContext,
  FunctionComponent,
  Reducer,
  useReducer,
} from 'react'
import { Evidence } from '~data/evidence'

interface IState {
  confirmed: Map<Evidence, boolean>
  ruledOut: Map<Evidence, boolean>
}

interface IContext {
  state: IState
  dispatch: React.Dispatch<Action>
}

const initialState: IState = {
  confirmed: new Map(Object.values(Evidence).map(x => [x, false])),
  ruledOut: new Map(Object.values(Evidence).map(x => [x, false])),
}

// @ts-expect-error
export const store = createContext<Readonly<IContext>>({ state: initialState })

type Action =
  | { type: 'setConfirmed'; value: [Evidence, boolean] }
  | { type: 'setRuledOut'; value: [Evidence, boolean] }

export const Provider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<IState, Action>>(
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

        default:
          throw new Error('Invalid Action')
      }
    },
    initialState
  )

  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
}

const setEvidence: (
  prev: Map<Evidence, boolean>,
  type: Evidence,
  value: boolean
) => Map<Evidence, boolean> = (previous, type, value) => {
  const clone = new Map([...previous.entries()])
  clone.set(type, value)

  return clone
}
