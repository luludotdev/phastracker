import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const banshee: Ghost = {
  evidence: [Evidence.FINGERPRINTS, Evidence.ORBS, Evidence.DOTS],
  description:
    'The Banshee is a natural hunter and will attack anything. ' +
    'They have been known to stalk its prey one at a time until making its kill.',
  strength: 'They will only target one person at a time.',
  weakness: 'They fear the crucifix and will be less aggressive when near one.',
}
