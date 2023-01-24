import { Evidence } from '~/lib/data/evidence'
import type { Ghost } from '~/lib/data/ghosts'

export const raiju: Ghost = {
  evidence: [Evidence.EMF_5, Evidence.ORBS, Evidence.DOTS],
  description:
    'The Raiju is a demon that thrives on electrical current. ' +
    'While generally calm, they can become agitated when overwhelmed with power.',
  strength:
    'They can siphon power from nearby electrical devices, making them move faster.',
  weakness:
    'They are constantly disrupting electronic equipment, making them easier to track when attacking.',
}
