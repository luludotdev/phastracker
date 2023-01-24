import { banshee } from './banshee'
import { demon } from './demon'
import { goryo } from './goryo'
import { hantu } from './hantu'
import { jinn } from './jinn'
import { mare } from './mare'
import { myling } from './myling'
import { obake } from './obake'
import { oni } from './oni'
import { onryo } from './onryo'
import { phantom } from './phantom'
import { poltergeist } from './poltergeist'
import { raiju } from './raiju'
import { revenant } from './revenant'
import { shade } from './shade'
import { spirit } from './spirit'
import { twins } from './twins'
import { wraith } from './wraith'
import { yokai } from './yokai'
import { yurei } from './yurei'
import type { Evidence } from '~/lib/data/evidence'

export enum GhostType {
  BANSHEE = 'Banshee',
  DEMON = 'Demon',
  GORYO = 'Goryo',
  HANTU = 'Hantu',
  JINN = 'Jinn',
  MARE = 'Mare',
  MYLING = 'Myling',
  OBAKE = 'Obake',
  ONI = 'Oni',
  ONRYO = 'Onryo',
  PHANTOM = 'Phantom',
  POLTERGEIST = 'Poltergeist',
  RAIJU = 'Raiju',
  REVENANT = 'Revenant',
  SHADE = 'Shade',
  SPIRIT = 'Spirit',
  TWINS = 'The Twins',
  WRAITH = 'Wraith',
  YOKAI = 'Yokai',
  YUREI = 'Yurei',
}

export interface Ghost {
  readonly description: string
  readonly evidence: readonly [Evidence, Evidence, Evidence]

  readonly strength: string
  readonly weakness: string
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
  [GhostType.HANTU]: hantu,
  [GhostType.YOKAI]: yokai,
  [GhostType.GORYO]: goryo,
  [GhostType.MYLING]: myling,
  [GhostType.ONRYO]: onryo,
  [GhostType.TWINS]: twins,
  [GhostType.RAIJU]: raiju,
  [GhostType.OBAKE]: obake,
}
