import clsx from 'clsx'
import { useCallback, useMemo } from 'react'
import type { FC } from 'react'
import { Evidence } from '~data/evidence'
import { useData } from '~hooks/useData'
import { useStore } from '~hooks/useStore'
import { Checkbox } from './Checkbox'

export const Selector: FC = () => {
  const { state, dispatch } = useStore()
  const { enabledEvidence } = useData()

  const toggleConfirmed = useCallback(
    (evidence: Evidence) => {
      const value = state.confirmed.get(evidence)
      dispatch({ type: 'setConfirmed', value: [evidence, !value] })
    },
    [dispatch, state.confirmed]
  )

  const toggleRuledOut = useCallback(
    (evidence: Evidence) => {
      const value = state.ruledOut.get(evidence)
      dispatch({ type: 'setRuledOut', value: [evidence, !value] })
    },
    [dispatch, state.ruledOut]
  )

  const resetClicked = useCallback(() => {
    dispatch({ type: 'resetSelector' })
  }, [dispatch])

  const entries = useMemo<Array<[string, Evidence, boolean, boolean]>>(() => {
    const x = Object.entries(Evidence).map(([key, evidence]) => {
      const disableConfirm = state.ruledOut.get(evidence)
        ? true
        : enabledEvidence.includes(evidence) === false

      return [
        key,
        evidence,
        disableConfirm,
        state.confirmed.get(evidence) ?? false,
      ]
    })

    return x as Array<[string, Evidence, boolean, boolean]>
  }, [state.confirmed, state.ruledOut, enabledEvidence])

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th className='evidence'>Evidence</th>
            <th>Confirmed</th>
            <th>Ruled Out</th>
          </tr>
        </thead>

        <tbody>
          {entries.map(([key, evidence, disableConfirm, disableRuleOut]) => (
            <tr key={key}>
              <td className='evidence'>{evidence}</td>
              <td className={clsx('checkbox', disableConfirm && 'disabled')}>
                <Checkbox
                  checked={state.confirmed.get(evidence) ?? false}
                  disabled={disableConfirm}
                  onChange={() => {
                    toggleConfirmed(evidence)
                  }}
                />
              </td>

              <td className={clsx('checkbox', disableRuleOut && 'disabled')}>
                <Checkbox
                  checked={state.ruledOut.get(evidence) ?? false}
                  disabled={disableRuleOut}
                  onChange={() => {
                    toggleRuledOut(evidence)
                  }}
                />
              </td>
            </tr>
          ))}

          <tr onClick={resetClicked}>
            <td className='reset' colSpan={3}>
              <b>Reset</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
