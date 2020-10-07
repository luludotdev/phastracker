import React, { FC, useMemo } from 'react'
import { Evidence } from '~data/evidence'
import { IGhost } from '~data/ghosts'
import { useStore } from '~hooks/useStore'

interface IProps {
  ghost: IGhost
}

enum GhostState {
  NONE,
  SELECTED,
  DISABLED,
}

export const Row: FC<IProps> = ({ ghost: { type, evidence } }) => {
  const { state } = useStore()
  const ghostState = useMemo<GhostState>(() => {
    const noConfirmed = [...state.confirmed.values()].every(x => x === false)
    const noRuledOut = [...state.ruledOut.values()].every(x => x === false)

    if (noConfirmed === true && noRuledOut === true) {
      return GhostState.NONE
    }

    const confirmed = [...state.confirmed.entries()]
      .filter(([_, x]) => x === true)
      .map(([x]) => x)

    const ruledOut = [...state.ruledOut.entries()]
      .filter(([_, x]) => x === true)
      .map(([x]) => x)

    let hasAll = true
    for (const x of ruledOut) {
      if (evidence.includes(x) === true) {
        hasAll = false
      }
    }

    for (const x of confirmed) {
      if (evidence.includes(x) === false) {
        hasAll = false
      }
    }

    if (hasAll) return GhostState.SELECTED
    return GhostState.DISABLED
  }, [evidence, state.confirmed, state.ruledOut])

  return (
    <tr
      style={{
        backgroundColor:
          ghostState === GhostState.SELECTED
            ? '#78ff8c'
            : ghostState === GhostState.DISABLED
            ? '#ff7878'
            : undefined,
      }}
    >
      <td>{type}</td>

      {Object.entries(Evidence).map(([key, ev]) => (
        <td key={key}>{evidence.includes(ev) ? ev : ''}</td>
      ))}
    </tr>
  )
}
