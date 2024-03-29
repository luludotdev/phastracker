import { Evidence } from '~/lib/data/evidence'
import type { Ghost } from '~/lib/data/ghosts'

export const yokai: Ghost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.ORBS, Evidence.DOTS],
  description:
    'The Yokai is a common type of ghost that is attracted to human voices. ' +
    'They can usually be found haunting family homes.',
  strength:
    'Talking near a Yokai will anger it and increase its chance at attacking.',
  weakness: 'When hunting, they can only hear voices close to them.',
}
