import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const phantom: Readonly<Ghost> = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.DOTS],
  description:
    'A Phantom is a ghost that can possess the living, most commonly summoned by a Ouija Board. ' +
    'They also induce fear into those around it.',
  strength: 'Looking at a Phantom will considerably drop your sanity.',
  weakness: 'Taking a photo of a Phantom will make it temporarily disappear.',
}
