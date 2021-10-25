import { Evidence } from '~data/evidence'
import type { Ghost } from '.'

export const shade: Readonly<Ghost> = {
  evidence: [Evidence.EMF_5, Evidence.WRITING, Evidence.FREEZING],
  description:
    'The Shade is known to be a shy ghost. There is evidence that a ' +
    'Shade will stop all paranormal activity if there are multiple people nearby.',
  strength: 'Being shy means the Shade will be harder to find.',
  weakness:
    'They will not enter hunting mode if there are multiple people nearby.',
}
