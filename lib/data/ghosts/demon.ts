import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const demon: Ghost = {
  evidence: [Evidence.FINGERPRINTS, Evidence.WRITING, Evidence.FREEZING],
  description:
    'The Demon is one of the worst ghosts you can encounter. ' +
    'They have been known to attack without a reason.',
  strength: 'They will attack more often then any other ghost.',
  weakness:
    "Asking a Demon successful questions on the Ouija Board won't lower the users sanity.",
}
