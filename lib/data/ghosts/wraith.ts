import { Evidence } from '~data/evidence'
import { IGhost } from '.'

export const wraith: IGhost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.FREEZING],
  description:
    'They are some of the most dangerous ghosts you will find. ' +
    'They are the only ghosts who can travel through walls and have the ability of flight.',
  strength:
    "They never touch the ground, so they can't be tracked by footsteps.",
  weakness: 'Wraiths have a toxic reaction to salt.',
}
