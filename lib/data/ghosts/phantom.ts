import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const phantom: Ghost = {
  evidence: [Evidence.FREEZING, Evidence.EMF_5, Evidence.ORBS],
  description:
    'A Phantom is a ghost that can possess the living, most commonly summoned by a Ouija Board. ' +
    'It also induces fear into those around it.',
  strength: 'Looking at a Phantom will considerably drop your sanity.',
  weakness: 'Taking a photo of the Phantom will make it temporarily disappear.',
}
