import { Evidence } from '~data/evidence'
import { ghosts, IGhost } from '~data/ghosts'
import { useStore } from './useStore'

export enum GhostState {
  NONE,
  SELECTED,
  DISABLED,
}

export interface IRow extends IGhost {
  state: GhostState
}

interface IReturn {
  ghosts: readonly IRow[]
  enabledEvidence: Evidence[]
}

export const useData: () => IReturn = () => {
  const { state } = useStore()
  const rows: IRow[] = ghosts.map(x => ({ ...x, state: GhostState.NONE }))

  const noConfirmed = [...state.confirmed.values()].every(x => x === false)
  const noRuledOut = [...state.ruledOut.values()].every(x => x === false)
  if (noConfirmed === true && noRuledOut === true) {
    return { ghosts: rows, enabledEvidence: Object.values(Evidence) }
  }

  let evidenceOptions: Evidence[] = []
  const evidenceArray = [...state.confirmed.entries()]
    .filter(([_, x]) => x === true)
    .map(([x]) => x)

  for (const row of rows) {
    const evidence = row.evidence

    let hasAllEvidence = true
    for (const ev of evidenceArray) {
      if (evidence.includes(ev) === false) {
        hasAllEvidence = false
      }
    }

    if (hasAllEvidence) {
      row.state = GhostState.SELECTED
      evidenceOptions = [...evidenceOptions, ...evidence]
    } else {
      row.state = GhostState.DISABLED
    }
  }

  return { ghosts: rows, enabledEvidence: [...new Set([...evidenceOptions])] }
}
