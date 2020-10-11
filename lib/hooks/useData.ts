import { Evidence } from '~data/evidence'
import { ghosts, GhostType, IGhost } from '~data/ghosts'
import { useStore } from './useStore'

export enum GhostState {
  NONE,
  SELECTED,
  DISABLED,
}

export interface IRow extends IGhost {
  type: GhostType
  state: GhostState
}

interface IReturn {
  ghosts: readonly IRow[]
  enabledEvidence: Evidence[]
}

export const useData: () => IReturn = () => {
  const { state } = useStore()

  let confirmedEvidence: Evidence[] = []
  const rows: IRow[] = Object.entries(ghosts).map(([type, x]) => ({
    ...x,
    type: type as GhostType,
    state: GhostState.NONE,
  }))

  const noConfirmed = [...state.confirmed.values()].every(x => x === false)
  const noRuledOut = [...state.ruledOut.values()].every(x => x === false)
  if (noConfirmed === true && noRuledOut === true) {
    return { ghosts: rows, enabledEvidence: Object.values(Evidence) }
  }

  const confirmed = [...state.confirmed.entries()]
    .filter(([_, x]) => x === true)
    .map(([x]) => x)

  const ruledOut = [...state.ruledOut.entries()]
    .filter(([_, x]) => x === true)
    .map(([x]) => x)

  for (const row of rows) {
    const evidence = row.evidence
    let hasAllEvidence = true

    for (const ev of ruledOut) {
      if (evidence.includes(ev) === true) {
        hasAllEvidence = false
      }
    }

    for (const ev of confirmed) {
      if (evidence.includes(ev) === false) {
        hasAllEvidence = false
      }
    }

    if (hasAllEvidence) {
      row.state = GhostState.SELECTED
      confirmedEvidence = [...confirmedEvidence, ...evidence]
    } else {
      row.state = GhostState.DISABLED
    }
  }

  return {
    ghosts: rows,
    enabledEvidence: [...new Set([...confirmedEvidence])],
  }
}
