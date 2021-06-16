import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const spirit: Ghost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.WRITING],
  description:
    'The Spirit is the most common ghost you will come across, however it is still very powerful and dangerous. ' +
    'They are usually discovered at one of their hunting grounds after an unexplained death.',
  strength: 'Nothing.',
  weakness:
    'Using smudge sticks near a Spirit will stop it attacking for a long period of time.',
}
