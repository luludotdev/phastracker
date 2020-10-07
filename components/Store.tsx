import React, {
  createContext,
  FunctionComponent,
  Reducer,
  useReducer,
} from 'react'
import { Evidence } from '~data/evidence'

interface IState {
  confirmed: Evidence[]
  ruledOut: Evidence[]
}

interface IContext {
  state: IState
  dispatch: React.Dispatch<Action>
}

const initialState: IState = {
  confirmed: [],
  ruledOut: [],
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
  prev: Evidence[],
  type: Evidence,
  value: boolean
) => Evidence[] = (previous, type, value) => {
  // TODO: Write this lmao
  return previous
}
