import clsx from 'clsx'
import { FC, useCallback, useMemo } from 'react'
import { SMALL_SIZE } from '~constants'
import { Evidence } from '~data/evidence'
import { useData } from '~hooks/useData'
import { useStore } from '~hooks/useStore'

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
      <style jsx>
        {`
          $border-radius = 0.5rem

          .container
            border-radius $border-radius
            border 1px solid rgb(80, 80, 80)

          table
            width 100%
            border-collapse collapse

          td, th
            &:first-child
              border-left 0
            &:last-child
              border-right 0

            border 1px solid rgb(80, 80, 80)
            padding 0.35rem 0.6rem
            text-align center
            background-color rgba(255, 255, 255, 0.08)

            @media only screen and (max-width ${SMALL_SIZE})
              &
                font-size 0.9rem

            &.evidence
              text-align left

            &.checkbox > input[type='checkbox']
              cursor pointer

            &.reset:hover
              cursor pointer
              background-color rgba(255, 255, 255, 0.15)

            &.disabled
              background-color rgba(255, 255, 255, 0.02)

          tr:first-child
            & > th
              border-top 0
            & > th:first-child
              border-radius $border-radius 0 0 0
            & > th:last-child
              border-radius 0 $border-radius 0 0

          tr:last-child
            & > td
              border-bottom 0
            & > td:first-child
              border-bottom-left-radius $border-radius
            & > td:last-child
              border-bottom-right-radius $border-radius
        `}
      </style>

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
                <input
                  type='checkbox'
                  checked={state.confirmed.get(evidence)}
                  disabled={disableConfirm}
                  onChange={() => toggleConfirmed(evidence)}
                />
              </td>

              <td className={clsx('checkbox', disableRuleOut && 'disabled')}>
                <input
                  type='checkbox'
                  checked={state.ruledOut.get(evidence)}
                  disabled={disableRuleOut}
                  onChange={() => toggleRuledOut(evidence)}
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
