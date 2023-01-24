import { Evidence } from '~/lib/data/evidence'
import type { Ghost } from '~/lib/data/ghosts'

export const mimic: Ghost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.FREEZING],
  description:
    'The Mimic is an elusive, mysterious copycat ghost that mirrors traits and behaviours from others, including other ghost types.',
  strength: "We're unsure what this ghost is capable of. Be careful.",
  weakness: 'Several reports have noted ghost orb sightings near mimics.',
}
