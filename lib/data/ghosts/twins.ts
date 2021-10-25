import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const twins: Readonly<Ghost> = {
  evidence: [Evidence.EMF_5, Evidence.SPIRIT_BOX, Evidence.FREEZING],
  description:
    "These ghosts have been reported to mimic each other's actions. " +
    'They alternate their attacks to confuse their prey.',
  strength: 'Either Twin can be angered and initiate an attack on their prey.',
  weakness:
    'They will often both interact with the environment at the same time.',
}
