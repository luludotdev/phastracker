import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const revenant: Ghost = {
  evidence: [Evidence.FINGERPRINTS, Evidence.WRITING, Evidence.EMF_5],
  description:
    'The Revenant is a slow but violent ghost that will attack indiscriminately. ' +
    'It has been rumoured to travel at a significantly high speed when hunting.',
  strength:
    'They will travel at a significantly faster speed when hunting a victim.',
  weakness: 'Hiding from a Revenant will cause it to move very slowly.',
}
