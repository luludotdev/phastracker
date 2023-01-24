import { Evidence } from '~/lib/data/evidence'
import type { Ghost } from '~/lib/data/ghosts'

export const moroi: Ghost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.WRITING, Evidence.FREEZING],
  description:
    'Moroi have risen from the grave to drain energy from the living. ' +
    'They have been known to place curses on their victims, curable only by antidotes or moving very far away.',
  strength: 'The weaker their victims, the stronger they will become.',
  weakness: 'They suffer from hyperosmia, weakening them for longer periods.',
}
