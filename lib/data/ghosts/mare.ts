import { Evidence } from '~/lib/data/evidence'
import type { Ghost } from '~/lib/data/ghosts'

export const mare: Ghost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.ORBS, Evidence.WRITING],
  description:
    'The Mare is the source of all nightmares, making them most powerful in the dark.',
  strength: 'They have an increased chance to attack when in the dark.',
  weakness:
    'Turning the lights on around the Mare will lower its chance to attack.',
}
