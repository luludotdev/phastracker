import { Evidence } from '~/lib/data/evidence'
import type { Ghost } from '~/lib/data/ghosts'

export const oni: Ghost = {
  evidence: [Evidence.EMF_5, Evidence.FREEZING, Evidence.DOTS],
  description:
    'Onis are a cousin to the Demon and possess extreme strength. ' +
    'There have been rumours that they become more active around their prey.',
  strength:
    'They are more active when people are nearby and have been seen moving objects at great speed.',
  weakness: 'Being more active makes the Oni easier to find and identify.',
}
