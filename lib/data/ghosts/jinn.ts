import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const jinn: Readonly<Ghost> = {
  evidence: [Evidence.EMF_5, Evidence.FINGERPRINTS, Evidence.FREEZING],
  description:
    'The Jinn is a territorial ghost that will attack when threatened. ' +
    'They have also been known to be able to travel at significant speed.',
  strength: 'They will travel at a faster speed if its victim is far away.',
  weakness:
    "Turning off the location's power source will prevent them from using their ability.",
}
