import { Evidence } from '~data/evidence'
import { IGhost } from '.'

export const jinn: IGhost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.EMF_5, Evidence.ORBS],
  description:
    'The Jinn is a territorial ghost that will attack when threatened. ' +
    'It has also been known to be able to travel at significant speed.',
  strength: 'They will travel at a faster speed if its victim is far away.',
  weakness:
    "Turning off the location's power source will prevent them from using their ability.",
}
