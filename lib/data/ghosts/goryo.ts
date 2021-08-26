import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const goryo: Ghost = {
  evidence: [Evidence.EMF_5, Evidence.FINGERPRINTS, Evidence.DOTS],
  description:
    'Using a video camera is the only way to view a Goryo, ' +
    'when it passes through a DOTS projector.',
  strength: 'They will only show itself on camera if there are people nearby.',
  weakness: 'They are rarely seen far from their place of death.',
}
