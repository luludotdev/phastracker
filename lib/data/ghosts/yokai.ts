import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const yokai: Ghost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.ORBS, Evidence.WRITING],
  description:
    'A Yokai is a common type of ghost that is attracted to human voices. ' +
    'They can usually be found haunting family homes.',
  strength:
    'Talking near a Yokai will anger it and increase its chance at attacking.',
  weakness: 'When hunting, they can only hear voices close to them.',
}
