import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const yurei: Ghost = {
  evidence: [Evidence.ORBS, Evidence.FREEZING, Evidence.DOTS],
  description:
    'The Yurei is a type ghost that has returned to the physical world, ' +
    'usually for the purpose of revenge or hatred.',
  strength: 'They have been known to have a stronger effect on people sanity.',
  weakness:
    "Smudging the Yurei's room will cause it to not wander around the location for a long time.",
}
