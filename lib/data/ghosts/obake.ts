import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const obake: Readonly<Ghost> = {
  evidence: [Evidence.EMF_5, Evidence.FINGERPRINTS, Evidence.ORBS],
  description:
    'Obake are terrifying shape-shifters, capable of taking on many forms. ' +
    'They have been seen taking on humanoid shapes to attract their prey.',
  strength:
    'When interacting with the environment, they will rarely leave a trace.',
  weakness: 'Sometimes they will shapeshift, leaving behind unique evidence.',
}
