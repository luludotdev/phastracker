import type { Evidence } from '~data/evidence'
import { banshee } from './banshee'
import { demon } from './demon'
import { goryo } from './goryo'
import { hantu } from './hantu'
import { jinn } from './jinn'
import { mare } from './mare'
import { myling } from './myling'
import { oni } from './oni'
import { phantom } from './phantom'
import { poltergeist } from './poltergeist'
import { revenant } from './revenant'
import { shade } from './shade'
import { spirit } from './spirit'
import { wraith } from './wraith'
import { yokai } from './yokai'
import { yurei } from './yurei'

export enum GhostType {
  BANSHEE = 'Banshee',
  DEMON = 'Demon',
  GORYO = 'Goryo',
  HANTU = 'Hantu',
  JINN = 'Jinn',
  MARE = 'Mare',
  MYLING = 'Myling',
  ONI = 'Oni',
  PHANTOM = 'Phantom',
  POLTERGEIST = 'Poltergeist',
  REVENANT = 'Revenant',
  SHADE = 'Shade',
  SPIRIT = 'Spirit',
  WRAITH = 'Wraith',
  YOKAI = 'Yokai',
  YUREI = 'Yurei',
}

export interface Ghost {
  description: string
  evidence: readonly [Evidence, Evidence, Evidence]

  strength: string
  weakness: string
}

type GhostMap = { [key in GhostType]: Readonly<Ghost> }
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
  [GhostType.HANTU]: hantu,
  [GhostType.YOKAI]: yokai,
  [GhostType.GORYO]: goryo,
  [GhostType.MYLING]: myling,
}
