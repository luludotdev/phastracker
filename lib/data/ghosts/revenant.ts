import { Evidence } from '~/lib/data/evidence'
import type { Ghost } from '~/lib/data/ghosts'

export const revenant: Ghost = {
  evidence: [Evidence.ORBS, Evidence.WRITING, Evidence.FREEZING],
  description:
    'The Revenant is a slow but violent ghost that will attack indiscriminately. ' +
    'They have been rumoured to travel at a significantly high speed when hunting.',
  strength:
    'They will travel at a significantly faster speed when hunting a victim.',
  weakness: 'Hiding from a Revenant will cause it to move very slowly.',
}
