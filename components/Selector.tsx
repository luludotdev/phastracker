import { FC, useCallback } from 'react'
import { Evidence } from '~data/evidence'
import { useStore } from '~hooks/useStore'

export const Selector: FC = () => {
  const { state, dispatch } = useStore()

  const setConfirmed = useCallback(
    (evidence: Evidence, value: boolean) => {
      dispatch({ type: 'setConfirmed', value: [evidence, value] })
    },
    [dispatch]
  )

  const setRuledOut = useCallback(
    (evidence: Evidence, value: boolean) => {
      dispatch({ type: 'setRuledOut', value: [evidence, value] })
    },
    [dispatch]
  )

  return (
    <table>
      <thead>
        <tr>
          <th>Evidence</th>
          <th>Confirmed</th>
          <th>Ruled Out</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(Evidence).map(([key, evidence]) => (
          <tr key={key}>
            <td>{evidence}</td>
            <td>
              <input
                type='checkbox'
                checked={state.confirmed.get(evidence)}
                disabled={state.ruledOut.get(evidence)}
                onChange={() =>
                  setConfirmed(evidence, !state.confirmed.get(evidence))
                }
              />
            </td>

            <td>
              <input
                type='checkbox'
                checked={state.ruledOut.get(evidence)}
                disabled={state.confirmed.get(evidence)}
                onChange={() =>
                  setRuledOut(evidence, !state.ruledOut.get(evidence))
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
