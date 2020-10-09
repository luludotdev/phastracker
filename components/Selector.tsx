import { FC, useCallback } from 'react'
import { Evidence } from '~data/evidence'
import { useData } from '~hooks/useData'
import { useStore } from '~hooks/useStore'

export const Selector: FC = () => {
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

            &.evidence
              text-align left

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
              border-radius 0 0 0 $border-radius
            & > td:last-child
              border-radius 0 0 $border-radius 0
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
          {Object.entries(Evidence).map(([key, evidence]) => (
            <tr key={key}>
              <td className='evidence'>{evidence}</td>
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
    </div>
  )
}
