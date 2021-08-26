import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const hantu: Ghost = {
  evidence: [Evidence.FINGERPRINTS, Evidence.ORBS, Evidence.FREEZING],
  description:
    'The Hantu is a rare type of ghost that can be found in hot climates. ' +
    'They are known to attack often during cold weather.',
  strength: 'Lower temperatures can cause the Hantu to move at faster speeds.',
  weakness: 'They will move slower in warmer areas.',
}
