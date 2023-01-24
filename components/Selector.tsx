import clsx from 'clsx'
import { type FC, useCallback, useMemo } from 'react'
import { Checkbox } from '~/components/Checkbox'
import { Evidence } from '~/lib/data/evidence'
import { useData } from '~/lib/hooks/useData'
import { useStore } from '~/lib/hooks/useStore'

export const Selector: FC = () => {
  const { state, dispatch } = useStore()
  const { enabledEvidence } = useData()

  const toggleConfirmed = useCallback(
    (evidence: Evidence) => {
      const value = state.confirmed.get(evidence)
      dispatch({ type: 'setConfirmed', value: [evidence, !value] })
    },
    [dispatch, state.confirmed],
  )

  const toggleRuledOut = useCallback(
    (evidence: Evidence) => {
      const value = state.ruledOut.get(evidence)
      dispatch({ type: 'setRuledOut', value: [evidence, !value] })
    },
    [dispatch, state.ruledOut],
  )

  const resetClicked = useCallback(() => {
    dispatch({ type: 'resetSelector' })
  }, [dispatch])

  const entries = useMemo<[string, Evidence, boolean, boolean][]>(() => {
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

    return x as [string, Evidence, boolean, boolean][]
  }, [state.confirmed, state.ruledOut, enabledEvidence])

  return (
    <div className='h-[fit-content] overflow-hidden rounded-lg border border-zinc-900 border-opacity-50 shadow-lg'>
      <table className='w-full text-center'>
        <thead>
          <tr className='border-b border-zinc-900 border-opacity-50 bg-zinc-700'>
            <th className='px-3 py-1 pt-[6px] text-left'>Evidence</th>
            <th className='border-l border-r border-zinc-900 border-opacity-50 px-3 py-1 pt-[6px]'>
              Confirmed
            </th>
            <th className='px-3 py-1 pt-[6px]'>Ruled Out</th>
          </tr>
        </thead>

        <tbody>
          {entries.map(([key, evidence, disableConfirm, disableRuleOut]) => (
            <tr
              className='border-b border-zinc-900 border-opacity-50 bg-zinc-700'
              key={key}
            >
              <td className='px-3 py-[5px] text-left text-sm'>{evidence}</td>
              <td
                className={clsx(
                  'border-l border-r border-zinc-900 border-opacity-50 pb-1',
                  disableConfirm && 'disabled',
                )}
                onClick={() => {
                  if (!disableConfirm) toggleConfirmed(evidence)
                }}
              >
                <Checkbox
                  checked={state.confirmed.get(evidence) ?? false}
                  disabled={disableConfirm}
                  onChange={() => {
                    if (!disableConfirm) toggleConfirmed(evidence)
                  }}
                />
              </td>

              <td
                className={clsx('pb-1', disableRuleOut && 'disabled')}
                onClick={() => {
                  if (!disableRuleOut) toggleRuledOut(evidence)
                }}
              >
                <Checkbox
                  checked={state.ruledOut.get(evidence) ?? false}
                  disabled={disableRuleOut}
                  onChange={() => {
                    if (!disableRuleOut) toggleRuledOut(evidence)
                  }}
                />
              </td>
            </tr>
          ))}

          <tr className='bg-zinc-700' onClick={resetClicked}>
            <td
              className='cursor-pointer py-2 duration-75 hover:bg-zinc-600 motion-safe:transition-colors'
              colSpan={3}
            >
              <b>Reset</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
