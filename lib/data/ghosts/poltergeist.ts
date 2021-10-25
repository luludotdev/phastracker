import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const poltergeist: Readonly<Ghost> = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.WRITING],
  description:
    'One of the most famous types of ghost, the Poltergeist, also known as ' +
    'the noisy ghost, can manipulate objects around it to spread fear into its victims.',
  strength: 'They can throw a huge amount of objects at once.',
  weakness:
    'They are ineffective in an empty room as there will no objects to toss around.',
}
