import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const onryo: Readonly<Ghost> = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.ORBS, Evidence.FREEZING],
  description:
    'The Onryo is often referred to as "The Wrathful Spirit". ' +
    "It steals souls from dying victims's bodies to seek revenge. " +
    'They have been known to fear any form of fire, and will do anything to be far from it.',
  strength: 'Extinguishing a flame can cause them to attack.',
  weakness: 'When threatened, they will be less likely to hunt.',
}
