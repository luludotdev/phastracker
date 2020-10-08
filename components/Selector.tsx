import { FC, useCallback } from 'react'
import { Evidence } from '~data/evidence'
import { useData } from '~hooks/useData'
import { useStore } from '~hooks/useStore'
import type { IStyledProps } from '~utils/styledProps'

export const Selector: FC<IStyledProps> = ({ className, style }) => {
  const { state, dispatch } = useStore()
  const { enabledEvidence } = useData()

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
    <table className={className} style={style}>
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
                disabled={
                  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                  state.ruledOut.get(evidence) ||
                  enabledEvidence.includes(evidence) === false
                }
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
