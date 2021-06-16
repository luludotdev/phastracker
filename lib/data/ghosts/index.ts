import type { Evidence } from '~data/evidence'
import { banshee } from './banshee'
import { demon } from './demon'
import { jinn } from './jinn'
import { mare } from './mare'
import { oni } from './oni'
import { phantom } from './phantom'
import { poltergeist } from './poltergeist'
import { revenant } from './revenant'
import { shade } from './shade'
import { spirit } from './spirit'
import { wraith } from './wraith'
import { yurei } from './yurei'

export enum GhostType {
  BANSHEE = 'Banshee',
  DEMON = 'Demon',
  JINN = 'Jinn',
  MARE = 'Mare',
  ONI = 'Oni',
  PHANTOM = 'Phantom',
  POLTERGEIST = 'Poltergeist',
  REVENANT = 'Revenant',
  SHADE = 'Shade',
  SPIRIT = 'Spirit',
  WRAITH = 'Wraith',
  YUREI = 'Yurei',
}

export interface Ghost {
  description: string
  evidence: readonly [Evidence, Evidence, Evidence]

  strength: string
  weakness: string
}

type GhostMap = { [key in GhostType]: Ghost }
export const ghosts: GhostMap = {
  [GhostType.SPIRIT]: spirit,
  [GhostType.WRAITH]: wraith,
  [GhostType.PHANTOM]: phantom,
  [GhostType.POLTERGEIST]: poltergeist,
  [GhostType.BANSHEE]: banshee,
  [GhostType.JINN]: jinn,
  [GhostType.MARE]: mare,
  [GhostType.REVENANT]: revenant,
  [GhostType.SHADE]: shade,
  [GhostType.DEMON]: demon,
  [GhostType.YUREI]: yurei,
  [GhostType.ONI]: oni,
}
