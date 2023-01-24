import { Evidence } from '~/lib/data/evidence'
import type { Ghost } from '~/lib/data/ghosts'

export const wraith: Ghost = {
  evidence: [Evidence.EMF_5, Evidence.SPIRIT_BOX, Evidence.DOTS],
  description:
    'They are some of the most dangerous ghosts you will find. ' +
    'They are the only ghosts who can travel through walls and have the ability of flight.',
  strength:
    "They almost never touch the ground, so they can't be tracked by footsteps.",
  weakness: 'Wraiths have a toxic reaction to salt.',
}
