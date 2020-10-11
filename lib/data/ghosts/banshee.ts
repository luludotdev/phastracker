import { Evidence } from '~data/evidence'
import { IGhost } from '.'

export const banshee: IGhost = {
  evidence: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.EMF_5],
  description:
    'A Banshee is a natural hunter and will attack anything. ' +
    'It has been known to stalk its prey one at a time until making its kill.',
  strength: 'They will only target one person at a time.',
  weakness: 'They fear the crucifix and will be less aggressive when near one.',
}
