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
    <div className='shadow-lg h-[fit-content] overflow-hidden rounded-lg border border-gray-900 border-opacity-50'>
      <table className='w-full text-center'>
        <thead>
          <tr className='bg-gray-700 border-b border-gray-900 border-opacity-50'>
            <th className='text-left pl-3 py-1 pt-[6px]'>Evidence</th>
            <th className='px-2 py-1 pt-[6px] border-l border-r border-gray-900 border-opacity-50'>
              Confirmed
            </th>
            <th className='px-2 py-1 pr-2 pt-[6px]'>Ruled Out</th>
          </tr>
        </thead>

        <tbody>
          {entries.map(([key, evidence, disableConfirm, disableRuleOut]) => (
            <tr
              key={key}
              className='bg-gray-700 border-b border-gray-900 border-opacity-50'
            >
              <td className='text-left px-3 py-[5px] text-sm'>{evidence}</td>
              <td
                className={clsx(
                  'pb-1 border-l border-r border-gray-900 border-opacity-50',
                  disableConfirm && 'disabled'
                )}
              >
                <Checkbox
                  checked={state.confirmed.get(evidence) ?? false}
                  disabled={disableConfirm}
                  onChange={() => {
                    toggleConfirmed(evidence)
                  }}
                />
              </td>

              <td className={clsx('pb-1', disableRuleOut && 'disabled')}>
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

          <tr className='bg-gray-700' onClick={resetClicked}>
            <td colSpan={3} className='py-2 cursor-pointer hover:bg-gray-600'>
              <b>Reset</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
